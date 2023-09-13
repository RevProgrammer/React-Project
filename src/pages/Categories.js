import React from 'react'
import Header from "../Components/Header";
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';

import {
 
    CustomTypo,
   // ImageCard
  } from "../Components";

const Categories = () => {
  return (
    <div  style={{ backgroundColor:"#111411", width:"100%" }}>     
    <Header />

    <CustomTypo type="normal" Bold pT={30} pL={20} color="white">
    Chat With Your Favourite Characters
     </CustomTypo>
     <Typography   pl={20} color="white">
      Categories
    <Divider /> 


     
     </Typography>

        


   
   </div>
  )
}

export default Categories