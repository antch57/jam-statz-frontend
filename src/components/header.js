import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => (
<AppBar position="static" sx={{ bgcolor: 'black' }}>
    <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
        <Link href="/" color="inherit" underline="none" sx={{ '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}>
        <HomeIcon /> Home
        </Link>
    </Typography>
    <Button color="inherit" href="/about" sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}>About</Button>
    <Button color="inherit" href="/contact" sx={{ color: 'white', '&:hover': { color: 'white' }, '&:active': { color: 'grey' } }}>Contact</Button>
    </Toolbar>
</AppBar>
);

export default Header;