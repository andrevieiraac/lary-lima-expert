import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SocialProofSection from "./components/SocialProofSection";
import ChallengeSection from "./components/ChallengeSection";
import PlansSection from "./components/PlansSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { MessageCircle, ArrowUp, CheckCircle, Flame, Sparkles } from "lucide-react";

const monthsPt = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function App() {
  const [showScrollControls, setShowScrollControls] = useState(false);

  const getCurrentCycle = () => {
    const date = new Date();
    const currentMonth = monthsPt[date.getMonth()];
    const nextMonth = monthsPt[(date.getMonth() + 1) % 12];
    return `${currentMonth}/${nextMonth}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollControls(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-dark-bg min-h-screen selection:bg-pink-primary selection:text-white" id="main-landing-root">
      
      {/* 1. Transparent Luxurious Sticky Header Navigation */}
      <Header />

      {/* Floating Spark or Top Alert strip highlighting recruitment status */}
      <div className="bg-zinc-950 border-b border-dark-border py-2 px-4 text-center text-[10px] md:text-xs font-semibold tracking-wider text-zinc-300 uppercase relative z-50 flex items-center justify-center gap-1.5 pt-20 md:pt-24">
        <Flame className="w-3.5 h-3.5 text-pink-primary animate-pulse" />
        <span>Vagas abertas para o ciclo de acompanhamento de {getCurrentCycle()}.</span>
        <span className="hidden sm:inline text-pink-primary font-bold">Inscrições limitadas por suporte.</span>
      </div>

      <main className="relative">
        
        {/* About Section - Hero Presenting Laryssa Real Portrait and Details */}
        <AboutSection />

        {/* Real life social proofs before / after screenshot interactive grid */}
        <SocialProofSection />

        {/* Challenge 21 Days detailed container listing components */}
        <ChallengeSection />

        {/* Elegant Plans Matrix Card lists targeting exact URL directions */}
        <PlansSection />

        {/* FAQ Accordion answering quick customer inquiries */}
        <FAQSection />

      </main>

      {/* Structured Footer segment detailing CREF identifiers, MA location */}
      <Footer />

      {/* FLOATING ACTION UTILITIES (Fades in when scrolled) */}
      <AnimatePresence>
        {showScrollControls && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
          >
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full border border-zinc-800 shadow-xl transition-all cursor-pointer flex items-center justify-center"
              aria-label="Voltar para o topo"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-5 h-5" />
            </button>

            {/* Sticky WhatsApp Trigger floating button */}
            <a
              href="https://api.whatsapp.com/send/?phone=5594984372934&text=Ol%C3%A1%2520Laryssa!%20Estou%20no%20seu%20site%20e%20gostaria%20de%20come%C3%A7ar%20meu%20acompanhamento%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center relative group"
              aria-label="Fale Direto no WhatsApp"
              id="floating-whats-widget"
            >
              {/* Pulsing indicator circle behind widget */}
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-0 transition-opacity" />
              <MessageCircle className="w-6 h-6 fill-white" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
