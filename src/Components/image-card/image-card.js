import React from "react";
import { Box, Stack } from "@mui/material";
import CustomTypo from "../custom-typo/custom-typo";

const ImageCard = ({ image, subtile, title, description }) => {
  return (
    <Stack maxWidth={200}>
      <Box>
        <img
          src={image}
          alt={image}
          width={"100%"}
          className="CrdImg"
        />
      </Box>
      <Box className="subtitle" >
        <CustomTypo Bold type="small" mB={1}>
          {subtile}
        </CustomTypo>
      </Box>
      <CustomTypo type="heading" Bold mB={2} fontFamily="Work Sans" color="white">
        {title}
      </CustomTypo>
      <CustomTypo Regular type="small" color="white">
        {description}
      </CustomTypo>
    </Stack>
  );
};

export default ImageCard;
