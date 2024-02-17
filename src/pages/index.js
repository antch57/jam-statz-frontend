import React from "react"
import Layout from '../components/layout';
import { Box, Button, Typography, Container } from '@mui/material';

const HomePage = () => (
  <Layout>
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to My App
      </Typography>
      <Typography variant="h5"align="center"  gutterBottom>
        This is a simple landing page.
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  </Layout>
)

export default HomePage