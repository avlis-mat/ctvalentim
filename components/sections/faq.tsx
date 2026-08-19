import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/data";

export function Faq() {
  return (
    <section className="border-t border-white/5 bg-neutral-950 px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Perguntas frequentes
      </h2>
      <Accordion className="mx-auto max-w-2xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
        {faq.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="flex items-center justify-between px-5 py-4 text-left font-display text-sm uppercase tracking-wide text-white transition hover:bg-neutral-900 data-[panel-open]:bg-neutral-900 data-[panel-open]:text-brand-red sm:px-6 sm:py-5 sm:text-base">
              {item.pergunta}
            </AccordionTrigger>
            <AccordionContent className="bg-neutral-900 px-5 pb-6 pt-1 text-sm text-neutral-300 sm:px-6">
              {item.resposta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
