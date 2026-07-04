import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Products from "../component/Products";
import Features from "../component/Features";
import Specs from "../component/Specs";
import Partners from "../component/Partners";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import ScrollLine from "../component/ScrollLine";

export default function Home(): React.JSX.Element {
  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <ScrollLine />
      <main>
        <Hero />
        <Products />
        <Features />
        <Specs />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
