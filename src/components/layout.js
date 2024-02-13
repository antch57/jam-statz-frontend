import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Footer from './footer';
import Header from "./header";

const Layout = ({ children }) => (
    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
        <CssBaseline />
        <Header />
        <Container>
            {children}
        </Container>
        <Footer />
    </Box>
);

export default Layout;