import Image from "next/image";
import { Box, Button, Card, Container, Grid } from "@mui/material";
import styles from "./styles/homepage.module.css";
import Link from "next/link";
import Background from "@/public/cat-wp.webp";
import About from "@/public/about.webp";
import ButtonComponent from "./components/AboutUsBtnComponent";
import Sponsors from "./components/Sponsors";

export default async function HomePage() {
  return (
    <div>
      <Box className={styles.heroContainer}>
        <div className={styles.backgroundWrapper}>
          <Image
            src={Background}
            alt="cat background"
            placeholder="blur"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "700px",
            }}
          />
        </div>
        <p className={styles.heroText}>Explore the world of Cats</p>
        <p className={styles.heroSubText}>With Our Informative Sections</p>
        <Link href="/facts" className={styles.cta}>
          Learn a Fact
        </Link>
      </Box>

      <Sponsors />

      <Container maxWidth="lg">
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} className={styles.aboutImg}>
            <Image
              src={About}
              alt="cute cat sitting"
              height={550}
              style={{ borderRadius: "10px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={styles.aboutTextContainer}
          >
            <h1>What is Our Message?</h1>
            <p className={styles.aboutText}>
              <span>
                Welcome to our feline haven! Over here, we are passionate about
                all things cats.
              </span>
              <span>
                Our mission is to provide a purr-fect platform for cat lovers to
                explore different breeds and learn fascinating facts about our
                beloved furry friends.
              </span>
              <span>
                Whether you are a seasoned cat enthusiast or just starting your
                journey into the world of whiskers, we are here to enrich your
                knowledge and celebrate the unique personalities and
                characteristics of cats.
              </span>
              <span>
                Join us in spreading the joy and wonder of these majestic
                creatures one meow at a time!
              </span>
            </p>
            <ButtonComponent />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
