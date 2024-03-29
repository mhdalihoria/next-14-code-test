import { allFactsType, randomFactType } from "@/types/facts";
import { getAllFacts, getRandomFact } from "./actions";
import FactSection from "./FactSection";
import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facts"
};

export default async function FactsPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const allFacts: allFactsType = await getAllFacts(searchParams?.page);
  const randomFact: randomFactType = await getRandomFact();

  return (
    <Container maxWidth="lg" sx={{ mt: 14 }}>
      <FactSection allFacts={allFacts} randomFact={randomFact} />
    </Container>
  );
}
