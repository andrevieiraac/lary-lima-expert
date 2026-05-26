import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SOCIAL_PROOFS } from "../data";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function SocialProofSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowRight" && selectedIdx !== null) {
        handleNext();
      } else if (e.key === "ArrowLeft" && selectedIdx !== null) {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % SOCIAL_PROOFS.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + SOCIAL_PROOFS.length) % SOCIAL_PROOFS.length);
  };

  return (
    <section id="resultados" className="py-24 px-4 bg-dark-bg relative overflow-hidden">
      {/* Background soft pink radial gradients for elegance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-60 h-60 bg-pink-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-primary/15 border border-pink-primary/40 text-pink-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Resultados Reais
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-normal text-white mb-4 uppercase"
          >
            Antes &amp; <span className="font-bold italic text-pink-primary">Depois</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 font-sans max-w-lg mx-auto text-sm md:text-base"
          >
            Evoluções construídas com acompanhamento, constância e estratégia.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SOCIAL_PROOFS.map((url, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedIdx(idx)}
              className="group cursor-pointer relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center shadow-lg hover:border-pink-primary/30 transition-colors"
              id={`proof-card-${idx}`}
            >
              {/* Blur placeholder or premium glow line overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-between p-3">
                <span className="text-zinc-300 text-xs font-medium">Toque para zoom</span>
                <Maximize2 className="w-4 h-4 text-pink-primary" />
              </div>
              
              <img
                src={url}
                alt={`Resultado aluna Laryssa Lima ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Discreed legal notice */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-500 text-xs mt-12 italic font-light"
        >
          * Resultados podem variar de pessoa para pessoa. Todos os dados representam compromisso profissional mútuo.
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Modal Controls */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
              <span className="text-zinc-400 font-mono text-sm bg-zinc-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {selectedIdx + 1} / {SOCIAL_PROOFS.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx(null);
                }}
                className="p-2.5 rounded-full bg-zinc-900/60 backdrop-blur-md text-white hover:bg-pink-primary hover:text-white border border-white/15 transition-all cursor-pointer"
                aria-label="Fecar modal"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main content centered */}
            <div className="relative max-w-md w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-16 p-3 rounded-full bg-zinc-900/80 hover:bg-pink-primary hover:text-white text-zinc-400 z-10 transition-colors border border-white/10 cursor-pointer"
                aria-label="Anterior"
                id="prev-modal-btn"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Frame */}
              <motion.div
                key={selectedIdx}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-dark-card border border-white/10 rounded-2xl overflow-hidden max-h-[80vh] flex items-center justify-center relative shadow-2xl"
              >
                <img
                  src={SOCIAL_PROOFS[selectedIdx]}
                  alt={`Resultado ampliado ${selectedIdx + 1}`}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-16 p-3 rounded-full bg-zinc-900/80 hover:bg-pink-primary hover:text-white text-zinc-400 z-10 transition-colors border border-white/10 cursor-pointer"
                aria-label="Próximo"
                id="next-modal-btn"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Swipe/Indicator list */}
            <div className="mt-6 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
              {SOCIAL_PROOFS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    selectedIdx === i ? "bg-pink-primary w-6" : "bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  id={`indicator-btn-${i}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
