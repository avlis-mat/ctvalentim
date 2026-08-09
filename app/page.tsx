import { Contato } from "@/components/sections/contato";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Depoimentos />
      <Contato />
    </main>
  );
}
