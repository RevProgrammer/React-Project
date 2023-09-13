import React, { useState } from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, TextField, InputAdornment,Typography, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';





const DrawerComp = () => {
  const page1 =  ['Categories']; 
  const page2 =  ['How it works']; 
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
   <>
   <Drawer open={openDrawer}
    onClose = {()=> setOpenDrawer(false)}
    PaperProps={{
      sx: {
        backgroundColor: "#111411",
     
       
      }
    }}
   >
    <Divider  />
    <Typography sx = {{fontWeight: '700', fontSize: '1.5rem' , marginLeft:'70px', pt:5, color:"white"}}>
        <NavLink to="/" style = {{textDecoration:"none", color:"white"}}>Chatflex.io</NavLink>
    </Typography>

    <TextField
        id="search"
        type="search"
        label="Search"
        size="small"
        sx={{marginTop:"30px", marginLeft:"10px",width:"90%", backgroundColor:"white",   borderRadius:"12px" ,"&:hover": {
          borderRadius:"12px"
        },}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    <List>
    {

        
page1.map((page1, index1) => (
     <ListItemButton key = {index1} >
      {/* sx={{"&:hover": {
      backgroundColor:"#fff",
      
     
   },}} */}

   
        <ListItemIcon>
          <ListItemText sx= {{width:"200px",color:"#fff",paddingTop:"5px",textAlign:"center" }}>

    <NavLink to="/categories" style={{color:"white",textDecoration:"none","&:hover": {color:"#111411 !important"}}}>{ page1 }</NavLink>
          </ListItemText>
        </ListItemIcon>
      </ListItemButton>
))
}


      {

        
        page2.map((page2, index2) => (
             <ListItemButton key = {index2} >
              {/* sx={{"&:hover": {
              backgroundColor:"#fff",
              
             
           },}} */}

           
                <ListItemIcon>
                  <ListItemText sx= {{width:"200px",color:"#ffffff",paddingTop:"5px",textAlign:"center"}}>

            <NavLink to="/howitworks" style={{color:"white", textDecoration:"none"}}>{ page2 }</NavLink>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
        ))
      }
      <Button variant="outlined" sx={{mt:2, fontSize:'13px', ml:5 ,fontWeight:"500", borderRadius: "8px", borderColor:"#F2F1F3", color:"#F2F1F3", pt: "10px", pb:'10px', pl:'20.5px',textTransform :"none", alignItems:"center" }}>Create a Character</Button>
    </List>
   </Drawer>
   <IconButton onClick = {() => setOpenDrawer(!openDrawer)} sx={{color:"#fff"}}> 
   <MenuOutlinedIcon sx = {{ marginLeft:'200px !important', paddingTop:"5px"}} > 
      <MenuIcon  />
    </MenuOutlinedIcon>
  </IconButton>
   
   </>
  );
};

export default DrawerComp;
