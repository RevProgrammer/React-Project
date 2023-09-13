import Header from "../Components/Header";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Stack } from "@mui/material";
import {
 
  CustomTypo,
  ImageCard
} from "../Components";
import { PopularOn, myCardData, AIAssistant, Movie } from "../data";
import Footer from '../Components/Footer/Footer';


function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div style={{ backgroundColor:"#111411" }} >
      <Header />
      {/* 5 cards */}
    
      <Stack m={12} mt={12} >
        <Box mt={10} >
          <Carousel responsive={responsive}>
            {myCardData.map((eachData, i) => (
              <Box key={i} display="flex" justifyContent="center" alignItems="center"  m={2} >
                <ImageCard
                  image={eachData.image}
                  // subtitle={eachData.subtitle}
                  description={eachData.description}
                  title={eachData.title}
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Stack>
      {/* </Carousel> */}
      {/* 6 cards */}
      <Stack m={12} >
      <CustomTypo type="normal" Bold mB={2}  pL={2}  color="white">
          {PopularOn[0].heading}
      </CustomTypo>
        <Box >
          <Carousel responsive={responsive2}>
            {PopularOn.map((eachData, i) => (
              <Box key={i} display="flex" justifyContent="center" alignItems="center" mt={12} m={2}>
                <ImageCard
                  image={eachData.image}
                  subtitle={eachData.subtitle}
                  description={eachData.description}
                  title={eachData.title}
                  
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Stack>


      <Stack m={12} >
      <CustomTypo type="normal" Bold mB={2}  pL={2} color="white">
          {AIAssistant[0].heading}
      </CustomTypo>
        <Box >
          <Carousel responsive={responsive2}>
            {AIAssistant.map((eachData, i) => (
              <Box key={i} display="flex" justifyContent="center" alignItems="center" mt={12} m={2}>
                <ImageCard
                  image={eachData.image}
                  subtitle={eachData.subtitle}
                  description={eachData.description}
                  title={eachData.title}
                  
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Stack>


      <Stack m={12} >
      <CustomTypo type="normal" Bold mB={2}  pL={2}  color="white">
          {Movie[0].heading}
      </CustomTypo>
        <Box >
          <Carousel responsive={responsive2}>
            {Movie.map((eachData, i) => (
              <Box key={i} display="flex" justifyContent="center" alignItems="center" mt={12} m={2}>
                <ImageCard
                  image={eachData.image}
                  subtitle={eachData.subtitle}
                  description={eachData.description}
                  title={eachData.title}
                  
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Stack>
      <Footer />




      {/* </Carousel> */}

      {/*  
      <Carousel responsive={responsive2}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </Carousel> */}

    </div>
  );
}

export default App;
