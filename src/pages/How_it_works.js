import React from 'react'
import Header from "../Components/Header";
// import { Box, Stack } from "@mui/material";
import {
 
  CustomTypo,
 // ImageCard
} from "../Components";
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';

// import { PopularOn, myCardData, AIAssistant, Movie } from "../data";
// import Footer from '../Components/Footer/Footer';

const dividerStyle = {
  backgroundColor: 'white', // Change this to your desired color
  height: '3px',
  width:'650px'
       // You can adjust the height if needed
};

const How_it_works = () => {
  return (
    <div  style={{ backgroundColor:"#111411" }}>     
     <Header />

     <CustomTypo type="normal" Bold pT={30} pL={20} color="white">
     Chat With Your Favourite Characters
      </CustomTypo>
      <Typography   pl={20} color="white">
      An AI-powered experience that allows you to chat with your favorite characters from<Divider /> 
       movies, TV shows, books, history, and more.<Divider />

       <Divider style={dividerStyle} />
      
      </Typography>

         


    
    </div>
  )
}

export default How_it_works;