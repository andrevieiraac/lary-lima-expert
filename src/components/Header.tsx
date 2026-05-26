import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-4.5"
            : "bg-transparent py-6"
        }`}
        id="navbar"
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo Name & Subtitle */}
          <a href="#" className="flex flex-col focus:outline-none group" id="logo-header">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl md:text-2xl text-white tracking-tighter uppercase">
                Laryssa<span className="text-pink-primary">Lima</span>
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-pink-primary animate-pulse" />
            </div>
            <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-pink-primary -mt-0.5 leading-none transition-all group-hover:tracking-[0.28em]">
              Barbie Maromba
            </span>
          </a>

          {/* CTA header button desktop/mobile on right */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/lary_personaltrainer/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-pink-primary transition-colors cursor-pointer"
              title="Acompanhe no Instagram"
              id="header-insta-btn"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <a
              href="#planos"
              className="py-2.5 px-5 bg-pink-primary/10 hover:bg-pink-primary text-pink-primary hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-pink-primary/20 hover:border-pink-primary transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              id="header-cta-btn"
            >
              <span>Vagas abertas</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>
    </>
  );
}
