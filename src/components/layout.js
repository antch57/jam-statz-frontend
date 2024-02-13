import React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';

import Footer from './footer';
import Header from "./header";

const theme = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: '#red',
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily: 'serif',
    },
  });

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
            <CssBaseline />
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </Box>
    </ThemeProvider>
);

export default Layout;