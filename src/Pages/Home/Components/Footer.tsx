import React from "react";
import { Box, Container, Typography, Button, useMediaQuery, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Import your app store images
import appStoreImg from "../../../assets/Footer/appleStore.png";
import googlePlayImg from "../../../assets/Footer/googlePlay.png";
import wave1Svg from "../../../assets/Footer/wave1.svg";

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            sx={{
                background: "#2B275A",
                color: "white",
                padding: { xs: "40px 20px", sm: "40px 30px", md: "60px 40px" },
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Wave SVG overlay - white with 3% opacity */}
            <Box
                component="img"
                src={wave1Svg}
                alt="wave"
                sx={{
                    position: "absolute",

                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "auto",
                    opacity: .8, // 3% opacity as specified
                    zIndex: 1,
                    pointerEvents: "none", // Allows clicks to pass through

                }}
            />

            {/* Background gradient effect */}
            <Box
                sx={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: { xs: "100%", md: "50%" },
                    height: "100%",
                    background: "radial-gradient(circle at top right, rgba(83, 70, 178, 0.3), transparent 70%)",
                    zIndex: 1,
                }}
            />

            <Box
                maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 2, // Ensure content is above the wave
                    borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
                    paddingBottom: { xs: "40px", sm: "60px", md: "80px" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "flex-end" },
                    }}
                >
                    {/* Left section */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "60%" },
                            mb: { xs: 4, md: 0 },
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#FF9C40",
                                fontSize: { xs: "16px", md: "24px" },
                                fontWeight: 500,
                                mb: { xs: 1, md: 1.5 },
                                fontFamily: '"Metropolis", sans-serif',
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            About
                        </Typography>

                        <Box >
                            <Typography
                                sx={{
                                    fontSize: { xs: "24px", md: "44px" },
                                    fontWeight: 700,
                                    fontFamily: "Kumbh Sans, sans-serif",
                                    lineHeight: 1,
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                DREAMROOTS
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "25px" },
                                fontWeight: 400,
                                fontFamily: "Kumbh Sans, sans-serif",
                                color: "#fff",
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            TECHNOLOGIES
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "21px" },
                                maxWidth: { xs: "100%", md: "80%" },
                                color: "#fff",
                                fontFamily: '"Metropolis", sans-serif',
                                lineHeight: 1.2,
                                marginTop: { xs: "14px", md: "20px" },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </Typography>
                    </Box>

                    {/* Right section */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "40%" },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "flex-start", md: "flex-end" },
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                background: "#FE7B01",
                                borderRadius: "30px",
                                padding: "10px 25px",
                                fontSize: "14px",
                                fontWeight: 500,
                                textTransform: "none",
                                mb: { xs: 3, md: 4 },
                                alignSelf: { xs: "center", md: "flex-end" },
                                "&:hover": {
                                    background: "#e67a00",
                                },
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            Available Soon On
                        </Button>

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                mb: { xs: 3, md: 0 },
                                alignSelf: { xs: "center", md: "flex-end" },
                            }}
                        >
                            <Box
                                component="a"
                                href="#"
                                sx={{
                                    display: "block",
                                    width: { xs: "120px", md: "140px" },
                                    height: "auto",
                                }}
                            >
                                <img src={appStoreImg} alt="Download on App Store" style={{ width: "100%", height: "auto" }} />
                            </Box>
                            <Box
                                component="a"
                                href="#"
                                sx={{
                                    display: "block",
                                    width: { xs: "120px", md: "140px" },
                                    height: "auto",
                                }}
                            >
                                <img src={googlePlayImg} alt="Get it on Google Play" style={{ width: "100%", height: "auto" }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Mobile-only address and contact section */}
                {/* {isMobile && (
                    <Box sx={{ mt: 3 }}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 500,
                                mb: 1.5,
                                fontFamily: '"Metropolis", sans-serif',
                                textAlign: "center",
                            }}
                        >
                            Address
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                color: "#fff",
                                fontFamily: '"Metropolis", sans-serif',
                                textAlign: "center",
                                mb: 3,
                            }}
                        >
                            10th Main, 1st Floor, Indira Nagar, Bangalore - 560037,
                            <br />
                            Karnataka, India
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                                mb: 1.5,
                                fontFamily: '"Metropolis", sans-serif',
                                textAlign: "center",
                            }}
                        >
                            UDYAM Number
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "#CCCCCC",
                                mb: 2,
                                fontFamily: '"Metropolis", sans-serif',
                                textAlign: "center",
                            }}
                        >
                            KR-03-0566877
                        </Typography>
                        <Typography
                            component={Link}
                            href="mailto:Team@Dreamroots.Fun"
                            sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "#CCCCCC",
                                textDecoration: "none",
                                display: "block",
                                textAlign: "center",
                                "&:hover": {
                                    textDecoration: "underline",
                                    color: "#FF8800",
                                },
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            Team@Dreamroots.Fun
                        </Typography>
                    </Box>
                )} */}
            </Box>

            {!isMobile && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        position: "relative",
                        zIndex: 2, // Ensure content is above the wave
                        paddingTop: "30px", // Add some space between the divider and content
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                fontWeight: 500,
                                mb: 1.5,
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            Address
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                lineHeight: 1.3,
                                color: "#fff",
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            10th Main, 1st Floor, Indira Nagar, Bangalore - 560037,
                            <br />
                            Karnataka, India
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mt: "auto",
                            pt: 4,
                            textAlign: "right",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                                mb: 1.5,
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            UDYAM Number
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "#fff",
                                mb: 2,
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            KR-03-0566877
                        </Typography>
                        <Typography
                            component={Link}
                            href="mailto:Team@Dreamroots.Fun"
                            sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "#fff",
                                "&:hover": {
                                    textDecoration: "underline",
                                    color: "#FF8800",
                                },
                                fontFamily: '"Metropolis", sans-serif',
                                textDecoration: "underline",
                            }}
                        >
                            Team@Dreamroots.Fun
                        </Typography>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Footer;