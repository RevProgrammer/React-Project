import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, FormControl,OutlinedInput, ToggleButton, Tab,Tabs } from "@mui/material";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import '../../index.css';


const Footer = () => {
  return (
    <Box
    component="footer"
    sx={{
      backgroundColor:"#000000",
      p: 6,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="#ADAEB5" gutterBottom>
            Join our maililing list
          </Typography>
          <Typography variant="body2" color="#ADAEB5">
         Be the first to now about all the updates.
          </Typography>
          <FormControl sx={{ width: '25ch' }}>
            <OutlinedInput placeholder="Email Address"  sx = {{border:"2px solid #ADAEB5", marginTop:"12px", color:"#ADAEB5",width:"235px","&:hover": {
            borderColor: "#ADAEB5",
          }, }}/>
        
          </FormControl>
       
          <ToggleButton sx= {{backgroundColor:"#57F287", "&:hover": {
            bgcolor: "#57F287",
          }, marginLeft:"241px", marginTop: "-91px",height:"57px" }}>
        <ArrowForwardOutlinedIcon />
        </ToggleButton>
        <Typography>
        {"Emails subject to Privacy Policy"}
        </Typography>
 
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="#ADAEB5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="#ADAEB5">
            123 Main Street, Anytown, USA
          </Typography>
          <Typography variant="body2" color="#ADAEB5">
            Email: info@example.com
          </Typography>
          <Typography variant="body2" color="#ADAEB5">
            Phone: +1 234 567 8901
          </Typography>
        </Grid> */}
      
      </Grid>






      <Grid className="social-icons" container item xs={12} lg={12}  sm={4}  mt={2}  width= {100}>
          <Typography variant="h6" color="#ADAEB5" gutterBottom>
           
          </Typography>
          <Link href="https://www.facebook.com/" color="#ADAEB5">
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            color="#ADAEB5"
            sx={{ }}
          >
            <Instagram />
          </Link>
          <Link href="https://www.twitter.com/" color="#ADAEB5">
            <Twitter />
          </Link>
        </Grid>
      <Box  mt={-3} mr={15}>
        <Grid container item xs={12} lg={12}>
        <Typography variant="body2" color="#ADAEB5" align="center" sx={{width:"100%"}}>
     
          <Link color="#ADAEB5" href="#" sx= {{ width:"100%", textDecoration:"none", float:"right"}}>
            {"©"}
          2017-{new Date().getFullYear()}
          {","}
          {"Powered By Social BU"}
            </Link>
        </Typography>
        </Grid>
      </Box>
      
  <Box  sx={{ borderBottom: 1, borderColor: 'divider' }} pr={0}> 
  <Grid container item xs={12} lg={12}>
  <Tabs  aria-label="basic tabs example" >
    <Tab label="Jobs" sx={{color:"#ADAEB5"}}/>
    <Tab label="FAQ"  sx={{color:"#ADAEB5"}}/>
    <Tab label="Terms" sx={{color:"#ADAEB5"}}/>
    <Tab label="Privacy" sx={{color:"#ADAEB5"}}/>
    <Tab label="Guidelines" sx={{color:"#ADAEB5"}}/>
  </Tabs>
  </Grid>
</Box>

    </Container>
  </Box>
  )
}

export default Footer;