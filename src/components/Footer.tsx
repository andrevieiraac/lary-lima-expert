import { Instagram, MapPin, Globe, MessageCircle, Heart, Dumbbell } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 border-t border-dark-border/80 relative z-10">
      
      {/* Top section CTA block */}
      <div className="border-b border-dark-border/40 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl md:text-2xl font-display font-black tracking-tight uppercase">
              Pronta para sua melhor <span className="text-pink-primary">versão</span>?
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm mt-1 max-w-md">
              Não perca mais tempo treinando sem direcionamento profissional estratégico. Mude hoje!
            </p>
          </div>

          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=5594984372934&text=Ol%C3%A1%20Laryssa!%20Te%20vi%20no%20site%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20planos%20de%20treino."
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white fill-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/10 transition-colors cursor-pointer"
              id="footer-whats-link"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Info Columns */}
      <div className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-1.5" id="logo-footer">
              <span className="font-display font-black text-2xl text-white tracking-tighter uppercase">
                Laryssa<span className="text-pink-primary">Lima</span>
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-pink-primary" />
            </div>
            
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Personal Trainer especialista em hipertrofia feminina e emagrecimento estratégico com planos online atendendo alunas do mundo inteiro.
            </p>

            <span className="text-zinc-500 text-xs font-mono">
              CREF: 21: 007430-G/MA
            </span>
          </div>

          {/* Location/Authority Col */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Atendimento</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-primary shrink-0" />
                <span>Imperatriz - MA (Treino Presencial)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-pink-primary shrink-0" />
                <span>Consultoria Online (Mundial)</span>
              </li>
            </ul>
          </div>

          {/* Socials / Direct Link */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Acompanhe minhas redes</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Receba dicas diárias gratuitas de treino, alimentação, postura técnica e rotinas no meu perfil do Instagram.
            </p>
            
            <a
              href="https://www.instagram.com/lary_personaltrainer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-primary text-sm font-bold hover:text-pink-hover transition-colors"
              id="footer-insta-profile"
            >
              <Instagram className="w-4 h-4" />
              <span>@lary_personaltrainer</span>
            </a>
          </div>

        </div>

        {/* Separator line */}
        <div className="h-[1px] bg-dark-border/40 my-10" />

        {/* Dynamic bottom copyrights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            &copy; {currentYear} Laryssa Lima Personal. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3 h-3 text-pink-primary fill-pink-primary" />
            <span>para Laryssa Lima Personal Trainer</span>
          </p>
        </div>

      </div>

    </footer>
  );
}
