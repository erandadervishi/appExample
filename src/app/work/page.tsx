"use client";
import Header from "@/components/header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Footer from "@/components/footer";
import Section5 from "@/components/section5";

const theme = createTheme({
  palette: {
    primary: { main: "#1a2e35" },
    secondary: { main: "#1cbbb4" },
    error: { main: "#dc3545" },
  },
});

export default function Work() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Section5 />
      <Footer />
    </ThemeProvider>
  );
}
