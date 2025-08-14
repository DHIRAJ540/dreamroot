import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import starImg from "../../../assets/star.svg"

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: { xs: "20px", sm: "40px", md: "60px", lg: "100px" },
        paddingBlock: { xs: "12px", md: "15px" },
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      {/* Logo Section */}
      <Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "34.8px" },
              fontWeight: 700,
              color: "#FFFFFF",
              fontFamily: "Kumbh Sans, sans-serif",
              lineHeight: 1.1,
            }}
          >
            DREAMROOTS
          </Typography>
          <img src={starImg} alt="star" style={{
            position: "absolute",
            top: -10,
            right: -16,
            width: "20px",

          }} />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            fontWeight: 400,
            color: "#FFFFFF",
            fontFamily: "Kumbh Sans, sans-serif",
            marginTop: { xs: "-5px", sm: "-7px", md: "-10px" },
            letterSpacing: "0.5px",
          }}
        >
          TECHNOLOGIES
        </Typography>
      </Box>

      {/* Button - Hidden on mobile screens */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" }, // Hide on xs (mobile) screens
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            border: "1.5px solid #fff",
            paddingInline: { sm: "25px", md: "30px" },
            paddingBlock: { sm: "8px", md: "10px" },
            borderRadius: "500px",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.1)",
            },
          }}

          onClick={scrollToFooter}
        >
          <Typography
            sx={{
              fontSize: { sm: "13px", md: "14px" },
              fontWeight: 500,
              color: "#FFFFFF",
              fontFamily: "Kumbh Sans, sans-serif",
              textAlign: "center",
              whiteSpace: "nowrap",
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