import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Link, Grid, Typography, Tooltip } from "@mui/material";
import FadingDivider from "./fadingDivider";

const Footer = () => (
  <Box sx={{ bgcolor: 'black', p: 2, mt: 'auto', color: 'white' }}>
    <Grid container spacing={2} justifyContent="center">
    <Grid item>
  <Tooltip title="About">
    <Link
      href="/about"
      underline="hover"
      sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
    >
      <InfoIcon sx={{ verticalAlign: 'middle' }} />
    </Link>
  </Tooltip>
</Grid>
<Grid item>
  <Tooltip title="Contact Us">
    <Link
      href="mailto:actual-email@example.com"
      underline="hover"
      target="_blank"
      sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
    >
      <MailIcon sx={{ verticalAlign: 'middle' }} />
    </Link>
  </Tooltip>
</Grid>
<Grid item>
  <Tooltip title="GitHub">
    <Link
      href="https://github.com/antch57/"
      underline="hover"
      target="_blank"
      sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
    >
      <GitHubIcon sx={{ verticalAlign: 'middle' }} />
    </Link>
  </Tooltip>
</Grid>
<Grid item>
  <Tooltip title="LinkedIn">
    <Link
      href="https://www.linkedin.com/in/anthony-chiarello-271a46132/"
      underline="hover"
      target="_blank"
      sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}
    >
      <LinkedInIcon sx={{ verticalAlign: 'middle' }} />
    </Link>
  </Tooltip>
</Grid>
    </Grid>
    <FadingDivider />
    <Typography color="white" align="center" sx={{ opacity: 0.7 }}>
      © 2024 Anthony Chiarello. All rights reserved. lol jk idk what this even does.
    </Typography>
  </Box>
);

export default Footer;