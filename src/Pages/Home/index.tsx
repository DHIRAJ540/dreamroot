import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Components/Navbar";
import HeaderMain from "./Components/HeaderMain";
import headerYellowImg from "../../assets/Header/headreYellow.svg";
import headerWaveImg from "../../assets/Header/headerWave.svg";
import WhatWeBuild from "./Components/WhatWeBuild";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        background: "linear-gradient(180deg, #FF8412 38%, #854000 100%)",
        overflow: "hidden",
        paddingBottom: "100px",
      }}
    >
      {/* Yellow background image */}
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${headerYellowImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          opacity: 0.8,
        }}
      />

      {/* Orange overlay gradient from Figma */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(90deg, #FF8412 38%, #FFAF12 100%)",
          zIndex: 2,
          opacity: 0.7,
          mixBlendMode: "color",
        }}
      />

      {/* Wave as an actual image with correct blend mode */}
      <Box
        component="img"
        src={headerWaveImg}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          zIndex: 3,
          opacity: 1,
          mixBlendMode: "soft-light",
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 4, // Increased z-index to be above all background elements
          width: "100%",
          height: "100%",
        }}
      >
        <Navbar />
        <HeaderMain />
      </Box>

      {/* Additional yellow-orange wave gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "40%", // Positioned to match the Figma design
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, transparent 0%, rgba(255, 175, 18, 0.6) 60%, #ff1212e0 100%)",
          zIndex: 2,
          opacity: 0.5,
          mixBlendMode: "normal",
        }}
      />
    </Box>
  );
};

export default Home;
