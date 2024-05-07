"use client";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const data = [
  {
    imgSrc: "/f1.png",
    value: "$250 Million",
    label: "Paid to Freelancers",
  },
  { imgSrc: "/f2.png", value: "2 Million", label: "Paid Invoices" },
  { imgSrc: "/f3.png", value: "700,000", label: "Worldwide Freelancer" },
  { imgSrc: "/f4.png", value: "98%", label: "Customer Satisfaction Rate" },
];

const Section5 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: "#fff",
        padding: "4rem 8rem",
        margin: "auto",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{
          fontSize: "28px",
          fontWeight: "800",
          marginBottom: "1.5rem",
        }}
      >
        WORK FREELANCER HAS DONE
      </Typography>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          {data.map((item, index) => (
            <Box
              key={index}
              gap={3}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                "& img": {
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "1rem",
                  backgroundColor: theme.palette.primary.main,
                },
                "&:hover img": {
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
            >
              <img src={item.imgSrc} alt={item.label} height={80} width={80} />
              <Box>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: theme.palette.error.main,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "25px",
                    fontWeight: "800",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="/freelance-img.jpg"
            alt="Work Freelancer Has Done"
            width={600}
            height={400}
            style={{ position: "relative" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section5;
