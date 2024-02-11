import { Card } from "@mui/material";
import { useState } from "react";
import styles from "../styles/FactSection.module.css";
const cardStyle = {
  padding: "1rem",
  minHeight: "150px",
};

export default function FactCard({ fact }: { fact: string }) {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const croppedStr =
    fact.length > 100
      ? isSeeMore
        ? fact
        : fact.split(" ").slice(0, 10).join(" ") + "..."
      : fact;


  return (
    <Card sx={cardStyle}>
      <h3>Did you know...</h3>
      <p>
        {croppedStr}
        {fact.length > 100 && (
          <span
            onClick={() => setIsSeeMore(!isSeeMore)}
            className={styles.seeMoreCardBtn}
          >
            See {isSeeMore ? "Less" : "More"}
          </span>
        )}
      </p>
    </Card>
  );
}
