import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Link, Grid } from "@mui/material";

const Footer = () => (
  <Box sx={{ bgcolor: 'black', p: 2, mt: 'auto', color: 'white' }}>
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Link
          href="/about"
          underline="hover"
          sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
        >
          <InfoIcon sx={{ verticalAlign: 'middle' }} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://github.com/antch57/jam-statz-frontend" // replace with your GitHub username
          underline="hover"
          target="_blank"
          sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
        >
          <GitHubIcon sx={{ verticalAlign: 'middle' }} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="mailto:actual-email@example.com" // replace with your email
          underline="hover"
          target="_blank"
          sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
        >
          <MailIcon sx={{ verticalAlign: 'middle' }} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://www.linkedin.com/in/anthony-chiarello-271a46132/" // replace with your LinkedIn username
          underline="hover"
          target="_blank"
          sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
        >
          <LinkedInIcon sx={{ verticalAlign: 'middle' }} />
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;