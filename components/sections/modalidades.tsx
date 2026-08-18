import Link from "next/link";
import { modalidades } from "@/lib/data";
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
      <Accordion className="mx-auto max-w-5xl lg:max-w-6xl">
        {modalidades.map((m) => (
          <AccordionItem key={m.id} value={m.id}>
            <AccordionTrigger className="font-display uppercase text-brand-red md:text-xl">
              {m.nome}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-neutral-300">{m.descricao}</p>
              <div className="mt-4">
                <DetalheModalidade modalidadeId={m.id} />
              </div>

              <Link
                href="#contato"
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
