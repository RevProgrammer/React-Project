import React from "react";
import { Typography } from "@mui/material";

export default function CustomTypo({
  children,
  FSize = 16,
  pT = 0,
  pB = 0,
  pR = 0,
  pL = 0,
  mT = 0,
  mB = 0,
  mR = 0,
  mL = 0,
  color = "",
  tAlign = "left",
  Bold = false,
  SemiBold = false,
  Regular = true,
  Medium = false,
  ExtraBold = false,
  type,
  gutterBottom,
  variantType,
  fontFamily,
}) {
  return (
    <Typography
      gutterBottom={gutterBottom}
      variant={
        variantType
          ? variantType
          : type === "heading"
          ? "h2"
          : type === "normal"
          ? "h4"
          : type === "regular"
          ? "body1"
          : type === "hero"
          ? "h1"
          : type === "1xl"
          ? "h2"
          : "body1"
      }
      sx={{
        fontSize: FSize,
        fontFamily: fontFamily,
        paddingTop: pT,
        paddingBottom: pB,
        paddingRight: pR,
        paddingLeft: pL,
        marginTop: mT,
        marginBottom: mB,
        marginRight: mR,
        marginLeft: mL,
        color: color,
        textAlign: tAlign,
        ...(Regular && { fontWeight: "Regular" }),
        ...(SemiBold && { fontWeight: "SemiBold" }),
        ...(Bold && { fontWeight: "Bold" }),
        ...(Medium && { fontWeight: "Medium" }),
        ...(ExtraBold && { fontWeight: "ExtraBold" }),
        ...(type === "hero" && {
          // fontSize: {
          //   xs: "38px",
          //   md: "40px",
          //   lg: "48px",
          // },
          fontSize: "clamp(1.4rem, 1.2rem + 1.5vw, 3rem)",
        }),
        ...(type === "1xl" && {
          // fontSize: {
          //   xs: "25px",
          //   md: "32px",
          //   lg: "40px",
          // },
          fontSize: "clamp(1.3rem, 1.3rem + 1vw, 2.75rem)",
        }),
        ...(type === "heading" && {
          // fontSize: {
          //   xs: "22px",
          //   md: "25px",
          //   lg: "32px",
          // },
          fontSize: "clamp(1.2rem, 1.3rem + 1vw, 2rem)",
        }),
        ...(type === "normal" && {
          // fontSize: {
          //   xs: "16px",
          //   md: "18px",
          //   lg: "22px",
          // },
          fontSize: "clamp(1rem, 0.925rem + 0.375vw, 1.375rem)",
        }),
        ...(type === "medium" && {
          // fontSize: {
          //   xs: "17px",
          //   md: "19px",
          //   lg: "25px",
          // },
          fontSize:
            "clamp(1.1rem, 1.0074rem + 0.46299999999999986vw, 1.563rem)",
        }),
        ...(type === "regular" && {
          // fontSize: {
          //   xs: "16px",
          //   md: "18px",
          //   lg: "20px",
          // },
          fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.25rem)",
        }),
        ...(type === "small" && {
          // fontSize: {
          //   xs: "14px",
          //   md: "15px",
          //   lg: "16px",
          // },
          fontSize: "clamp(1rem, 0.974rem + 0.1299999999999999vw, 1.13rem)",
        }),
      }}
    >
      {children}
    </Typography>
  );
}
