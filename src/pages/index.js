import React from "react"
import { Typography, Container, Divider } from '@mui/material';

import Layout from "../components/layout";
import FeaturedBands from "../components/featuredBands";
import AboutJamz from "../components/aboutJamz";
import FeaturedShows from "../components/featuredShows";

const LandingPage = () => {
  return (
    <Layout>
      <Container maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome to Jamz
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Keep track of your favorite bands, albums, live performances and venues.
        </Typography>
      </Container>
      <Divider variant="middle" />
      <FeaturedBands/>
      <Divider variant="middle" />
      <FeaturedShows/>
      <Divider variant="middle" />
      <AboutJamz/>
    </Layout>
  )
}

export default LandingPage