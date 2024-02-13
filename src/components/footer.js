import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Container, Typography, Grid, Divider, Link } from "@mui/material";

const Footer = () => (
  <Box sx={{ bgcolor: 'black', p: 6, mt: 'auto', color: 'white' }}>
    <Container maxWidth="sm">
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Typography variant="body1">
            <Link
              href="/about"
              underline="hover"
              sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
            >
              <InfoIcon sx={{ verticalAlign: 'middle' }} /> About
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              href="https://github.com/your-github-username"
              underline="hover"
              sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
            >
              <GitHubIcon sx={{ verticalAlign: 'middle' }} /> GitHub
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item>
          <Typography variant="body1">Contact</Typography>
          <Typography variant="body2">
            <Link
              href="mailto:your-email@example.com"
              underline="hover"
              sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
            >
              <MailIcon sx={{ verticalAlign: 'middle' }} /> Email
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link
              href="tel:123-456-7890"
              underline="hover"
              sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
            >
              <PhoneIcon sx={{ verticalAlign: 'middle' }} /> Phone
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link
              _href="https://www.linkedin.com/in/your-linkedin-username"
              underline="hover"
              sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
            >
              <LinkedInIcon sx={{ verticalAlign: 'middle' }} /> LinkedIn
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;