import { Box, Container, Typography } from "@mui/material";
import React from "react";
import headingNews from "@/assets/dailyNews.png";
import Image from "next/image";
const Header = () => {
  return (
    <Box>
      <Container>
        <Image src={headingNews} width={300} height={100} alt="logo" />
        <Typography variant="body2" color="gray" textAlign="center">
          journalism without fear or favour
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
