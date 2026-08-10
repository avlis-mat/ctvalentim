import Image from "next/image";
import { personal } from "@/lib/data";

export function ApresentacaoPersonal() {
  return (
    <section className="border-t border-white/5 bg-neutral-900 px-4 py-16 text-white md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-lg border border-brand-red/20 bg-neutral-950 p-6 text-center shadow-lg shadow-brand-red/10 md:p-8">
        {personal.foto && (
          <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28">
            <Image
              src={personal.foto}
              alt={personal.nome}
              fill
              sizes="(max-width: 768px) 112px, 96px"
              className="object-cover"
            />
          </div>
        )}
        <h3 className="font-display text-2xl uppercase">{personal.nome}</h3>
        <p className="text-sm text-brand-red">{personal.credencial}</p>
        <p className="text-neutral-300">{personal.bio}</p>
      </div>
    </section>
  );
}
