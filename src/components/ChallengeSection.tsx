import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DESAFIO_IMAGES } from "../data";
import { Zap, Calendar, Trophy, CheckCircle2, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ChallengeSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

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
    setSelectedIdx((selectedIdx + 1) % DESAFIO_IMAGES.length);
  };

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + DESAFIO_IMAGES.length) % DESAFIO_IMAGES.length);
  };

  const benefits = [
    {
      icon: <Calendar className="w-5 h-5 text-pink-primary" />,
      title: "Foco Diário",
      desc: "21 dias programados para estabelecer hábitos saudáveis."
    },
    {
      icon: <Zap className="w-5 h-5 text-pink-primary" />,
      title: "Queima & Definição",
      desc: "Treinos para acelerar o metabolismo e enrijecer a musculatura."
    },
    {
      icon: <Trophy className="w-5 h-5 text-pink-primary" />,
      title: "Resultados Rápidos",
      desc: "Sinta os primeiros resultados no corpo e ganhe motivação imediata."
    }
  ];

  return (
    <section id="desafio" className="py-24 px-4 bg-zinc-950 border-t border-b border-dark-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-pink-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          
          {/* Text & Content column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-primary/15 border border-pink-primary/40 text-pink-primary text-xs font-bold uppercase tracking-widest mb-4 w-fit"
            >
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              Programa Flash
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-normal text-white mb-6 uppercase tracking-tight"
            >
              Desafio <span className="font-bold italic text-pink-primary">21 Dias</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed mb-8"
            >
              Crie ritmo, consistência e destrave seus resultados em 21 dias. Um plano direcionado para dar o primeiro passo com força total.
            </motion.p>

            {/* Structured custom list of aspects */}
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                  className="flex gap-4 p-4 rounded-xl bg-dark-card border border-dark-border/40 hover:border-pink-primary/20 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:bg-pink-primary/10 transition-colors h-fit">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base group-hover:text-pink-primary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Large Images columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Visual presentation using object-contain inside dark mockup frames to see them without cropping */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {DESAFIO_IMAGES.map((url, idx) => {
                const stepLabels = [
                  "1. Foco e Planejamento",
                  "2. Constância e Prática",
                  "3. Evolução Física"
                ];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => setSelectedIdx(idx)}
                    className="flex flex-col bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                  >
                    <div className="aspect-[4/5] w-full bg-[#050507] overflow-hidden relative p-1.5 flex items-center justify-center">
                      {/* Floating tag */}
                      <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-pink-primary rounded-lg border border-pink-primary/20 z-10 uppercase tracking-wider">
                        {stepLabels[idx].split(". ")[0]} Fase
                      </span>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold bg-pink-primary/95 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Ampliar Foto
                        </span>
                      </div>

                      <img
                        src={url}
                        alt={`Passo Desafio ${idx + 1}`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 bg-[#0d0d12]">
                      <h3 className="text-white font-semibold text-sm mb-1">{stepLabels[idx]}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        Acompanhamento diário rigoroso guiado por métricas estratégicas altamente eficazes.
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick alert bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-2 p-4 rounded-xl bg-pink-primary/5 border border-pink-primary/10 flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-pink-primary shrink-0" />
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                Cada dia do desafio é programado via planilha interativa com feedbacks exclusivos semanais para garantir que você não erre a técnica de nenhum exercício.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal for Desafio 21 Dias */}
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
              <span className="text-zinc-400 font-mono text-xs bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                Visualização {selectedIdx + 1} / {DESAFIO_IMAGES.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx(null);
                }}
                className="p-2.5 rounded-full bg-zinc-900/80 backdrop-blur-md text-white hover:bg-pink-primary hover:text-white border border-white/10 transition-all cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main content centered */}
            <div className="relative max-w-sm w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute -left-4 sm:-left-16 p-3 rounded-full bg-zinc-900/80 hover:bg-pink-primary hover:text-white text-zinc-400 z-10 transition-colors border border-white/10 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Image Frame */}
              <motion.div
                key={selectedIdx}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-[#050507] border border-white/10 rounded-2xl overflow-hidden max-h-[85vh] p-2 flex items-center justify-center relative shadow-2xl"
              >
                <img
                  src={DESAFIO_IMAGES[selectedIdx]}
                  alt={`Tabela Desafio ampliada ${selectedIdx + 1}`}
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute -right-4 sm:-right-16 p-3 rounded-full bg-zinc-900/80 hover:bg-pink-primary hover:text-white text-zinc-400 z-10 transition-colors border border-white/10 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Indicators */}
            <div className="mt-4 flex gap-2 z-10" onClick={(e) => e.stopPropagation()}>
              {DESAFIO_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    selectedIdx === i ? "bg-pink-primary w-6" : "bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
