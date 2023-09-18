import React from 'react'
import Header from "../Components/Header";
import '../index.css';
// import { Box, Stack } from "@mui/material";
import {
 
  CustomTypo,
 // ImageCard
} from "../Components";
import { Divider } from '@mui/material';
import { Typography, Button } from '@mui/material';
import Chatbox from '../Components/Chatbox';
import Grid from '@mui/material/Unstable_Grid2'; 
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Footer from '../Components/Footer/Footer'
// import useMediaQuery from '@mui/material/useMediaQuery';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


// const Wrapper = styled(Box)(({ theme }) => ({
//   background: "#1976d2",
//   height: "100vh",
//   [theme.breakpoints.down("md")]: {
//     background: "orange",
//   },
//   [theme.breakpoints.down("sm")]: {
//     background: "blue",
//   },
//   [theme.breakpoints.up("lg")]: {
//     background: "purple",
//   },
// }));

// import { PopularOn, myCardData, AIAssistant, Movie } from "../data";
// import Footer from '../Components/Footer/Footer';

const dividerStyle = {
  backgroundColor: 'white', // Change this to your desired color
  height: '3px',
  width:'420px',
  marginTop: "25px" 
       // You can adjust the height if needed
};

const How_it_works = () => {
  
// const isSmallScreen = useMediaQuery('(max-width:300px)');
//   return (
//     <Wrapper>
//       {isSmallScreen ? (
//      <Box  className='howitworks' sx={{ width: '100%', backgroundColor:"#111411" }}> 
//      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//      <Grid xs={6}>
   
 
//       <Header />
 
//       <CustomTypo type="normal" Bold pT={30} pL={7} fontSize={11} color="white">
//       Chat With Your Favourite Characters
//        </CustomTypo>
//        <Typography  fontSize={11}pt={1} pl={7} color="white">
//        An AI-powered experience that allows you to chat with your favorite characters from<Divider /> 
//         movies, TV shows, books, history, and more.<Divider />
 
//         <Divider style={dividerStyle} />
       
//        </Typography>
 
//        <Button variant="outlined" sx={{mt:4, fontSize:'13px', ml:7
//         ,fontWeight:"500", borderRadius: "8px", borderColor:"#F2F1F3", color:"#F2F1F3", 
//         pt: "10px", pb:'10px', pl:'20px',pr: '20px',textTransform :"none",
//          alignItems:"center" }}>Start Chat</Button>
 
 
       
//  <CustomTypo type="normal" Bold pT={10} pL={7} fontSize={11} color="white">
//       Choose Your Favourite Characters
//        </CustomTypo>
 
 
//        <CustomTypo type="normal" Bold pT={20} pL={7} fontSize={11} color="white">
//        Conversations That Feel Alive      </CustomTypo>
//        <Typography  fontSize={11} pl={7} pt={1} color="white">
//        Every word, every response feels authentic, making you forget you're<Divider /> chatting with a fictional character.
 
//         <Divider style={dividerStyle} />
       
//        </Typography>
 
//        <Button variant="outlined" sx={{mt:4, fontSize:'13px', ml:7
//         ,fontWeight:"500", borderRadius: "8px", borderColor:"#F2F1F3", color:"#F2F1F3", 
//         pt: "10px", pb:'10px', pl:'20px',pr: '20px',textTransform :"none",
//          alignItems:"center" }}>Start Chat</Button>
 
//          </Grid>

//          <Grid container xs={6} sx={{paddingTop:"850px"}}>
       
//            <Chatbox />
           
//          </Grid> 
//      </Grid>
//    </Box>
//       ) : (

return (
        <Box  className='howitworks' sx={{ backgroundColor:"#111411" }}> 
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} lg={6}>
      
    
         <Header />
    
         <CustomTypo type="normal" Bold pT={30} pL={7} fontSize={11} color="white">
         Chat With Your Favourite Characters
          </CustomTypo>
          <Typography  fontSize={11}pt={1} pl={7} color="white">
          An AI-powered experience that allows you to chat with your favorite characters from<Divider /> 
           movies, TV shows, books, history, and more.<Divider />
    
           <Divider style={dividerStyle}  xs={12} lg={6} />
          
          </Typography>
    
          <Button variant="outlined" sx={{mt:4, fontSize:'13px', ml:7
           ,fontWeight:"500", borderRadius: "8px", borderColor:"#F2F1F3", color:"#F2F1F3", 
           pt: "10px", pb:'10px', pl:'20px',pr: '20px',textTransform :"none",
            alignItems:"center" }}>Start Chat</Button>
    
    
          
    <CustomTypo type="normal" Bold pT={10} pL={7} fontSize={11} color="white">
         Choose Your Favourite Characters
          </CustomTypo>
    
    
          <CustomTypo type="normal" Bold pT={20} pL={7} fontSize={11} color="white">
          Conversations That Feel Alive      </CustomTypo>
          <Typography  fontSize={11} pl={7} pt={1} color="white">
          Every word, every response feels authentic, making you forget you're<Divider /> chatting with a fictional character.
    
           <Divider style={dividerStyle} />
          
          </Typography>
    
          <Button variant="outlined" sx={{mt:4, fontSize:'13px', ml:7
           ,fontWeight:"500", borderRadius: "8px", borderColor:"#F2F1F3", color:"#F2F1F3", 
           pt: "10px", pb:'10px', pl:'20px',pr: '20px',textTransform :"none",
            alignItems:"center" }}>Start Chat</Button>
    
            </Grid>

        <Grid container className="Chat" item lg={6} xs={12} >
     
         </Grid> 

      <Grid container className="Chat" item lg={6} xs={12} >
   
      </Grid> 


            <Grid container className="Chat" item lg={6} xs={12} pt={5} sx={{zIndex:"1",display:'flex', justifyContent:'center'}}>
              <Chatbox />
           </Grid> 
        </Grid>
        <Grid className="Chat" item  lg={12} xs={6} >
          <Footer />
        </Grid> 

      </Box>

    
)
}

export default How_it_works;