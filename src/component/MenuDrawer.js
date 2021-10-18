import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ContactsSharpIcon from '@mui/icons-material/ContactsSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FaceIcon from '@mui/icons-material/Face';
import BugReportIcon from '@mui/icons-material/BugReport';
import StarsIcon from '@mui/icons-material/Stars';
import DrawerItem from './DrawerItem';
export default function MenuDrawer(props) {
  const list = () => (
    <Box
      sx={{ width:250 }}
      role="presentation"
      onClick={()=>props.toggleDrawer(false)}
      onKeyDown={()=>props.toggleDrawer(false)}
    >
      <img src="/homepage/nogozologo.jpg" alt="NOGOZO" style={{width:220,height:150}} />
      <Divider/>
      <List>
         <DrawerItem icon={<ContactsSharpIcon/>} text="Profile" />
         <DrawerItem icon={<LocationOnIcon/>} text="Address" />
         <DrawerItem icon={<LocalShippingIcon/>} text="Orders" />
      </List>
      <Divider />
      <List>
         <DrawerItem icon={<CollectionsBookmarkIcon/>} text="Coupons" />
         <DrawerItem icon={<FaceIcon/>} text="Favourites" />
      </List>
      <Divider />
      <List>
         <DrawerItem icon={<ThumbUpAltIcon/>} text="Share App" />
         <DrawerItem icon={<HelpCenterIcon/>} text="Help" />
         <DrawerItem icon={<BugReportIcon/>} text="Report an issue" />
         <DrawerItem icon={<StarsIcon/>} text="Rate App" />
      </List>
    </Box>
  );

  return (
    <div>
          <SwipeableDrawer
            anchor="left"
            open={props.state}
            onClose={()=>props.toggleDrawer(false)}
            onOpen={()=>props.toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
    </div>
  );
}
