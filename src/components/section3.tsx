"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Section3 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.secondary.main,
        color: "white",
        padding: "4rem",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: "28px",
          fontWeight: "600",
          textDecoration: "underline",
          marginBottom: "2rem",
        }}
      >
        CATEGORY
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ padding: "2rem 3rem", justifyContent: "center" }}
      >
        <Grid item xs={3} md={4} sx={{ paddingBottom: "2.5rem" }}>
          <img src="/c1.png" style={{}} />
          <Typography>Design & Arts</Typography>
        </Grid>
        <Grid item xs={3} md={4} sx={{ paddingBottom: "2.5rem" }}>
          <img src="/c2.png" style={{}} />
          <Typography>Web Development</Typography>
        </Grid>
        <Grid item xs={3} md={4} sx={{ paddingBottom: "2.5rem" }}>
          <img src="/c3.png" style={{}} />
          <Typography>SEO Marketing</Typography>
        </Grid>
        <Grid item xs={3} md={4}>
          <img src="/c4.png" style={{}} />
          <Typography>Video Editing</Typography>
        </Grid>
        <Grid item xs={3} md={4}>
          <img src="/c5.png" style={{}} />
          <Typography>Logo Design</Typography>
        </Grid>
        <Grid item xs={3} md={4}>
          <img src="/c6.png" style={{}} />
          <Typography>Game Design</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;
