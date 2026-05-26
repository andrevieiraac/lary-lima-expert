export interface Plan {
  id: string;
  title: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  buttonText: string;
  link: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PLANS_DATA: Plan[] = [
  {
    id: "consultoria",
    title: "CONSULTORIA ONLINE",
    description: "Acompanhamento online com suporte prático e estratégico.",
    buttonText: "Conhecer acompanhamento",
    link: "https://api.whatsapp.com/send/?phone=5594984372934&text=Ol%C3%A1%20Laryssa!%20Gostaria%20de%20saber%20mais%20sobre%20a%20sua%20Consultoria%20Online.",
    features: [
      "Treino 100% individualizado",
      "Foco no seu objetivo e rotina",
      "Vídeos explicativos dos exercícios",
      "Contato direto pelo WhatsApp",
      "Ajustes periódicos de evolução"
    ]
  },
  {
    id: "presencial",
    title: "PRESENCIAL",
    description: "Treinos individuais exclusivos em Imperatriz - MA.",
    buttonText: "Ver acompanhamento",
    link: "https://api.whatsapp.com/send/?phone=5594984372934&text=Ol%C3%A1%20Laryssa!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Treino%20Presencial%20em%20Imperatriz.",
    features: [
      "Físico em Imperatriz - MA",
      "Correção de técnica em tempo real",
      "Alta intensidade monitorada",
      "Acolhimento e suporte focado",
      "Agenda flexível sob consulta"
    ]
  },
  {
    id: "trimestral",
    title: "PLANO TRIMESTRAL",
    description: "A melhor escolha para constância e evolução contínua.",
    buttonText: "Conhecer plano",
    link: "https://pages.mfitpersonal.com.br/index?acao=page&tipo=1&page=73091&isCheckout=false",
    features: [
      "Foco a médio prazo para consolidar hábitos",
      "Atualizações de treinos no período",
      "Ficha digital prática no app",
      "Acompanhamento de progresso",
      "Melhor custo-benefício"
    ]
  },
  {
    id: "gold",
    title: "PLANO GOLD",
    badge: "Mais completo",
    isPopular: true,
    description: "Estratégia completa unindo treino focado e dieta com a minha nutricionista.",
    buttonText: "Conhecer Plano Gold",
    link: "https://pages.mfitpersonal.com.br/index?acao=page&tipo=1&page=74159&isCheckout=false",
    features: [
      "Estratégia integrada de treino",
      "Dieta com a minha nutricionista",
      "Suporte exclusivo de alta prioridade",
      "Ajustes de biotipo e metabolismo",
      "Acompanhamento personalizado premium"
    ]
  }
];

export const SOCIAL_PROOFS: string[] = [
  "https://i.imgur.com/A9u1pUV.png",
  "https://i.imgur.com/1zBPJnW.png",
  "https://i.imgur.com/p33c5co.png",
  "https://i.imgur.com/ZEqiYUq.png",
  "https://i.imgur.com/PglWWVd.png",
  "https://i.imgur.com/QVB7LNC.png",
  "https://i.imgur.com/5OxcZ45.png"
];

export const DESAFIO_IMAGES: string[] = [
  "https://i.imgur.com/MCzwo0z.png",
  "https://i.imgur.com/RXGv1y0.png",
  "https://i.imgur.com/A9u1pUV.png"
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Como funciona a Consultoria Online?",
    answer: "Você responde um questionário sobre sua rotina e objetivos. Crio seu treino personalizado no aplicativo com vídeos explicativos e suporte direto pelo WhatsApp."
  },
  {
    question: "Não sou de Imperatriz - MA. Posso treinar com você?",
    answer: "Sim! Atendo alunas online pelo mundo todo. Você treina de onde estiver, seja em casa ou na academia, com suporte completo."
  },
  {
    question: "Eu nunca treinei antes, posso participar?",
    answer: "Com certeza. A metodologia adapta intensidade e técnica de iniciantes ao nível avançado, respeitando seus limites."
  },
  {
    question: "O Plano Gold inclui dieta?",
    answer: "Sim! Une estratégia de treino personalizado com dieta prescrita pela minha nutricionista parceira para acelerar seus resultados."
  },
  {
    question: "Qual a diferença do trimestral para o mensal?",
    answer: "O trimestral oferece maior custo-benefício mensal e estruturação de médio prazo para consolidar seus hábitos."
  }
];
