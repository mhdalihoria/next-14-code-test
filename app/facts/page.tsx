import { allFactsType, randomFactType } from "@/types/facts";
import { getAllFacts, getRandomFact } from "./actions";
import FactSection from "./FactSection";

export default async function FactsPage() {
  const allFacts: allFactsType = await getAllFacts();
  const randomFact: randomFactType = await getRandomFact();

  return (
    <div>
      <h1>Facts</h1>
      <FactSection allFacts={allFacts} randomFact={randomFact}/>
    </div>
  );
}
