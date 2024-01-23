import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
// /icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer = () => {
    const navItems = [
        {
          route: "Home",
          pathname: "/",
        },
        {
          route: "Page",
          pathname: "/pages",
        },
        {
          route: "Category",
          pathname: "/category",
        },
        {
          route: "News",
          pathname: "/news",
        },
        {
          route: "Contact",
          pathname: "/contact",
        },
      ];
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <GoogleIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" color="gray" textAlign="center">
          © 2024 The Daily News. Design by musabtheexpensive
          </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
