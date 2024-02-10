import { Card } from "@mui/material";

const cardStyle = {
  padding: "1rem",
};

export default function FactCard({ fact }: { fact: string }) {
  return (
    <Card sx={cardStyle}>
      <h3>Did you know...</h3>
      <p>{fact}</p>
    </Card>
  );
}
