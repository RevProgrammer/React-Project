import React from "react";
import { Box, Stack } from "@mui/material";
import CustomTypo from "../custom-typo/custom-typo";


const ImageCard = ({ image, subtitle, title, description }) => {
  return (
    <Stack maxWidth={200}>
      <Box>
        <img
          src={image}
          alt={image}
          width={"100%"}
          className="CrdImg"
          style={{borderRadius:'12px'}}
        />
      </Box>
      <CustomTypo Bold type="text" mT={-5} mL={1}  mB={1} fontFamily="Inter" color="white">
        {title}
      </CustomTypo>

      <Box className="subtitle" >
        <CustomTypo  type="text" mT={-2} mL={1} mB={1} color="white" FSize={11}>
          {subtitle}
        </CustomTypo>
      </Box>
     
      <CustomTypo Regular type="small" color="white">
        {description}
      </CustomTypo>
    </Stack>
  );
};

export default ImageCard;
