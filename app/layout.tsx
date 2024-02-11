import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "@/theme/theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Cat-a-pedia | %s",
    default: "Cat-a-pedia",
  },
  description:
    "Explore the fascinating world of cats with our comprehensive cat-a-pedia! Discover various cat breeds and learn interesting facts about these charming companions. From detailed breed profiles to fun cat trivia, embark on a delightful journey of feline education and appreciation. Meow your way through our cat-a-pedia and deepen your understanding of our beloved furry friends!",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#EDF2F8",
          margin: 0,
          padding: 0,
        }}
        className={roboto.className}
      >
        <ThemeProvider theme={lightTheme}>
          <Navbar />
          <main style={{ flex: "1" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
