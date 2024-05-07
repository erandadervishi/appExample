"use client";
import Header from "@/components/header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Footer from "@/components/footer";
import Section2 from "@/components/section2";
import Section4 from "@/components/section4";

const theme = createTheme({
  palette: {
    primary: { main: "#1a2e35" },
    secondary: { main: "#1cbbb4" },
    error: { main: "#dc3545" },
  },
});

export default function ReadMore() {
  return (
    <ThemeProvider theme={theme} children={undefined}>
      <Header isDashboard={false} />
      <Section2 />
      <Section4 />
      <Footer />
    </ThemeProvider>
  );
}
