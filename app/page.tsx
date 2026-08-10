import { ApresentacaoPersonal } from "@/components/sections/apresentacao-personal";
import { Contato } from "@/components/sections/contato";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Planos } from "@/components/sections/planos";
import { TreinosDemo } from "@/components/sections/treinos-demo";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApresentacaoPersonal />
      <Depoimentos />
      <TreinosDemo />
      <Faq />
      <Planos />
      <Contato />
    </main>
  );
}
