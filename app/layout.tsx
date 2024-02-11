import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "@/theme/theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";

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
