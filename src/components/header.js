import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SpaIcon from '@mui/icons-material/Spa';
import { Link } from "gatsby"

const pages = ['Bands', 'Albums', 'Performances', 'Venues'];

const TopToolBar = () => (
<AppBar position="static" sx={{bgcolor: 'black'}}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Link
        to="/"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Box display="flex" alignItems="center">
          <SpaIcon
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              },
              mr: 1,
              position: 'relative',
              top: '-2px',
              fontSize: '2rem',
            }} />
          <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          JAMZ
          </Typography>
        </Box>
      </Link>

      {pages.map((page) => (
        <Link to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }} key={page}>
          <Button color="inherit" key={page}>
            {page}
          </Button>
        </Link>
      ))}

    </Toolbar>
  </Container>
</AppBar>
);

export default TopToolBar;