"use client";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  LocalPhone,
  MailOutline,
  LocationOnOutlined,
} from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        color: "white",
        padding: "3rem 5rem",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image alt="Remy Sharp" src="/logo.png" width={50} height={50} />
          <Typography variant="h4" gutterBottom>
            Spering
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton color="inherit">
            <FacebookIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton color="inherit">
            <YouTubeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={8} mt={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "22px", fontWeight: "bold", marginBottom: "1rem" }}
          >
            USEFUL LINKS
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ fontSize: "18px" }}
          >
            Home
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ fontSize: "18px" }}
          >
            About
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ fontSize: "18px" }}
          >
            Work
          </Link>
          <br />
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ fontSize: "18px" }}
          >
            Category
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "22px", fontWeight: "bold", marginBottom: "1rem" }}
            gutterBottom
          >
            OFFICES
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Readable content of a page when looking at its layout readable
            content of a page when looking at its layout
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "22px", fontWeight: "bold", marginBottom: "1rem" }}
            gutterBottom
          >
            INFORMATION
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Readable content of a page when looking at its layout readable
            content of a page when looking at its layout
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{ fontSize: "22px", fontWeight: "bold", marginBottom: "1rem" }}
            gutterBottom
          >
            NEWSLETTER
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Email"
            sx={{
              background: "white",
              borderRadius: "0",
              "&:hover": {
                borderRadius: "0",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              background: theme.palette.error.main,
              border: "1px solid #fff",
              borderRadius: "0",
              "&:hover": {
                color: theme.palette.error.main,
                border: "1px solid #dc3545",
                background: "transparent",
                boxShadow: "0",
              },
            }}
          >
            SUBSCRIBE
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          paddingTop: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <IconButton color="inherit">
            <LocationOnOutlined sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="h6">Location</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <IconButton color="inherit">
            <MailOutline sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="h6">mail@domain.com</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <IconButton color="inherit">
            <LocalPhone sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant="h6">call +01 1234567890</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
