import { ArrowRight, ArrowDown, HelpCircle } from "lucide-react";
import { iconMap } from "@/lib/icon-map";
import { processo, diferenciais } from "@/lib/data";

export function Sobre() {
  return (
    <section className="border-t border-white/5 bg-neutral-900 px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-widest text-brand-red">
          Sobre o CT Valentim
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-tight md:text-5xl">
          Mais do que uma academia. Um centro de treinamento.
        </h2>
        <div className="mx-auto mt-6 max-w-xl space-y-4 text-neutral-300">
          <p>
            O CT Valentim nasceu com um propósito: transformar treinamento em
            evolução.
          </p>
          <p>
            Cada pessoa possui um objetivo, uma condição física, uma dificuldade
            e uma realidade diferente. Por isso, não trabalhamos simplesmente
            com treinos prontos.
          </p>
          <p>
            Analisamos o aluno, entendemos seus objetivos, identificamos suas
            dificuldades e utilizamos diferentes métodos para construir um
            treinamento adequado.
          </p>
          <p className="font-display uppercase text-brand-red">
            Aqui existe um processo.
          </p>
        </div>
      </div>

      {/* Fluxo do processo */}
      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-1 md:flex-row md:justify-between md:gap-2">
        {processo.map((passo, i) => {
          const Icone = iconMap[passo.icone] ?? HelpCircle;
          const ultimo = i === processo.length - 1;
          return (
            <div
              key={passo.id}
              className="flex flex-col items-center gap-1 md:flex-row md:gap-2"
            >
              <div className="group flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-neutral-950 px-5 py-4 transition hover:scale-105 hover:border-brand-red">
                <Icone className="h-6 w-6 text-brand-red transition group-hover:scale-110" />
                <span className="font-display text-sm uppercase">
                  {passo.titulo}
                </span>
              </div>
              {!ultimo && (
                <>
                  <ArrowDown className="h-5 w-5 text-neutral-600 md:hidden" />
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-neutral-600 md:block" />
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Nosso diferencial */}
      <div className="mx-auto mt-16 max-w-5xl">
        <p className="text-center text-xs uppercase tracking-widest text-brand-red">
          Nosso diferencial
        </p>
        <h3 className="mt-2 text-center font-display text-2xl uppercase md:text-3xl">
          Treinamento com método
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => {
            const Icone = iconMap[d.icone] ?? HelpCircle;
            return (
              <div
                key={d.id}
                className="group rounded-lg border border-white/10 bg-neutral-950 p-5 transition hover:-translate-y-1 hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/10"
              >
                <Icone className="h-6 w-6 text-brand-red transition group-hover:scale-110" />
                <h4 className="mt-3 font-display text-sm uppercase tracking-wide">
                  {d.titulo}
                </h4>
                <p className="mt-2 text-sm text-neutral-400">{d.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
