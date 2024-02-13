import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {mainNavbarItems} from './const/navbarItems'

const drawerWidth = 240;


export default function Navbar() {

  return (
    <Box>
    <Toolbar>
    <Typography variant="h6" noWrap component="div">
      Permanent drawer
    </Typography>
  </Toolbar>
<Drawer
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      backgroundColor: '#101f33',
      color: 'white',
    },
  }}
  variant="permanent"
  anchor="left"
>
  <Toolbar />
  <Divider />
  <List>
    {mainNavbarItems.map((obj) => (
      <ListItem key={obj.id} disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{color: 'white'}}>
            {obj.icon}
          </ListItemIcon>
          <ListItemText primary={obj.label} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
</Drawer>
  <Toolbar />
  </Box>

  );
}
