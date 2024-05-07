"use client";
import Header from "@/components/header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Footer from "@/components/footer";
import Section3 from "@/components/section3";

const theme = createTheme({
  palette: {
    primary: { main: "#1a2e35" },
    secondary: { main: "#1cbbb4" },
    error: { main: "#dc3545" },
  },
});

export default function Category() {
  return (
    <ThemeProvider theme={theme} children={undefined}>
      <Header isDashboard={false} />
      <Section3 />
      <Footer />
    </ThemeProvider>
  );
}
