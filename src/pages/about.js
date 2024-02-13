import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Typography, Button, Grid, Container, Box } from '@mui/material';
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <Container>
      <Box p={2}>
        <Typography variant="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} align="center">
            <StaticImage
              src="./images/about-me.jpeg"
              alt="Anthony Chiarello"
              aspectRatio={1 / 1}
              style={{ borderRadius: '50%' }}
              width={350}
            />
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Anthony Chiarello
          </Typography>
          <Typography variant="body1" gutterBottom>
            my name is ant and i like to party...oh and code. Check out my other stuff on github... buy me a beer if you think this project was worth it
          </Typography>
        </Box>
        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" target="_blank" href="https://github.com/antch57" sx={{ mr: 2 }}>
            github
          </Button>
          <Button variant="contained" color="secondary" target="_blank" href="https://www.buymeacoffee.com/mpfsryv722w">
            Buy me a beer
          </Button>
        </Box>
      </Box>
    </Container>
  </Layout>
)

export default AboutPage