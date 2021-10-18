import React from 'react'
import MenuDrawer from './MenuDrawer'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// style for nav bar
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha('#2f3640', 0.15),
    '&:hover': {
      backgroundColor: alpha('#dcdde1', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '500px',
    },
    
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '500px',
      },
      
    },
  }));  
//
export default function Navbar() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = open => setState(open);
  const openDrawer=(e)=>{
           toggleDrawer(true);
  }

    return (
      <Box sx={{ flexGrow: 1 }}  >
        
        <AppBar position={window.screen.availWidth>899?"fixed":"static"} style={{backgroundColor:'#fff',color:'black',zIndex:1}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: 'block' } }}
            >
             <img src="/homepage/nogozologo.jpg" alt="NOGOZO" style={{width:110,height:70}} />
            </Typography>
             <Box sx={{ display: { sm: 'none',xs: 'none', md: 'flex' } }}>

<Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        />
    </Search>
</Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                 <ShoppingCartIcon/>
                </Badge>
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
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
             <Badge badgeContent={17} color="error">
                 <ShoppingCartIcon/>
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <MenuDrawer toggleDrawer={toggleDrawer} state={state}/>
        <Box sx={{ display: { sm: 'flex', md: 'none' } }}>

        <Search style={{margin:10,marginInline:16,width:'92%',position:'fixed',zIndex:1}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                style={{width:'92%'}}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Box>
      </Box>
      )
}
