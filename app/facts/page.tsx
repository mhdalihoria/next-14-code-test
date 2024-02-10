import { allFactsType, randomFactType } from "@/types/facts";
import { getAllFacts, getRandomFact } from "./actions";
import FactSection from "./FactSection";
import { Container } from "@mui/material";

export default async function FactsPage() {
  const allFacts: allFactsType = await getAllFacts();
  const randomFact: randomFactType = await getRandomFact();

  return (
    <Container maxWidth="md" sx={{mt: 4}}>
      <h1>Facts</h1>
      <FactSection allFacts={allFacts} randomFact={randomFact} />
    </Container>
  );
}
