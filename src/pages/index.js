import React from "react"
import Layout from '../components/layout';
import { Box, Typography, Container } from '@mui/material';

const HomePage = () => (
  <Layout>
    <Container>
      <Box sx={{ margin: '3rem auto', maxWidth: 600, textAlign: 'center' }}>
        <Typography variant="h1" color="purple">Welcome to My Website!</Typography>
        <Typography>im trying so gaawwlll.</Typography>
      </Box>
    </Container>
  </Layout>
)

export default HomePage