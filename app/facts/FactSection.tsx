"use client";

import { useState } from "react";
import { allFactsType, randomFactType } from "@/types/facts";
import { Box, Button, Grid } from "@mui/material";
import FactCard from "./components/FactCard";

export default function FactSection({
  allFacts,
  randomFact,
}: {
  allFacts: allFactsType;
  randomFact: randomFactType;
}) {
  const [factType, setFactType] = useState<string | null>(null);

  return (
    <div>
      <Box>
        <Button onClick={() => setFactType("random")}>Random Fact</Button>
        <Button onClick={() => setFactType("all")}>All Facts</Button>
      </Box>
      <Box>
        {factType &&
          (factType === "all" ? (
            <AllFactsComponent allFacts={allFacts} />
          ) : (
            <div>
              <FactCard fact={randomFact.fact} />
            </div>
          ))}
      </Box>
    </div>
  );
}

function AllFactsComponent({ allFacts }: { allFacts: allFactsType }) {
  return (
    <div>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {allFacts.data.map((fact) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={fact.fact}>
            <FactCard fact={fact.fact} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
