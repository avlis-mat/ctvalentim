import { ApresentacaoPersonal } from "@/components/sections/apresentacao-personal";
import { ChamadaFinal } from "@/components/sections/chamada-final";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Contato } from "@/components/sections/contato";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Localizacao } from "@/components/sections/localizacao";
import { Metodo } from "@/components/sections/metodo";
import { Modalidades } from "@/components/sections/modalidades";
import { Planos } from "@/components/sections/planos";
import { Sobre } from "@/components/sections/sobre";
import { TreinosDemo } from "@/components/sections/treinos-demo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Metodo />
      <Sobre />
      <ApresentacaoPersonal />
      <Modalidades />
      <ComoFunciona />
      <Faq />
      <Localizacao />
      <Planos />
      <Depoimentos />
      <ChamadaFinal />
      <Contato />
    </main>
  );
}
