"use client";
import Image from "next/image";
import { useState } from "react";

export function FotoDepoimento({
  foto,
  nome,
}: {
  foto?: string;
  nome: string;
}) {
  const [erro, setErro] = useState(false);

  if (!foto || erro) {
    return (
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-red/20 font-display text-2xl">
        {nome.charAt(0)}
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
      <Image
        src={foto}
        alt={nome}
        fill
        sizes="96px"
        className="object-cover"
        onError={() => setErro(true)}
      />
    </div>
  );
}
