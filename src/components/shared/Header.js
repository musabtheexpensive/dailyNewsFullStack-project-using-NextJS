import { Box, Container } from '@mui/material';
import React from 'react';
import headingNews from "@/assets/dailyNews.png"
import Image from 'next/image';
const Header = () => {
    return (
        <Box>
            <Container>
            <Image src={headingNews} width={100} height={100} alt="logo" />

            </Container>
        </Box>
    );
};

export default Header;