import React from 'react';
import { Box, Container } from '@mui/material';
import Footer from './footer';
import ResponsiveAppBar from "./topMenuBar";
import Header from './header';

const Layout = ({ children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ResponsiveAppBar />
        <Container style={{ flex: 1 }}>
            {children}
        </Container>
        <Footer />
    </div>
);

export default Layout;