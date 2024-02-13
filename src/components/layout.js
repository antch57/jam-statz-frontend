import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Footer from './footer';
import ResponsiveAppBar from "./topMenuBar";

const Layout = ({ children }) => (
    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
        <CssBaseline /> {/* This line resets the padding and margins */}
        <ResponsiveAppBar />
        <Container style={{ flex: 1, padding: 0, margin: 0 }}>
            {children}
        </Container>
        <Footer />
    </Box>
);

export default Layout;