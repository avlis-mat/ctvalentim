import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { depoimentos } from "@/lib/data";
import { FotoDepoimento } from "../foto-depoimento";

export function Depoimentos() {
  return (
    <section className="border-t border-white/5 bg-neutral-950 px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Quem treina, aprova
      </h2>

      <Carousel className="mx-auto max-w-full md:max-w-2xl">
        <CarouselContent>
          {depoimentos.map((d) => (
            <CarouselItem key={d.id}>
              <div className="space-y-4 rounded-lg border border-brand-red/20 bg-neutral-900 p-4 md:p-6">
                {d.videoUrl ? (
                  <div className="aspect-video w-full overflow-hidden rounded">
                    <iframe
                      src={d.videoUrl}
                      title={`Depoimento de ${d.nome}`}
                      className="h-full w-full"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <FotoDepoimento foto={d.foto} nome={d.nome} />
                )}
                <p className="text-center text-neutral-300">"{d.texto}"</p>
                <p className="text-center font-display uppercase text-brand-red">
                  {d.nome}
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
