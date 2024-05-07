"use client";
import React from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Box,
  ListItemButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface HeaderProps {
  isDashboard: boolean;
}

const Header = ({ isDashboard }: HeaderProps) => {
  return (
    <AppBar
      position={isDashboard ? "absolute" : "relative"}
      sx={{
        background: isDashboard ? "transparent" : "#1a2e35",
        padding: "10px",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image alt="Remy Sharp" src="/logo.png" width={50} height={50} />
            <Typography variant="h4" sx={{ mx: "1rem", fontWeight: "600" }}>
              Spering
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              ml: "3rem",
            }}
          >
            <ListItemButton
              sx={{ fontSize: "18px", fontWeight: "500", color: "#fff" }}
            >
              Home
            </ListItemButton>
            <ListItemButton
              sx={{ fontSize: "18px", fontWeight: "500", color: "#fff" }}
            >
              About
            </ListItemButton>
            <ListItemButton
              sx={{ fontSize: "18px", fontWeight: "500", color: "#fff" }}
            >
              Work
            </ListItemButton>
            <ListItemButton
              sx={{ fontSize: "18px", fontWeight: "500", color: "#fff" }}
            >
              Category
            </ListItemButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            ml: "3rem",
          }}
        >
          <ListItemButton
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#fff",
              flexGrow: 2,
              mr: "1rem",
            }}
          >
            Log In
          </ListItemButton>

          <IconButton color="inherit" sx={{ height: "50%" }}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <CloseIcon sx={{ fontSize: "37px" }} />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
