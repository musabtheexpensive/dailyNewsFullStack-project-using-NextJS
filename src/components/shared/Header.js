import { Box, Container, Typography } from "@mui/material";
import React from "react";
import headingNews from "@/assets/greenDaily.png";
import Image from "next/image";
import { showCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = showCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image src={headingNews}  alt="logo" className="mx-auto -my-10 mt-1 pr-20" />
        <Typography variant="body2" color="gray" textAlign="center" className="my-2">
          journalism without fear or favour
        </Typography>
        <Typography  textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
