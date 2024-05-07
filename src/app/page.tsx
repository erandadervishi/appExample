"use client";
import Header from "@/components/header";
import Section1 from "@/components/section1";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Footer from "@/components/footer";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";

const theme = createTheme({
  palette: {
    primary: { main: "#1a2e35" },
    secondary: { main: "#1cbbb4" },
    error: { main: "#dc3545" },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </ThemeProvider>
    </>
  );
}
