import React from 'react'
import Header from "../Components/Header";
import '../index.css';
import { Box, Stack } from "@mui/material";
import {
  CustomTypo,
} from "../Components";
import { Divider } from '@mui/material';
import { Typography, Button } from '@mui/material';
import Chatbox from '../Components/Chatbox';
import Grid from '@mui/material/Unstable_Grid2';
import Footer from '../Components/Footer/Footer'
const dividerStyle = {
  backgroundColor: 'white', // Change this to your desired color
  height: '3px',
  width: '420px',
  marginTop: "25px"
  // You can adjust the height if needed
};



const How_it_works = () => {
  return (
    <div style={{ backgroundColor: "#111411" }} >
      <Header />
      {/* <Grid item xs={12} lg={6}> */}
      <Stack m={10} >
        <CustomTypo type="normal" Bold pT={30} pL={7} fontSize={11} color="white">
          Chat With Your Favourite Characters
        </CustomTypo>
        <Typography fontSize={11} pt={1} pl={7} color="white">
          An AI-powered experience that allows you to chat with your favorite characters from<Divider />
          movies, TV shows, books, history, and more.<Divider />

          <Divider style={dividerStyle} xs={12} lg={6} />

        </Typography>

        <Button variant="outlined" sx={{
          mt: 4, fontSize: '13px', ml: 7
          , fontWeight: "500", borderRadius: "8px", borderColor: "#F2F1F3", color: "#F2F1F3",
          pt: "10px", pb: '10px', pl: '20px', pr: '20px', textTransform: "none",
          alignItems: "center"
        }}>Start Chat</Button>
        <CustomTypo type="normal" Bold pT={10} pL={7} fontSize={11} color="white">
          Choose Your Favourite Characters
        </CustomTypo>
        {/* </Grid> */}
        <div className="container1">
          <div className="form">
            <CustomTypo type="normal" Bold pT={20} pL={7} fontSize={11} color="white">
              Conversations That Feel Alive      </CustomTypo>
            <Typography fontSize={11} pl={7} pt={1} color="white">
              Every word, every response feels authentic, making you forget you're<Divider /> chatting with a fictional character.

              <Divider style={dividerStyle} />

            </Typography>


            <Button variant="outlined" sx={{
              mt: 4, fontSize: '13px', ml: 7
              , fontWeight: "500", borderRadius: "8px", borderColor: "#F2F1F3", color: "#F2F1F3",
              pt: "10px", pb: '10px', pl: '20px', pr: '20px', textTransform: "none",
              alignItems: "center"
            }}>Start Chat</Button>
          </div>
          <div className="image" style={{ marginTop: "250px" }}>
            <Chatbox />
          </div>
        </div>
        <br></br>
        

      </Stack>
      <Grid className="Chat" item lg={12} xs={6} >
        <Footer />
      </Grid>
    </div>
  )
}

export default How_it_works;