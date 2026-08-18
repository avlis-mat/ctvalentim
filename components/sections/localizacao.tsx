import { contatoInfo } from "@/lib/data";

export function Localizacao() {
  return (
    <section className="border-t border-white/5 bg-neutral-950 px-4 py-16 text-white md:py-24">
      <h2 className="mb-8 text-center font-display text-3xl uppercase tracking-wide md:mb-12 md:text-4xl">
        Venha treinar no CT Valentim
      </h2>
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
        <p className="text-neutral-300">📍 {contatoInfo.endereco}</p>
        <div className="text-sm text-neutral-400">
          {contatoInfo.horario.map((linha) => (
            <p key={linha}>{linha}</p>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contatoInfo.endereco)}`}
            target="_blank"
            className="rounded bg-brand-red px-6 py-3 font-display uppercase"
          >
            Como chegar
          </a>
          <a
            href={contatoInfo.whatsapp}
            target="_blank"
            className="rounded border border-brand-red px-6 py-3 font-display uppercase"
          >
            Falar no WhatsApp
          </a>
          <a
            href={contatoInfo.instagram}
            target="_blank"
            className="rounded border border-white/20 px-6 py-3 font-display uppercase"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
