import React, { useState } from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


const DrawerComp = () => {
  
  const pages =  ['Categories','How it works']; 
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
   <>
   <Drawer open={openDrawer}
   onClose = {()=> setOpenDrawer(false)}
   >
    <Divider />
    <List>
      {
        pages.map((page, index) => (
             <ListItemButton key = {index}>
                <ListItemIcon>
                  <ListItemText>
                    { page }
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
        ))
      }
      
    </List>
   </Drawer>
   <IconButton onClick = {() => setOpenDrawer(!openDrawer)}>
      <MenuIcon sx = {{color: 'white', marginLeft:'auto !important', pt:5}} />
  </IconButton>
   
   </>
  );
};

export default DrawerComp;
