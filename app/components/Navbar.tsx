"use client";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

const logoStyle = {
  width: "50px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                px: 0,
              }}
            >
              <Link href="/">
                <Image src={Logo} style={logoStyle} alt="logo of sitemark" />
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/breeds")}
                >
                  <Typography variant="body2">Breeds</Typography>
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/facts")}
                >
                  <Typography variant="body2">Facts</Typography>
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
