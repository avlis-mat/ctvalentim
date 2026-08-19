// components/sections/metodo.tsx
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { contatoInfo, modalidades } from "@/lib/data";
import { DetalheModalidade } from "../detalhe-modalidade";

export function Metodo() {
  return (
    <section className="border-t border-white/5 bg-brand-black px-4 py-16 text-center text-white md:py-24">
      <p className="text-xs uppercase tracking-widest text-brand-red">
        Treinamento personalizado • Performance • Resultado real
      </p>
      <h2 className="mt-3 font-display text-3xl uppercase tracking-tight md:text-5xl">
        Treine com propósito. Evolua de verdade.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-neutral-300">
        Treinamentos desenvolvidos de acordo com seu objetivo, seu nível, suas
        necessidades e suas limitações.
      </p>
      <p className="mx-auto mt-4 max-w-xl text-neutral-300">
        Aqui você não recebe um treino genérico.
        <br />
        Você recebe direção, metodologia, acompanhamento e progressão.
      </p>

      <Carousel className="mx-auto mt-8 max-w-3xl">
        <CarouselContent>
          {modalidades.map((m) => (
            <CarouselItem
              key={m.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4"
            >
              <Dialog>
                <DialogTrigger
                  render={
                    <button className="w-full rounded-full border border-brand-red/40 px-4 py-2 text-sm uppercase text-neutral-200 transition hover:border-brand-red hover:text-white" />
                  }
                >
                  {m.nome}
                </DialogTrigger>

                <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-brand-red/20 bg-neutral-950 p-6 text-white">
                  <DialogTitle className="font-display text-xl uppercase">
                    {m.nome}
                  </DialogTitle>
                  <p className="mt-2 text-sm text-neutral-300">{m.descricao}</p>

                  <DetalheModalidade modalidadeId={m.id} />

                  <Link
                    href={
                      contatoInfo.whatsapp +
                      `?text=${encodeURIComponent(m.cta)}`
                    }
                    className="mt-6 inline-block rounded bg-brand-red px-6 py-3 font-display text-sm uppercase"
                  >
                    {m.cta}
                  </Link>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Link
        href={contatoInfo.whatsapp}
        className="mt-8 inline-block rounded bg-brand-red px-8 py-4 font-display uppercase"
      >
        Quero começar
      </Link>
      <p className="mt-4 text-sm text-neutral-500">
        Treino real. Sem mimimi. Sem fórmula mágica.
      </p>
    </section>
  );
}
