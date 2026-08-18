import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { planos } from "@/lib/data";

export function Planos() {
  return (
    <section className="border-t border-white/5 bg-neutral-900 px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Planos
      </h2>
      <Carousel className="mx-auto max-w-full md:max-w-xl lg:max-w-4xl">
        <CarouselContent>
          {planos.map((p) => (
            <CarouselItem
              key={p.modalidade}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex h-full flex-col justify-between rounded-lg border border-white/10 bg-neutral-950 p-4 text-center md:p-6">
                <div>
                  <h3 className="font-display text-lg uppercase md:text-xl">
                    {p.modalidade}
                  </h3>

                  {p.consulteApenas || p.opcoes.length === 0 ? (
                    <p className="mt-4 text-sm text-neutral-400">
                      Planos direcionados de acordo com o objetivo, frequência e
                      necessidade do aluno.
                    </p>
                  ) : (
                    <div className="mt-4 space-y-2">
                      {p.opcoes.map((o) => (
                        <div
                          key={o.frequencia}
                          className="flex items-baseline justify-between gap-2 border-b border-white/5 pb-2 text-sm last:border-0"
                        >
                          <span className="text-neutral-400">
                            {o.frequencia}
                          </span>
                          <span className="font-display text-brand-red">
                            {o.preco}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="#contato"
                  className="mt-6 inline-block rounded bg-brand-red px-4 py-2 text-sm font-display uppercase"
                >
                  {p.cta}
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
