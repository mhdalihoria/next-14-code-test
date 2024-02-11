"use client";
import { useEffect, useState } from "react";
import { BreedsApiResponse } from "@/types/breedsType";
import BreedsTable from "./components/BreedsTable";
import SkeletonTable from "./components/SkeletonTable";
import { Box, Container, Pagination } from "@mui/material";
import styles from "./styles/breeds.module.css";

type pageType = number | null;

export default function Breeds() {
  const [page, setPage] = useState<pageType>(null);
  const [breeds, setBreeds] = useState<BreedsApiResponse | null>(null);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  useEffect(() => {
    const fetchBreeds = async (page: pageType) => {
      const response = await fetch(`https://catfact.ninja/breeds?page=${page}`);
      const data = await response.json();
      setBreeds(data);
    };

    fetchBreeds(page);
  }, [page]);

  return (
    <Container maxWidth="lg" style={{ marginTop: "7rem" }}>
      <Box className={styles.breedsHeaderContainer}>
        <h1 className={styles.breedsSectionTitle}>Table</h1>
        <p>Here is a list of cat breeds for you to learn from...</p>
      </Box>
      {breeds ? (
        <>
          <BreedsTable data={breeds} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Pagination
              count={breeds.last_page}
              page={breeds.current_page}
              onChange={handlePageChange}
            />
          </Box>
        </>
      ): <SkeletonTable />}
    </Container>
  );
}
