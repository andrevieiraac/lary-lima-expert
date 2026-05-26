import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-[#07070a] border-t border-dark-border relative overflow-hidden">
      {/* Background soft pink gradient sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-primary/15 border border-pink-primary/40 text-pink-primary text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Suporte e Dúvidas
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-normal text-white mb-4 uppercase">
            Perguntas <span className="font-bold italic text-pink-primary">Frequentes</span>
          </h2>
          
          <p className="text-zinc-400 font-sans text-sm">
            Tire suas dúvidas rápidas sobre o funcionamento dos treinos e suporte.
          </p>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "bg-dark-card border-pink-primary/30 shadow-lg shadow-pink-primary/[0.02]" 
                    : "bg-dark-card/50 border-dark-border/80 hover:border-zinc-800"
                }`}
                id={`faq-item-${idx}`}
              >
                {/* Accordion Header Toggle */}
                <button
                  type="button"
                  onClick={() => toggleIdx(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-toggle-btn-${idx}`}
                >
                  <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? "text-pink-primary" : "text-white"}`}>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-pink-primary border-pink-primary/20" : ""}`}>
                    <ChevronDown className="w-4.5 h-4.5" />
                  </div>
                </button>

                {/* Accordion Content animated height */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-zinc-400 leading-relaxed border-t border-dark-border/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
