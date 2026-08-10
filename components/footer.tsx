export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-black px-4 py-12 text-center text-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
        {/* Espaço pra logo — troca pelo <Image src="/logo.svg" .../> quando tiver */}
        <div className="font-display text-2xl uppercase tracking-wide">
          CT<span className="text-brand-red">Valentim</span> Centro de
          Treinamento
        </div>

        <p className="text-sm text-neutral-400">
          O treino é intenso, o compromisso é individual. Resultado de verdade
          exige constância.
        </p>

        <div className="text-sm text-neutral-300">
          <p className="font-medium">Samuel Valentim Guedes</p>
          <p>CREF 016019-DF</p>
          <p>samuel-vg2011@hotmail.com</p>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
