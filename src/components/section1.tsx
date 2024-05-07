"use client";
import React from "react";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section1 = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        color: "#fff",
        backgroundColor: theme.palette.primary.main,
        position: "relative",
      }}
    >
      <Box
        display="flex"
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={10}
        marginLeft="2rem"
      >
        <Box flexGrow={1} p={3} sx={{ width: "55%" }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontSize: "37px", fontWeight: "600" }}
          >
            YOU CAN
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontSize: "37px", fontWeight: "600" }}
          >
            HIRE FREELANCER
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontSize: "37px", fontWeight: "600" }}
          >
            HERE
          </Typography>
          <Typography variant="subtitle1" paragraph sx={{ fontSize: "20px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginRight: 2,
              backgroundColor: theme.palette.error.main,
              borderRadius: "0",
              color: "#fff",
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
            About Us
          </Button>
          <Button
            variant="contained"
            sx={{
              marginRight: 2,
              borderRadius: "0",
              backgroundColor: "#fff",
              color: "#000",
              padding: " 0.5rem 3rem",
              border: "1px solid #fff",
              "&:hover": {
                color: "#fff",
                border: "1px solid #fff",
                background: "transparent",
                boxShadow: "0",
              },
            }}
          >
            Get A Quote
          </Button>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.secondary.main,
            width: "45%",
            padding: "4rem",
          }}
        >
          <img
            style={{ maxWidth: "100%" }}
            src="/slider-img.png"
            alt="Freelancer working"
          />
        </Box>
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          left: 100,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            background: theme.palette.secondary.main,
          },
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          left: 150,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            background: theme.palette.secondary.main,
          },
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Container>
  );
};

export default Section1;
