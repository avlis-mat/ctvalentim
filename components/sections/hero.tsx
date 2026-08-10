import Image from "next/image";

export function Hero() {
  return (
    <section className="group relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black px-4 text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.png"
          alt="Treino intenso"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black" />

      <div className="relative z-10 text-center">
        <h1 className="font-display text-4xl uppercase tracking-tight md:text-6xl">
          Supere seus limites
        </h1>
        <p className="mt-4 text-base text-neutral-300 md:text-lg">
          Treino que transforma. Método comprovado.
        </p>
      </div>
    </section>
  );
}
