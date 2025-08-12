import { Box, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: "100px",
        paddingBlock: "15px",
        position: "absolute",
        width: "100%", top: 0, left: 0, zIndex: 10,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "34.8px",
            fontWeight: 700,
            color: "#FFFFFF",
            fontFamily: "Kumbh Sans, sans-serif",
          }}
        >
          DREAMROOTS
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            color: "#FFFFFF",
            fontFamily: "Kumbh Sans, sans-serif",
            marginTop: "-10px",
          }}
        >
          TECHNOLOGIES
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            cursor: "pointer",
            border: "1.5px solid #fff",
            paddingInline: "30px",
            paddingBlock: "10px",
            borderRadius: "500px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#FFFFFF",
              fontFamily: "Kumbh Sans, sans-serif",
              textAlign: "center",
            }}
          >
            Get in Touch
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
