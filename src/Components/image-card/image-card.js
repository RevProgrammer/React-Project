import React from "react";
import { Box, Stack } from "@mui/material";
import CustomTypo from "../custom-typo/custom-typo";
import '../../index.css'


const ImageCard = ({ image, subtitle, title, description }) => {
  return (
    <Stack maxWidth={200} className="Cards">
      <Box className="Card">
      <Box>
        <img
          src={image}
          alt={image}
          width={"90%"}
          className="CrdImg"
          style={{borderTopLeftRadius:'12px', borderTopRightRadius:'12px',borderBottomLeftRadius:'12px', borderBottomRightRadius:"12px"}}
        />
      </Box>
      <CustomTypo Bold type="text" mT={-5} mL={1}  mB={1} color="white">
        {title}
      </CustomTypo>

      <Box className="subtitle" >
        <CustomTypo  type="text" mT={-2} mL={1} mB={1}  color="white" FSize={11}>
          {subtitle}
        </CustomTypo>
      </Box>
     
      <CustomTypo Regular type="small" color="white">
        {description}
      </CustomTypo>
      </Box>
    </Stack>
  );
};

export default ImageCard;
