import { motion } from "motion/react";
import { PLANS_DATA } from "../data";
import { Check, ArrowRight, Star, ShieldCheck, Dumbbell } from "lucide-react";

export default function PlansSection() {
  return (
    <section id="planos" className="py-24 px-4 bg-dark-bg relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-pink-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-pink-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header content */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-primary/15 border border-pink-primary/40 text-pink-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Dumbbell className="w-3.5 h-3.5 animate-bounce" />
            Método Exclusivo
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-normal text-white mb-4 uppercase"
          >
            Escolha o acompanhamento <br className="hidden sm:inline" />
            <span className="font-bold italic text-pink-primary">ideal para você</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 font-sans max-w-xl mx-auto text-sm md:text-base"
          >
            Cada pessoa tem uma rotina. Escolha o formato que mais combina com seu momento e conquiste o corpo que deseja com estratégia.
          </motion.p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS_DATA.map((plan, idx) => {
            const isGold = plan.id === "gold";
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between rounded-xl p-6.5 transition-all duration-300 border h-full ${
                  isGold 
                    ? "bg-[#111111] border-pink-primary shadow-[0_0_25px_rgba(255,79,177,0.15)] ring-1 ring-pink-primary/30" 
                    : "bg-dark-card border-dark-border hover:border-pink-primary/20 shadow-xl"
                }`}
                id={`plan-card-${plan.id}`}
              >
                {/* Visual Popular/Premium Ribbon */}
                {plan.badge && (
                  <div className="absolute -top-3 left-6 bg-pink-primary text-black text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black text-black" />
                    {plan.badge}
                  </div>
                )}

                {/* Card Top Information */}
                <div>
                  <div className="mb-4">
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-pink-primary/80 uppercase block mb-1">
                      PLANO 0{idx + 1}
                    </span>
                    <h3 className={`text-xl font-display font-bold tracking-tight ${isGold ? "text-pink-primary font-bold italic" : "text-white"}`}>
                      {plan.title}
                    </h3>
                  </div>

                  <p className="text-zinc-300 font-sans text-sm leading-relaxed mb-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  <div className="h-[1.5px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-6" />

                  {/* Bullet features list */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                        <Check className="w-4 h-4 text-pink-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button bottom */}
                <div>
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 group cursor-pointer ${
                      isGold
                        ? "bg-pink-primary hover:bg-pink-hover text-white shadow-lg shadow-pink-primary/10 pulse-glow"
                        : "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-pink-primary/30"
                    }`}
                    id={`plan-btn-${plan.id}`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security / Credibility footer banner inside planes section */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 py-4 px-6 border border-dark-border bg-dark-card/40 rounded-2xl max-w-2xl mx-auto">
          <ShieldCheck className="w-6 h-6 text-pink-primary" />
          <p className="text-zinc-400 text-xs text-center sm:text-left leading-relaxed">
            Plataformas de pagamento seguras. Seus treinos são entregues imediatamente após a confirmação. Dúvidas na escolha? Fale direto no suporte do WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
