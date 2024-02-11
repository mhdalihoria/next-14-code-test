
import { Box, Grid } from "@mui/material";
import styles from "../styles/homepage.module.css";
import Brand1 from "@/public/brand-1.svg";
import Brand2 from "@/public/brand-2.svg";
import Brand3 from "@/public/brand-3.svg";
import Brand4 from "@/public/brand-4.svg";
import Image from "next/image";

export default function Sponsors() {
  return (
    <Box className={styles.sponsorsContainer}>
      <h1 style={{fontSize: "2.2rem", marginBottom: "1.2em"}}>Our Sponsors</h1>
      <Box className={styles.sponsorsLogosContainer}>
        <Grid container columnSpacing={3} rowSpacing={5}>
          <Grid item xs={12} sm={6} md={3} className={styles.logoContainer}>
            <Image src={Brand1} alt="brand logo" width={100} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={styles.logoContainer}>
            <Image src={Brand3} alt="brand logo" width={100} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={styles.logoContainer}>
            <Image src={Brand4} alt="brand logo" width={200} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={styles.logoContainer}>
            <Image src={Brand2} alt="brand logo" width={100} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
