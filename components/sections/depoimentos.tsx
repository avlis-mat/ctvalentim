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
    <section className="bg-neutral-950 py-24 text-white">
      <h2 className="mb-12 text-center font-display text-4xl uppercase tracking-wide">
        Quem treina, aprova
      </h2>

      <Carousel className="mx-auto max-w-2xl">
        <CarouselContent>
          {depoimentos.map((d) => (
            <CarouselItem key={d.id}>
              <div className="space-y-4 rounded-lg border border-brand-red/20 bg-neutral-900 p-6">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
