import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
        }}
      >
        <Navbar />
        <main style={{ flex: " 1" }}>{children}</main>
        {/* <main style={{ marginTop: "2rem" }}>{children}</main> */}
        <Footer />
      </body>
    </html>
  );
}
