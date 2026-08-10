export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-brand-black px-4 text-white">
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
