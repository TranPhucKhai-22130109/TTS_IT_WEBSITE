"use client";

import React, { useEffect, useState } from "react";

interface SectionOffset {
  id: string;
  top: number;
  bottom: number;
  center: number;
}

export default function ScrollLine() {
  const [sectionOffsets, setSectionOffsets] = useState<SectionOffset[]>([]);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [windowHeight, setWindowHeight] = useState(800);
  const [scrollY, setScrollY] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setScrollY(window.scrollY);
    }

    const updateOffsets = () => {
      const ids = ["home", "products", "features", "specs", "partners", "contact"];
      const offsets = ids
        .map((id) => {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const bottom = top + el.offsetHeight;
            const center = top + el.offsetHeight / 2;
            return { id, top, bottom, center };
          }
          return null;
        })
        .filter(Boolean) as SectionOffset[];

      setSectionOffsets(offsets);
    };

    updateOffsets();

    // Multiple layout checks to ensure elements have finished rendering and height is precise
    const t1 = setTimeout(updateOffsets, 150);
    const t2 = setTimeout(updateOffsets, 600);
    const t3 = setTimeout(updateOffsets, 1200);

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let active = true;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      updateOffsets();
    };

    // requestAnimationFrame physics interpolation (Lerp) for butter-smooth motion
    const updatePhysics = () => {
      if (!active) return;

      const diff = targetScrollY - currentScrollY;
      if (Math.abs(diff) > 0.1) {
        currentScrollY += diff * 0.03; // Slowed down from 0.06 to 0.03 for dramatic smooth trailing
        setScrollY(currentScrollY);
        setScrollSpeed(diff);
      } else {
        if (currentScrollY !== targetScrollY) {
          currentScrollY = targetScrollY;
          setScrollY(currentScrollY);
        }
        if (scrollSpeed !== 0) {
          setScrollSpeed(0);
        }
      }

      requestAnimationFrame(updatePhysics);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    requestAnimationFrame(updatePhysics);

    return () => {
      active = false;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollSpeed]);

  if (!mounted || sectionOffsets.length === 0) return null;

  // Symmetrical margins, adjusted for browser scrollbar on the right side
  const leftX = 24;
  const rightX = windowWidth - 36;

  // Elastic padding makes the curves stretch out vertically under scroll speed (organic bending)
  const verticalPadding = 150 + Math.min(100, Math.abs(scrollSpeed) * 0.25); 
  let pathD = `M ${leftX} 0`;
  const offsets = sectionOffsets;

  for (let i = 0; i < offsets.length; i++) {
    const isLeft = i % 2 === 0;
    const currentX = isLeft ? leftX : rightX;
    const verticalLineEnd = i === offsets.length - 1 
      ? offsets[i].bottom 
      : offsets[i].bottom - verticalPadding;

    pathD += ` L ${currentX} ${verticalLineEnd}`;

    if (i < offsets.length - 1) {
      const nextIsLeft = !isLeft;
      const nextX = nextIsLeft ? leftX : rightX;
      const gapTop = verticalLineEnd;
      const gapBottom = offsets[i + 1].top + verticalPadding;
      const gapMid = (gapTop + gapBottom) / 2;

      // Soft Cubic Bezier horizontal transition between sections
      pathD += ` C ${currentX} ${gapMid}, ${nextX} ${gapMid}, ${nextX} ${gapBottom}`;
    }
  }

  // Calculate the coordinates of the node relative to the document
  const y_target = scrollY + windowHeight / 2;
  let nodeX = leftX;

  if (y_target < offsets[0].top) {
    nodeX = leftX;
  } else if (y_target > offsets[offsets.length - 1].bottom) {
    const lastIsLeft = (offsets.length - 1) % 2 === 0;
    nodeX = lastIsLeft ? leftX : rightX;
  } else {
    for (let i = 0; i < offsets.length; i++) {
      const isLeft = i % 2 === 0;
      const currentX = isLeft ? leftX : rightX;
      
      const sectStart = offsets[i].top + (i === 0 ? 0 : verticalPadding);
      const sectEnd = offsets[i].bottom - (i === offsets.length - 1 ? 0 : verticalPadding);

      if (y_target >= sectStart && y_target <= sectEnd) {
        nodeX = currentX;
        break;
      }

      if (i < offsets.length - 1) {
        const nextIsLeft = !isLeft;
        const nextX = nextIsLeft ? leftX : rightX;
        const gapTop = sectEnd;
        const gapBottom = offsets[i + 1].top + verticalPadding;

        if (y_target > gapTop && y_target < gapBottom) {
          const tLocal = Math.max(0, Math.min(1, (y_target - gapTop) / (gapBottom - gapTop)));
          const factor = 3 * tLocal * tLocal - 2 * tLocal * tLocal * tLocal;
          nodeX = currentX * (1 - factor) + nextX * factor;
          break;
        }
      }
    }
  }

  return (
    <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-[2] hidden md:block">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The snake background guide path */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-30 dark:opacity-20"
        />

        {/* The active floating indicator dot (stays vertically fixed at the viewport center with lerped scroll) */}
        <g>
          <circle
            cx={nodeX}
            cy={y_target}
            r="16"
            fill="#22d3ee"
            filter="url(#glow)"
            className="opacity-80"
          />
          <circle
            cx={nodeX}
            cy={y_target}
            r="8"
            fill="#ec4899"
            className="animate-pulse"
          />
          <circle
            cx={nodeX}
            cy={y_target}
            r="4"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
}
