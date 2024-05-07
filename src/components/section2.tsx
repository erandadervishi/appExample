"use client";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section2 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        padding: "4rem 8rem",
        margin: "1rem",
      }}
    >
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            style={{ maxWidth: "100%" }}
            src="/experience-img.jpg"
            alt="Freelancer Working"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontSize: "28px", fontWeight: "bold", mb: 2 }}
          >
            BEST EXPERIENCED FREELANCER HERE
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as Lorem ipsum dolor sit amet.
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
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              padding: " 0.5rem 3rem",
              border: "1px solid #000",
              "&:hover": {
                color: "#000",
                border: "1px solid #000",
                background: "transparent",
                boxShadow: "0",
              },
            }}
          >
            Hire
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
