export type Pilar = {
  titulo: string;
  descricao: string;
};

export const pilaresMetodo: Pilar[] = [
  { titulo: "Intensidade progressiva", descricao: "..." },
  { titulo: "Acompanhamento individual", descricao: "..." },
];

export type Depoimento = {
  id: string;
  nome: string;
  foto?: string; // foto opicional
  texto: string;
  videoUrl?: string; // link do YouTube, se houver
};

export const depoimentos: Depoimento[] = [
  {
    id: "1",
    nome: "Carla Souza",
    foto: "https://s2-ge.glbimg.com/wrEy04GlFbei3JIRhLGl0mI2OdQ=/0x0:1254x836/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/K/e/1yArqeQ9SpVaoEA5jeAw/mulheres-academia.jpg",
    texto:
      "Em 4 meses mudei completamente minha relação com treino. Método é pesado, mas funciona.",
  },
  {
    id: "2",
    nome: "Rafael Lima",
    foto: "https://diariodocomercio.com.br/mix/wp-content/uploads/2025/11/pessoa-cansada-academia-750x375.jpg",
    texto:
      "O acompanhamento faz toda diferença. Nunca tinha treinado com tanta consistência.",
    videoUrl: "https://www.youtube.com/embed/2-6GdrK5CaE",
  },
  {
    id: "3",
    nome: "Juliana Prado",
    texto: "Só o texto mesmo, sem foto nem vídeo — e funciona igual.",
  },
];

export type Personal = {
  nome: string;
  credencial: string;
  foto?: string; // foto opicional
  bio?: string;
};

export const personal: Personal = {
  nome: "Samuel Valentim",
  credencial: "CREF 016019-DF",
  foto: "https://mfitusersecure.s3.amazonaws.com/53818/pasta/8427979.jpeg",
  bio: "Direto, exigente e comprometido com resultado real. Vou te levar até onde você nunca chegou sozinho. Também muito chato.",
};

export type FAQItem = {
  pergunta: string;
  resposta: string;
};

export const faq: FAQItem[] = [
  {
    pergunta: "Como funcionam os treinos?",
    resposta:
      "Cada pessoa irá passar uma avaliação de nível. A partir desse momento irei analisar o melhor método para encaixar no seu objetivo. São treinos personalizados e adaptados para cada pessoa e limitação. O foco será nos seus maiores pontos fracos e na necessidade e objetivo que ali está buscando.",
  },
  {
    pergunta: "Preciso de experiência prévia?",
    resposta:
      "Não. O método se adapta ao seu nível atual, do iniciante ao avançado.",
  },
  {
    pergunta: "Em quanto tempo essas pessoas conseguiram esses resultados?",
    resposta:
      "Não existe tempo perfeito. É você quem constrói os próprios resultados. Seguir os pilares do treino, da alimentação, da hidratação e do sono é essencial. Mantenha-se firme, mesmo nos dias difíceis. A constância transforma! Não se compare com ninguém. Cada um tem sua jornada, sua rotina, sua realidade. Faça o básico, mas faça todos os dias. A paciência e a disciplina são as chaves que abrem as portas do sucesso. Quanto mais você fizer o certo, mais rápido o resultado aparecerá. Repetição e foco no longo prazo. Lembre-se: o mais difícil não é chegar lá, é sair do lugar onde você está agora.",
  },
  {
    pergunta: "O que é CT?",
    resposta:
      "É um centro de treinamento que desenvolve diversas atividades com diferentes métodos, voltados para alcançar seus objetivos. Cada atividade é cuidadosamente planejada e possui extrema importância para cada detalhe da sua meta.",
  },
  {
    pergunta: "Com quais atividades você trabalha?",
    resposta:
      "Musculação, calistenia, corrida, funcional, circuito e muito mais! Aqui, cada atividade tem um propósito: levar você aos seus objetivos. Treinos variados, métodos inteligentes e resultados reais. Seu desempenho, sua evolução, seu ritmo.",
  },
];

export type Plano = {
  nome: string;
  duracao: string;
  valor: string;
  destaque?: boolean;
};

export const planos: Plano[] = [
  { nome: "Mensal", duracao: "1 mês", valor: "R$ 150" },
  { nome: "Trimestral", duracao: "3 meses", valor: "R$ 400", destaque: true },
  { nome: "Semestral", duracao: "6 meses", valor: "R$ 700" },
];

export type TreinoDemo = {
  id: string;
  titulo: string;
  categoria: string;
  youtubeId: string;
};

export const treinosDemo: TreinoDemo[] = [
  {
    id: "1",
    titulo: "Treino de pernas intenso",
    categoria: "Inferiores",
    youtubeId: "JAn60lqshMU",
  },
  {
    id: "2",
    titulo: "Superiores em circuito",
    categoria: "Superiores",
    youtubeId: "n4KoykM-NNM",
  },
  {
    id: "3",
    titulo: "HIIT funcional",
    categoria: "Cardio",
    youtubeId: "_WdUkEriE20",
  },
];
