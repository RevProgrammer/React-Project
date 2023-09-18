import * as React from "react";
import {
  Box,
  //TextField,
  //Button,
  Typography,
  Avatar,
 // Grid,
  Paper,

} from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";

const messages = [
  { id: 1, text: "Hey, What's up?", sender: "bot" },
  { id: 2, text: "emmm...", sender: "user" },
  { id: 3, text: "Don’t tell me you don’t know you’re here. What do you need?", sender: "bot" },
  { id: 4, text: "nothing", sender: "user" },
  { id: 5, text: "then why are you wasting my time?", sender: "bot" },
];

const ChatUI = () => {
//   const [input, setInput] = React.useState("");

//   const handleSend = () => {
//     if (input.trim() !== "") {
//       console.log(input);
//       setInput("");
//     }
//   };

//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };

  return (
    <>
    
  


    <Box sx={{ height: "55vh", display: "flex", flexDirection: "column", border:"2px solid", width:"450px", backgroundColor:"#121114"}}>
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2, }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} sx={{fontSize:"1px !important"}} />
        ))}
      </Box>
      {/* <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}> */}
          {/* <Grid item xs={10}>
            <TextField
              fullWidth
              placeholder="Type a message"
              value={input}
              onChange={handleInputChange}
            />
          </Grid> */}
          {/* <Grid item xs={2}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid> */}
        {/* </Grid>
      </Box> */}
    </Box>
    </>
  );
};



// const ChatOwner = () => {
//   return(
// <div>
//   <Avatar sx={{ "" : "#121114", marginBottom:"15px" }}>
//         { <img src={require("../assets/images/chat.png")} alt="Logo" /> }
//       </Avatar>
     

// </div>
//   );
// }

const Message = ({ message }) => {
    
  const isBot = message.sender === "bot";

return (
    
    <>
      {/* <Box
    sx={{
      display: "flex",
    
      alignItems: "center",
    }}
  >
     <Avatar sx={{"rgba(87, 242, 135, 0.33)" : "#121114" }}>
      {<img src={require("../assets/images/chat.png")} alt="Logo" />}
    </Avatar>
  <Paper
    variant="outlined"
    sx={{
      p: 1,
      backgroundColor: "rgba(87, 242, 135, 0.33)",
      borderRadius: "47.045px",marginLeft:"7px",
    }}
  >
    <Typography variant="body1"></Typography>
  </Paper>
</Box> */}


    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >

        
        <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
         <Avatar sx={{ bgcolor: isBot ? "rgba(87, 242, 135, 0.33)" : "#121114" }}>
          {isBot ? <img src={require("../assets/images/chat.png")} alt="Logo" /> : ""}
        </Avatar>
      <Paper
        variant="outlined"
        sx={{
          p: 1,
          backgroundColor: isBot ? "rgba(87, 242, 135, 0.33)" : "rgba(255, 255, 255, 0.30)",
          borderRadius: "47.045px",marginLeft:"7px",
        }}
      >
        <Typography variant="body1"  sx={{color:"white", fontSize:"12px" }}>{message.text}</Typography>
      </Paper>
    </Box>
    </Box>
    </>
  );
};

export default ChatUI;