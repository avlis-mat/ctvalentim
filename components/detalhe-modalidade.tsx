import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { iconMap } from "@/lib/icon-map";
import {
  conteudoModalidade,
  objetivos,
  detalhesPorModalidade,
} from "@/lib/data";
import { HelpCircle } from "lucide-react";

export function DetalheModalidade({ modalidadeId }: { modalidadeId: string }) {
  const conteudo = conteudoModalidade[modalidadeId];
  if (!conteudo) return null;

  const objetivosDaModalidade = objetivos.filter((o) =>
    conteudo.objetivoIds.includes(o.id),
  );
  const gruposComExercicios = detalhesPorModalidade(modalidadeId);

  return (
    <div className="space-y-8 text-left">
      <div>
        <h3 className="font-display text-2xl uppercase text-brand-red">
          {conteudo.tituloDestaque}
        </h3>
        <div className="mt-3 space-y-2 text-neutral-300">
          {conteudo.paragrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {objetivosDaModalidade.length > 0 && (
        <div>
          <h4 className="mb-3 font-display text-sm uppercase text-neutral-400">
            Objetivos
          </h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {objetivosDaModalidade.map((o) => {
              const Icone = iconMap[o.icone] ?? HelpCircle;
              return (
                <div
                  key={o.id}
                  className="flex items-center gap-2 rounded border border-white/10 bg-neutral-900 p-3"
                >
                  <Icone className="h-5 w-5 shrink-0 text-brand-red" />
                  <span className="text-sm">{o.nome}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {gruposComExercicios.length > 0 && (
        <div>
          <h4 className="mb-3 font-display text-sm uppercase text-neutral-400">
            Exercícios
          </h4>
          <Accordion
            multiple
            className="divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-neutral-950"
          >
            {gruposComExercicios.map(({ grupo, exercicios }) => {
              const IconeGrupo = iconMap[grupo.icone] ?? HelpCircle;
              return (
                <AccordionItem
                  key={grupo.id}
                  value={grupo.id}
                  className="bg-neutral-900"
                >
                  <AccordionTrigger className="flex items-center gap-2 px-3 py-3 text-left text-sm uppercase sm:px-4 sm:text-base">
                    <IconeGrupo className="h-4 w-4 shrink-0 text-brand-red" />
                    {grupo.titulo}
                  </AccordionTrigger>
                  <AccordionContent className="bg-neutral-950 px-3 pb-3 pt-0 sm:px-4">
                    <Accordion
                      multiple
                      className="divide-y divide-white/10 overflow-hidden rounded-md bg-neutral-950"
                    >
                      {exercicios.map((ex) => {
                        const IconeExercicio = ex.icone
                          ? iconMap[ex.icone]
                          : null;
                        return (
                          <AccordionItem key={ex.id} value={ex.id}>
                            <AccordionTrigger className="flex items-center gap-3 py-3 text-left">
                              {IconeExercicio && (
                                <IconeExercicio className="h-5 w-5 shrink-0 text-brand-red" />
                              )}
                              <span className="font-display text-sm uppercase tracking-wide sm:text-base">
                                {ex.nome}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 pl-7 sm:pl-8">
                              <p className="text-sm text-neutral-400">
                                {ex.descricao}
                              </p>
                              {/* mídia continua igual */}
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      )}

      <p className="font-display text-lg uppercase text-brand-red">
        {conteudo.fraseDestaque}
      </p>
    </div>
  );
}
