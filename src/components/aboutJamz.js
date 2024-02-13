import React from "react";
import { Container, Typography } from '@mui/material';

const AboutJamz = () => (
    <Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6}}>
    <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
      About Jamz
    </Typography>
    <Typography variant="h5" align="center" color="grey" component="p">
      Welcome to Jamz, your go-to site for all things live music. <br/>
      Here, you can keep track of your favorite bands, albums, and venues. <br/>
      <br/> But that's not all. <br/> <br/>
      Jamz is also a hub for logging your live music experiences.
      From intimate club gigs to large stadium concerts and music festivals, we've got you covered. <br/>
      <br/>With Jamz, you'll never miss a beat. {'\u{1F609}'}
    </Typography>
  </Container>
);

export default AboutJamz;