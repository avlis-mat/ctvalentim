import Link from "next/link";

const objetivos = [
  "Emagrecer",
  "Ganhar força",
  "Fazer sua primeira barra",
  "Aprender novos movimentos de calistenia",
  "Melhorar sua musculação",
  "Passar no TAF",
  "Correr mais rápido",
  "Treinar para HYROX",
  "Melhorar seu condicionamento",
];

export function ChamadaFinal() {
  return (
    <section className="border-t border-white/5 bg-brand-black px-4 py-16 text-center text-white md:py-24">
      <h2 className="font-display text-3xl uppercase tracking-wide md:text-4xl">
        Qual é o seu objetivo?
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-neutral-300">
        {objetivos.join(" • ")}
      </p>
      <p className="mt-6 font-display text-xl uppercase text-brand-red">
        Comece a treinar com direção.
      </p>
      <Link
        href="#contato"
        className="mt-6 inline-block rounded bg-brand-red px-8 py-4 font-display uppercase"
      >
        Quero começar
      </Link>
    </section>
  );
}
