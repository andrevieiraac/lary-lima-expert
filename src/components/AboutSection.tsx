import { motion } from "motion/react";
import { ArrowDown, Instagram, MapPin, Globe, Sparkles, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      {/* 1. HERO SECTION & PRIMARY PRESENTATION */}
      <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-dark-bg">
        {/* Decorative background glow */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full flex flex-col">
          {/* Header block with Title always above the content */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-14">
            {/* Over title tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-primary/15 border border-pink-primary/40 text-pink-primary text-xs font-bold uppercase tracking-widest mb-6 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Especialista em Resultados Femininos</span>
            </motion.div>

            {/* Accent line */}
            <div className="w-12 h-1 bg-pink-primary mb-6" />

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-normal text-white leading-none tracking-tight uppercase"
              id="hero-headline"
            >
              Especialista em <br /><span className="font-bold italic text-pink-primary font-display">Hipertrofia</span> & Emagrecimento.
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Image Left (Expert Photo now always comes first visually under title) */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-pink-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group"
              >
                {/* Ambient glow mesh overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-20" />
                
                <img
                  src="https://i.imgur.com/17dEk8s.png"
                  alt="Laryssa Lima Personal Trainer"
                  className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  id="expert-hero-img"
                />
              </motion.div>
            </div>

            {/* Column Text Right (Supporting text, highlights, and CTAs) */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              {/* Supporting Text */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-xl"
              >
                Eu sou <strong className="text-white">Laryssa Lima</strong> (CREF: 21: 007430-G/MA), personal trainer especializada em definição muscular, ganho de massa e emagrecimento feminino. Desenvolvo treinos de alta eficácia com suporte diário.
              </motion.p>

              {/* High Authority Highlight + Location details */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                <div className="flex items-center gap-3 bg-zinc-900/60 backdrop-blur border border-zinc-800 p-4 rounded-xl">
                  <div className="p-2 bg-pink-primary/10 rounded-lg text-pink-primary h-fit">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-base tracking-tight">+180 ALUNAS</h3>
                    <p className="text-zinc-400 text-xs">Em mais de 5 países pelo mundo</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-zinc-900/60 backdrop-blur border border-zinc-800 p-4 rounded-xl">
                  <div className="p-2 bg-pink-primary/10 rounded-lg text-pink-primary h-fit">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-base tracking-tight">IMPERATRIZ - MA</h3>
                    <p className="text-zinc-400 text-xs">Atendimento presencial &amp; consultoria</p>
                  </div>
                </div>
              </motion.div>

              {/* Call To Action buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#planos"
                  className="py-4 px-8 bg-pink-primary hover:bg-pink-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center pulse-glow transition-all duration-300 cursor-pointer"
                  id="hero-cta-plans"
                >
                  Ver Planos de Treino
                </a>
                <a
                  href="https://www.instagram.com/lary_personaltrainer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center border border-zinc-800 hover:border-pink-primary/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  id="hero-cta-instagram"
                >
                  <Instagram className="w-4 h-4" />
                  @lary_personaltrainer
                </a>
              </motion.div>
            </div>

          </div>

          {/* Centered Scroll indicator pointer-events-none layout */}
          <div className="mt-16 sm:mt-24 flex justify-center">
            <a href="#especialista" className="text-zinc-500 hover:text-pink-primary transition-colors flex flex-col items-center gap-2 cursor-pointer text-xs uppercase tracking-widest font-mono">
              <span>Descubra Mais</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

        </div>
      </section>

      {/* 2. ABOUT ME SECONDARY PROFILE SECTION */}
      <section id="especialista" className="py-24 px-4 bg-zinc-950 border-t border-dark-border relative overflow-hidden">
        {/* Ambient colors */}
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Image Left (Bastidores / Behind the Scenes Collage) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest text-pink-primary border border-pink-primary/20 bg-pink-primary/5 px-2.5 py-1 rounded w-fit self-center lg:self-start font-mono font-bold">
                Bastidores da Consultoria
              </span>
              <div className="grid grid-cols-12 gap-3 items-end">
                {/* Image 1 - Staggered Left */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="col-span-5 relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-850 shadow-2xl group"
                >
                  <img
                    src="https://i.imgur.com/naBX0gn.png"
                    alt="Bastidores 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    id="bastidores-img-1"
                  />
                </motion.div>

                {/* Image 2 - High Center */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="col-span-7 relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-pink-primary shadow-2xl group"
                >
                  <div className="absolute top-2 left-2 bg-pink-primary/95 text-[9px] text-white font-bold tracking-wider uppercase px-2 py-0.5 rounded z-10 font-mono">
                    Constância
                  </div>
                  <img
                    src="https://i.imgur.com/S5fAqfH.png"
                    alt="Bastidores 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    id="bastidores-img-2"
                  />
                </motion.div>

                {/* Image 3 - Long Bottom Span */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="col-span-12 relative aspect-[16/10] rounded-xl overflow-hidden border border-zinc-850 shadow-2xl group"
                >
                  <img
                    src="https://i.imgur.com/ZmdEBSd.png"
                    alt="Bastidores 3"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    id="bastidores-img-3"
                  />
                </motion.div>
              </div>
            </div>

            {/* Column Description Right */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-normal text-white mb-6 uppercase tracking-tight leading-tight"
              >
                Resultados exigem <br />
                <span className="font-bold italic text-pink-primary">estratégia</span>
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-400 font-sans text-sm md:text-base space-y-4 leading-relaxed"
              >
                <p>
                  Chega de treinar sem rumo ou técnica. Como sua personal, estruturo um planejamento estratégico focado em <strong className="text-pink-primary">definição (emagrecimento)</strong> e <strong className="text-pink-primary">hipertrofia (ganho de massa)</strong>.
                </p>
                <p>
                  Com acompanhamento próximo e direcionamento certo, você terá a constância necessária para alcançar seus resultados mais rápido.
                </p>
              </motion.div>

              {/* Detailed Highlight Numbers */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-dark-border/80 pt-8 text-center sm:text-left">
                <div>
                  <h4 className="text-2xl md:text-3xl font-display font-black text-white">+5</h4>
                  <p className="text-zinc-500 text-xs mt-1">Países atendidos</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-display font-black text-white">100%</h4>
                  <p className="text-zinc-500 text-xs mt-1">Personalizado</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-display font-black text-white">MA</h4>
                  <p className="text-zinc-500 text-xs mt-1">Imperatriz Físico</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
