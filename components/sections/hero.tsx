import { getImageProps } from "next/image";

export function Hero() {
  const common = { alt: "Banner", sizes: "100vw", priority: true };

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: "/hero-banner-desktop.png",
    width: 1920,
    height: 1080,
  });

  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({
    ...common,
    src: "/hero-banner-mobile.png",
    width: 750,
    height: 1334,
  });

  return (
    <section className="group relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black px-4 text-white">
      <picture className="absolute inset-0 block">
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
        <img
          {...imgProps}
          alt="Treino intenso"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </picture>

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
