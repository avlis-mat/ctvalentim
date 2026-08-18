export type Depoimento = {
  id: string;
  nome: string;
  foto?: string; // foto opicional
  modalidade?: string; // modalidade do treino, se houver
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
  modalidade: string;
  opcoes: { frequencia: string; preco: string }[];
  cta: string;
  consulteApenas?: boolean;
};

export const planos: Plano[] = [
  {
    modalidade: "Musculação",
    opcoes: [{ frequencia: "5x/semana", preco: "R$ 130/mês" }],
    cta: "Quero treinar",
  },
  {
    modalidade: "Cross Training",
    opcoes: [
      { frequencia: "3x/semana", preco: "R$ 150/mês" },
      { frequencia: "5x/semana", preco: "R$ 180/mês" },
    ],
    cta: "Quero treinar",
  },
  {
    modalidade: "TAF",
    opcoes: [
      { frequencia: "3x/semana", preco: "R$ 250/mês" },
      { frequencia: "5x/semana", preco: "R$ 350/mês" },
      { frequencia: "6x/semana", preco: "R$ 500/mês" },
    ],
    cta: "Quero preparar meu TAF",
  },
  {
    modalidade: "HYROX, Corrida, Calistenia, Funcional, Emagrecimento",
    opcoes: [],
    cta: "Falar com o CT",
    consulteApenas: true,
  },
];

export const contatoInfo = {
  endereco: "Ceilândia — Distrito Federal",
  horario: ["Segunda a sexta", "06h às 12h", "16h às 22h"],
  whatsapp: "https://wa.me/556182274915",
  instagram: "https://instagram.com/_ctvalentim",
};

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

// --- Ícones: guardamos só a "chave" (nome do ícone lucide) nos dados,
// e resolvemos pro componente de verdade na camada de UI (lib/icon-map.ts)

export type Objetivo = {
  id: string;
  nome: string;
  icone: string; // chave lucide-react
};

export const objetivos: Objetivo[] = [
  { id: "hipertrofia", nome: "Hipertrofia", icone: "Dumbbell" },
  { id: "forca", nome: "Força", icone: "Zap" },
  {
    id: "resistencia-muscular",
    nome: "Resistência muscular",
    icone: "Activity",
  },
  { id: "condicionamento", nome: "Condicionamento", icone: "HeartPulse" },
  { id: "performance", nome: "Performance", icone: "TrendingUp" },
  { id: "composicao-corporal", nome: "Composição corporal", icone: "Scale" },
  { id: "emagrecimento", nome: "Emagrecimento", icone: "Flame" },
  { id: "resistencia", nome: "Resistência", icone: "Activity" },
  { id: "musculacao", nome: "Musculação", icone: "Dumbbell" },
  {
    id: "treinamento-metabolico",
    nome: "Treinamento metabólico",
    icone: "gauge",
  },
  { id: "corrida", nome: "Corrida", icone: "sport-shoe" },
  { id: "velocidade", nome: "Velocidade", icone: "gauge" },
];

export type Grupo = {
  id: string;
  titulo: string;
  icone: string;
};

export const grupos: Grupo[] = [
  { id: "fundamentos", titulo: "Fundamentos", icone: "CircleDot" },
  { id: "movimentos-dinamicos", titulo: "Movimentos Dinâmicos", icone: "Zap" },
  {
    id: "movimentos-estaticos",
    titulo: "Movimentos Estáticos / Isométricos",
    icone: "Anchor",
  },
  { id: "movimentos-forca", titulo: "Movimentos de Força", icone: "Dumbbell" },
];

export type Exercicio = {
  id: string;
  nome: string;
  descricao: string;
  icone?: string;
  foto?: string;
  videoUrl?: string;
};

export const exercicios: Exercicio[] = [
  {
    id: "primeira-barra",
    nome: "Primeira Barra",
    icone: "Target",
    descricao:
      "Aprenda progressivamente os movimentos e capacidades necessárias para conquistar sua primeira barra fixa.",
  },
  {
    id: "barra-fixa",
    nome: "Barra Fixa",
    icone: "ArrowUp",
    descricao:
      "Desenvolvimento de força de puxada, controle corporal e resistência dos membros superiores.",
  },
  {
    id: "flexoes",
    nome: "Flexões",
    icone: "ArrowDown",
    descricao: "Desenvolvimento de força de peitoral, tríceps, ombros e core.",
  },
  {
    id: "paralelas-dips",
    nome: "Paralelas / Dips",
    icone: "GitCommitVertical",
    descricao:
      "Movimento de força para membros superiores, com grande participação de peitoral, tríceps e ombros.",
  },
  {
    id: "isometrias",
    nome: "Isometrias",
    icone: "Pause",
    descricao:
      "Exercícios de sustentação que desenvolvem força e controle em posições específicas.",
  },
  {
    id: "muscle-up",
    nome: "Muscle Up",
    icone: "ArrowUpRight",
    descricao:
      "Movimento que combina uma puxada explosiva com a transição para cima da barra, exigindo força, potência, coordenação e técnica.",
  },
  {
    id: "bar-muscle-up",
    nome: "Bar Muscle Up",
    icone: "ChevronsUp",
    descricao:
      "Variação realizada na barra que exige uma puxada potente e domínio da transição do corpo sobre o equipamento.",
  },
  {
    id: "pull-over",
    nome: "Pull Over",
    icone: "RotateCw",
    descricao:
      "Movimento de transição em que o atleta utiliza força e coordenação para passar o corpo por cima da barra.",
  },
  {
    id: "rotacao-180",
    nome: "180°",
    icone: "RefreshCw",
    descricao:
      "Movimento dinâmico com rotação do corpo, exigindo potência, coordenação e controle.",
  },
  {
    id: "rotacao-360",
    nome: "360°",
    icone: "RefreshCcw",
    descricao:
      "Movimento avançado de rotação em torno da barra, exigindo explosão, técnica e domínio corporal.",
  },
  {
    id: "combinacoes-transicoes",
    nome: "Combinações e Transições",
    icone: "Shuffle",
    descricao:
      "Sequências que conectam diferentes movimentos, desenvolvendo fluidez, coordenação e domínio corporal.",
  },
  {
    id: "l-sit",
    nome: "L-Sit",
    icone: "Move",
    descricao:
      "Sustentação do corpo com as pernas estendidas à frente, desenvolvendo força de core, quadril, braços e controle corporal.",
  },
  {
    id: "v-sit",
    nome: "V-Sit",
    icone: "TrendingUp",
    descricao:
      "Progressão avançada do L-Sit que exige maior flexibilidade, compressão e força de core.",
  },
  {
    id: "front-lever",
    nome: "Front Lever",
    icone: "Minus",
    descricao:
      "Movimento estático em que o corpo permanece alinhado horizontalmente enquanto é sustentado pela força dos braços, dorsais e core.",
  },
  {
    id: "back-lever",
    nome: "Back Lever",
    icone: "ArrowLeftRight",
    descricao:
      "Movimento estático realizado com o corpo suspenso e alinhado, exigindo força de ombros, peitoral, core e controle corporal.",
  },
  {
    id: "planche",
    nome: "Planche",
    icone: "ArrowUpCircle",
    descricao:
      "Movimento avançado de força em que o corpo permanece horizontal e suspenso, sustentado principalmente pelos braços e ombros.",
  },
  {
    id: "human-flag",
    nome: "Human Flag",
    icone: "Flag",
    descricao:
      "Movimento em que o corpo é sustentado lateralmente na barra, exigindo grande força de ombros, dorsais, braços e core.",
  },
  {
    id: "handstand",
    nome: "Handstand",
    icone: "PersonStanding",
    descricao:
      "Equilíbrio invertido sobre as mãos, desenvolvendo força, estabilidade, equilíbrio e controle corporal.",
  },
  {
    id: "barra-com-carga",
    nome: "Barra com Carga",
    icone: "Weight",
    descricao:
      "Progressão para desenvolvimento de força máxima e resistência na puxada.",
  },
  {
    id: "dips-com-carga",
    nome: "Dips com Carga",
    icone: "PlusCircle",
    descricao:
      "Utilização de carga adicional para aumentar a exigência de força nos movimentos de paralelas.",
  },
  {
    id: "handstand-push-up",
    nome: "Handstand Push-Up",
    icone: "ChevronUp",
    descricao:
      "Movimento de força realizado em posição invertida, exigindo grande participação dos ombros, tríceps e core.",
  },
  {
    id: "progressoes-planche",
    nome: "Progressões de Planche",
    icone: "TrendingUp",
    descricao:
      "Treinamento progressivo para desenvolver a força necessária para dominar a planche.",
  },
  {
    id: "progressoes-front-lever",
    nome: "Progressões de Front Lever",
    icone: "ArrowUpRight",
    descricao:
      "Exercícios específicos para desenvolver a força de dorsais, braços e core necessária para o movimento.",
  },
];

// Tabela associativa "ModalidadeExercicio" — agora referenciando o Grupo pelo id
type ModalidadeExercicio = {
  modalidadeId: string;
  exercicioId: string;
  grupoId: string;
};

export const modalidadeExercicios: ModalidadeExercicio[] = [
  {
    modalidadeId: "calistenia",
    exercicioId: "primeira-barra",
    grupoId: "fundamentos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "barra-fixa",
    grupoId: "fundamentos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "flexoes",
    grupoId: "fundamentos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "paralelas-dips",
    grupoId: "fundamentos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "isometrias",
    grupoId: "fundamentos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "muscle-up",
    grupoId: "movimentos-dinamicos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "bar-muscle-up",
    grupoId: "movimentos-dinamicos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "pull-over",
    grupoId: "movimentos-dinamicos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "rotacao-180",
    grupoId: "movimentos-dinamicos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "rotacao-360",
    grupoId: "movimentos-dinamicos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "combinacoes-transicoes",
    grupoId: "movimentos-dinamicos",
  },

  {
    modalidadeId: "calistenia",
    exercicioId: "l-sit",
    grupoId: "movimentos-estaticos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "v-sit",
    grupoId: "movimentos-estaticos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "front-lever",
    grupoId: "movimentos-estaticos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "back-lever",
    grupoId: "movimentos-estaticos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "planche",
    grupoId: "movimentos-estaticos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "human-flag",
    grupoId: "movimentos-estaticos",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "handstand",
    grupoId: "movimentos-estaticos",
  },

  {
    modalidadeId: "calistenia",
    exercicioId: "barra-com-carga",
    grupoId: "movimentos-forca",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "dips-com-carga",
    grupoId: "movimentos-forca",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "handstand-push-up",
    grupoId: "movimentos-forca",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "progressoes-planche",
    grupoId: "movimentos-forca",
  },
  {
    modalidadeId: "calistenia",
    exercicioId: "progressoes-front-lever",
    grupoId: "movimentos-forca",
  },
];

// Modalidade continua enxuta (usada na listagem curta); o conteúdo rico vira um dicionário à parte
export type Modalidade = {
  id: string;
  nome: string;
  descricao: string;
  cta: string;
};

export const modalidades: Modalidade[] = [
  {
    id: "musculacao",
    nome: "Musculação",
    descricao: "Método, estratégia e planejamento — não só ficha de treino.",
    cta: "Quero treinar",
  },
  {
    id: "emagrecimento",
    nome: "Emagrecimento",
    descricao: "Estratégia real de composição corporal, não só gasto calórico.",
    cta: "Quero emagrecer",
  },
  {
    id: "calistenia",
    nome: "Calistenia",
    descricao:
      "Do zero à primeira barra, e da primeira barra a novos movimentos.",
    cta: "Quero começar na calistenia",
  },
  {
    id: "taf",
    nome: "TAF",
    descricao: "Preparação específica para as exigências da sua prova.",
    cta: "Quero preparar meu TAF",
  },
  {
    id: "hyrox",
    nome: "HYROX",
    descricao: "Corrida, força, potência, resistência e condicionamento.",
    cta: "Quero treinar para HYROX",
  },
  {
    id: "corrida",
    nome: "Corrida",
    descricao: "Técnica, ritmo, pace e resistência — do iniciante ao atleta.",
    cta: "Quero evoluir na corrida",
  },
  {
    id: "cross-training",
    nome: "Cross Training",
    descricao: "Treinamento completo, variado e desafiador.",
    cta: "Quero treinar",
  },
  {
    id: "funcional",
    nome: "Funcional",
    descricao: "Movimento, força e condicionamento dinâmico.",
    cta: "Quero treinar",
  },
];

// Conteúdo expandido — só existe pras modalidades que já têm o texto completo
export type ConteudoModalidade = {
  tituloDestaque: string;
  paragrafos: string[];
  objetivoIds: string[];
  fraseDestaque: string;
};

export const conteudoModalidade: Record<string, ConteudoModalidade> = {
  musculacao: {
    tituloDestaque: "Melhores métodos de musculação",
    paragrafos: [
      "Musculação não é simplesmente entrar na academia, pegar peso e repetir exercícios.",
      "Existe método, estratégia, técnica e planejamento.",
      "Utilizamos diferentes métodos de treinamento de acordo com o objetivo e o nível de cada aluno.",
    ],
    objetivoIds: [
      "hipertrofia",
      "forca",
      "resistencia-muscular",
      "condicionamento",
      "performance",
      "composicao-corporal",
      "emagrecimento",
    ],
    fraseDestaque: "Treine com método. Não apenas com uma ficha.",
  },
  emagrecimento: {
    tituloDestaque: "Emagreça com estratégia",
    paragrafos: [
      "O objetivo não é simplesmente fazer você gastar calorias.",
      "O treinamento é estruturado para desenvolver força, resistência, condicionamento e melhorar sua composição corporal.",
      "Utilizamos diferentes estímulos de acordo com seu nível e objetivo.",
    ],
    objetivoIds: [
      "musculacao",
      "forca",
      "resistencia",
      "condicionamento",
      "treinamento-metabolico",
      "cardiorrespiratorio",
    ],
    fraseDestaque: "Seu treino precisa ser tão individual quanto seu objetivo.",
  },
  calistenia: {
    tituloDestaque:
      "Do zero à sua primeira barra. Da primeira barra a novos movimentos.",
    paragrafos: [
      "Não importa se você nunca conseguiu fazer uma barra ou se já possui experiência.",
      "O treinamento é desenvolvido através de progressões específicas para cada nível.",
    ],
    objetivoIds: [],
    fraseDestaque: "Aprenda. Evolua. Domine seu corpo.",
  },
};

// JOIN: reconstrói grupo + exercícios pra uma modalidade
export function detalhesPorModalidade(modalidadeId: string) {
  const relacoes = modalidadeExercicios.filter(
    (r) => r.modalidadeId === modalidadeId,
  );
  if (relacoes.length === 0) return [];

  const porGrupo = new Map<string, Exercicio[]>();
  for (const r of relacoes) {
    const exercicio = exercicios.find((e) => e.id === r.exercicioId)!;
    const lista = porGrupo.get(r.grupoId) ?? [];
    lista.push(exercicio);
    porGrupo.set(r.grupoId, lista);
  }

  return Array.from(porGrupo.entries()).map(([grupoId, lista]) => ({
    grupo: grupos.find((g) => g.id === grupoId)!,
    exercicios: lista,
  }));
}
