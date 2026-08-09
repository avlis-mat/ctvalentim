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
    foto: "/depoimentos/carla.jpg",
    texto:
      "Em 4 meses mudei completamente minha relação com treino. Método é pesado, mas funciona.",
  },
  {
    id: "2",
    nome: "Rafael Lima",
    foto: "/depoimentos/rafael.jpg",
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
