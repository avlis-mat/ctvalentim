import Link from "next/link";
import { contatoInfo, modalidades } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { DetalheModalidade } from "../detalhe-modalidade";

export function Modalidades() {
  return (
    <section className="border-t border-white/5 bg-neutral-950 px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Modalidades
      </h2>
      <Accordion className="mx-auto max-w-5xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 lg:max-w-6xl">
        {modalidades.map((m) => (
          <AccordionItem key={m.id} value={m.id}>
            <AccordionTrigger className="flex items-center justify-between px-5 py-4 text-left font-display text-sm uppercase tracking-wide text-white transition hover:bg-neutral-900 data-[panel-open]:bg-neutral-900 data-[panel-open]:text-brand-red sm:px-6 sm:py-5 sm:text-base">
              {m.nome}
            </AccordionTrigger>
            <AccordionContent className="bg-neutral-900 px-5 pb-6 pt-1 sm:px-6">
              <p className="text-sm text-neutral-300">{m.descricao}</p>
              <div className="mt-4">
                <DetalheModalidade modalidadeId={m.id} />
              </div>
              <Link
                href={
                  contatoInfo.whatsapp + `?text=${encodeURIComponent(m.cta)}`
                }
                className="mt-4 inline-block rounded bg-brand-red px-4 py-2 text-sm font-display uppercase"
              >
                {m.cta}
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
