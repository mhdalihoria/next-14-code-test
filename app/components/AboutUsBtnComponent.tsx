"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ButtonComponent() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Button variant="contained" onClick={() => router.push("/facts")}>
        Learn a Fact
      </Button>
      <Button variant="outlined" onClick={() => router.push("/breeds")}>
        Check Cat Breeds
      </Button>
    </div>
  );
}
