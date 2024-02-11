"use client";

import { useState } from "react";
import { allFactsType, randomFactType } from "@/types/facts";
import { Box, Button, Container, Grid, Pagination } from "@mui/material";
import FactCard from "./components/FactCard";
import styles from "./styles/FactSection.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
      <Box className={styles.factSectionHeader}>
        <h1 className={styles.factSectionTitle}>Facts</h1>
        <p>
          Have you ever wanted to learn more about cats? well, you can start
          now...
        </p>
        <Box className={styles.factSectionHeaderBtnContainer}>
          <Button
            variant={factType === "random" ? "outlined" : "contained"}
            onClick={() => setFactType("random")}
          >
            Random Fact
          </Button>
          <Button
            variant={factType === "all" ? "outlined" : "contained"}
            onClick={() => setFactType("all")}
          >
            All Facts
          </Button>
        </Box>
      </Box>
      <Box className={styles.factsContainer}>
        {factType &&
          (factType === "all" ? (
            <AllFactsComponent allFacts={allFacts}/>
          ) : (
            <Container maxWidth="sm">
              <FactCard fact={randomFact.fact} type="random"/>
            </Container>
          ))}
      </Box>
    </div>
  );
}

function AllFactsComponent({ allFacts }: { allFacts: allFactsType }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPageurl = Number(searchParams.get("page")) || 1;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {allFacts.data.map((fact) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={fact.fact}>
            <FactCard fact={fact.fact} type="all"/>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Pagination
          count={allFacts.last_page}
          page={allFacts.current_page}
          onChange={handlePageChange}
        />
      </Box>
    </div>
  );
}
