import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SpaIcon from '@mui/icons-material/Spa';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "gatsby"

const pages = ['Bands', 'Albums', 'Performances', 'Venues'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TopToolBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: 'black'}}>
  <Container maxWidth="xl">
  <Toolbar disableGutters>
  <Box display="flex" flexGrow={1} alignItems="center">
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
  </Box>

  <Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      <Avatar alt="avatar-image" />
    </IconButton>
  </Tooltip>
  <Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >
    {settings.map((setting) => (
      <MenuItem key={setting} onClick={handleCloseUserMenu}>
        <Typography textAlign="center">{setting}</Typography>
      </MenuItem>
    ))}
  </Menu>
</Toolbar>  </Container>
</AppBar>
  )
}

export default TopToolBar;