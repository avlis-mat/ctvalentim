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
      <Accordion className="mx-auto max-w-full md:max-w-2xl">
        {faq.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">
              {item.pergunta}
            </AccordionTrigger>
            <AccordionContent className="text-neutral-300">
              {item.resposta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
