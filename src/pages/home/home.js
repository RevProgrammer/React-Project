import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CustomButton,
  CustomDivider,
  CustomTypo,
  HoverCard,
} from "../../component";
import { style } from "./style";
import {
  CardBannerImage,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  ControlImage,
  BrandActivations,
} from "../../assets";
import { cardData, myCardData } from "./data";
import { ImageCard } from "../../component";

const Home = () => {
  const responsive = {
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
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      {/* Logos  */}

      {/* images cards */}
      {/* <Stack justifyContent="center" alignItems="Center">
        <Box width={"75%"}>
          <CustomDivider />
        </Box>
      </Stack> */}
      <CustomTypo type="heading" Bold mB={2} mT={4} pL={2} fontFamily="Work Sans">
        Sports
      </CustomTypo>
      <Box>
        <Carousel responsive={responsive}>
          {myCardData.map((eachData, i) => (
            <Box key={i} display="flex" justifyContent="center" alignItems="center">
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
      {/* images cards */}
      {/* images cards */}
      <Stack justifyContent="center" alignItems="Center">
        <Box width={"75%"}>
          <CustomDivider />
        </Box>
      </Stack>
      <CustomTypo type="heading" Bold mB={2} mT={4} pL={2} fontFamily="Work Sans">
        Technology
      </CustomTypo>
      <Box>
        <Carousel responsive={responsive}>
          {myCardData.map((eachData, i) => (
            <Box key={i} display="flex" justifyContent="center" alignItems="center">
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
      {/* images cards */}
      {/* images cards */}
      <Stack justifyContent="center" alignItems="Center">
        <Box width={"75%"}>
          <CustomDivider />
        </Box>
      </Stack>
      <CustomTypo type="heading" Bold mB={2} mT={4} pL={2} fontFamily="Work Sans">
        Dramas
      </CustomTypo>
      <Box>
        <Carousel responsive={responsive}>
          {myCardData.map((eachData, i) => (
            <Box key={i} display="flex" justifyContent="center" alignItems="center">
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
      {/* images cards */}
      {/* images cards */}
      <Stack justifyContent="center" alignItems="Center">
        <Box width={"75%"}>
          <CustomDivider />
        </Box>
      </Stack>
      <CustomTypo type="heading" Bold mB={2} mT={4} pL={2} fontFamily="Work Sans">
        Cricket
      </CustomTypo>
      <Box>
        <Carousel responsive={responsive}>
          {myCardData.map((eachData, i) => (
            <Box key={i} display="flex" justifyContent="center" alignItems="center">
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
      {/* images cards */}
     

    </>
  );
};

const Frame = [Frame3, Frame6, Frame1, Frame4, Frame2, Frame5];
export default Home;
