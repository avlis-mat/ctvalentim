import { Check } from "lucide-react";

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

const consideracoes = [
  "Seu objetivo",
  "Seu nível",
  "Sua capacidade",
  "Suas limitações",
  "Sua evolução",
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
      {/* O Método CT Valentim */}
      <div className="mx-auto mt-16 max-w-2xl border-t border-white/10 pt-12 text-center md:mt-24 md:pt-16">
        <p className="text-xs uppercase tracking-widest text-brand-red">
          O método CT Valentim
        </p>
        <h3 className="mt-3 font-display text-2xl uppercase leading-tight md:text-4xl">
          Não existe treino perfeito.
          <br />
          Existe o treino certo para cada pessoa.
        </h3>

        <p className="mt-6 text-neutral-300">
          Seu treinamento precisa considerar:
        </p>

        <ul className="mx-auto mt-4 inline-flex flex-col gap-2 text-left">
          {consideracoes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-neutral-200">
              <Check className="h-4 w-4 shrink-0 text-brand-red" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-lg text-neutral-300">
          Por isso, o CT Valentim trabalha com diferentes métodos, estímulos e
          estratégias, construindo o treinamento de acordo com aquilo que cada
          aluno precisa desenvolver.
        </p>

        <p className="mt-6 font-display text-lg uppercase text-brand-red">
          Aqui você não treina por treinar. Você treina para evoluir.
        </p>
      </div>
    </section>
  );
}
