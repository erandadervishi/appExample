"use client";
import { Box, Typography, IconButton, Paper } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTheme } from "@mui/material/styles";

const Section6 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 2,
            fontWeight: "bold",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          TESTIMONIAL
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            width: "100%",
            maxWidth: 1200,
            position: "relative",
            px: 2,
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              maxWidth: 800,
              position: "relative",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              John Hissona
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                padding: "0.5rem",
              }}
            >
              There are many variations of passages of Lorem Ipsum available,
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If youThere are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in s
            </Typography>
            <IconButton color="inherit">
              <FormatQuoteIcon sx={{ fontSize: "37px" }} />
            </IconButton>
          </Paper>
          <IconButton
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                bgcolor: "primary.light",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Section6;
