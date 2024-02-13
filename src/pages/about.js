import React from "react";
import Layout from "../components/layout";
import { Box, Typography } from '@mui/material';

const AboutPage = () => (
  <Layout>
    <Box>
        <Typography variant="h4" textAlign="center">About Me</Typography>
        <Typography variant="body1" textAlign="center">I am a web developer who loves to code and learn new things.</Typography>
    </Box>
  </Layout>
);

export default AboutPage;