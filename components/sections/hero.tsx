export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-brand-black text-white">
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-6xl uppercase tracking-tight">
          Supere seus limites
        </h1>
        <p className="mt-4 text-lg text-neutral-300">
          Treino que transforma. Método comprovado.
        </p>
      </div>
    </section>
  );
}
