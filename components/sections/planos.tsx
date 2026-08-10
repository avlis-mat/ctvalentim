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
              key={p.nome}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div
                className={`rounded-lg border p-4 text-center md:p-6 ${
                  p.destaque
                    ? "border-brand-red bg-brand-red/10 shadow-lg shadow-brand-red/20"
                    : "border-white/10 bg-neutral-950"
                }`}
              >
                <h3 className="font-display text-xl uppercase">{p.nome}</h3>
                <p className="text-sm text-neutral-400">{p.duracao}</p>
                <p className="mt-4 font-display text-3xl text-brand-red">
                  {p.valor}
                </p>
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
