import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AppsIcon from '@mui/icons-material/Apps';
export default function BottomNavbar() {
  return (
    <React.Fragment>
      <CssBaseline />
     <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} style={{backgroundColor:'#fff',color:'black'}}>
        <Toolbar>
          <div style={{display:'flex',justifyContent:'space-evenly',width:"100%"}}>
              
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                 <AppsIcon/>
              </IconButton>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <FavoriteBorderIcon/>
                </Badge>
              </IconButton>
               <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <LibraryBooksIcon/>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
     </div>
        </Toolbar>
      </AppBar>
      </Box>
    </React.Fragment>
  );
}