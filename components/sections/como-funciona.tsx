const passos = [
  {
    numero: "01",
    titulo: "Avaliação",
    texto: "Conhecemos seu nível atual, objetivo e principais limitações.",
  },
  {
    numero: "02",
    titulo: "Planejamento",
    texto: "Definimos a estratégia e os métodos adequados para seu objetivo.",
  },
  {
    numero: "03",
    titulo: "Execução",
    texto: "Você realiza o treinamento com orientação e correção.",
  },
  {
    numero: "04",
    titulo: "Progressão",
    texto: "Os estímulos são ajustados conforme sua evolução.",
  },
  {
    numero: "05",
    titulo: "Resultado",
    texto:
      "Acompanhamos seu desenvolvimento e buscamos novos níveis de desempenho.",
  },
];

export function ComoFunciona() {
  return (
    <section className="border-t border-white/5 bg-neutral-900 px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Seu processo de evolução
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {passos.map((p) => (
          <div key={p.numero} className="text-center">
            <div className="font-display text-4xl text-brand-red">
              {p.numero}
            </div>
            <h3 className="mt-2 font-display uppercase">{p.titulo}</h3>
            <p className="mt-1 text-sm text-neutral-400">{p.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
