import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { treinosDemo } from "@/lib/data";

export function TreinosDemo() {
  return (
    <section className="border-t border-white/5 bg-neutral-900 px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Treinos de demonstração
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treinosDemo.map((t) => (
          <Dialog key={t.id}>
            <DialogTrigger
              render={
                <button className="group relative overflow-hidden rounded-lg border border-white/10 text-left" />
              }
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={`https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`}
                  alt={t.titulo}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/90">
                    ▶
                  </div>
                </div>
              </div>
              <div className="bg-neutral-950 p-4">
                <p className="text-xs uppercase text-brand-red">
                  {t.categoria}
                </p>
                <p className="font-display uppercase">{t.titulo}</p>
              </div>
            </DialogTrigger>

            <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-brand-red/20 bg-neutral-950 p-6 text-white">
              <DialogTitle className="sr-only">{t.titulo}</DialogTitle>
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${t.youtubeId}?autoplay=1`}
                  title={t.titulo}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
