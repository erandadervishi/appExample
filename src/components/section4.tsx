"use client";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";

const Section4 = () => {
  const theme = useTheme();

  return (
    <Box textAlign="center" sx={{ background: "#fff", padding: "2rem" }}>
      <img
        style={{ maxWidth: "100%" }}
        src="/about-img.jpg"
        alt="About Spering Company"
      />

      <Typography
        variant="h4"
        component="h2"
        sx={{ fontSize: "28px", fontWeight: "bold", mb: 2 }}
      >
        ABOUT SPERING COMPANY
      </Typography>
      <Typography variant="body1" sx={{ mb: "2rem", paddingX: "10rem" }}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomized words which don't look even slightly believable. If youThere
        are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomized words which don't look even slightly believable. If you
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mr: 2,
          background: theme.palette.error.main,
          borderRadius: "0",
          padding: " 0.5rem 3rem",
          border: "1px solid #dc3545",
          "&:hover": {
            color: theme.palette.error.main,
            border: "1px solid #dc3545",
            background: "transparent",
            boxShadow: "0",
          },
        }}
      >
        Read More
      </Button>
    </Box>
  );
};

export default Section4;
