import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import motorImage from "../../../assets/Header/headerMotor.png";
import Reviews from "./Reviews";
import waveImg from "../../../assets/Header/wave.svg";

const HeaderMain = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

    return (
        <Box
            sx={{
                paddingTop: { xs: "100px", sm: "120px", md: "150px", lg: "200px" },
                overflow: "hidden",
                position: "relative", // Added for positioning the wave element
            }}
        >
            {/* Wave image - placed at a lower z-index so components appear above it */}
            <Box
                component="img"
                src={waveImg}
                alt="wave"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: "100%",
                    height: "auto",
                    transform: "translateY(-50%)", // Adjust this value to position the wave properly
                    zIndex: 1,
                    pointerEvents: "none", // Allows clicks to pass through
                    mixBlendMode: "multiply", // This will help the white wave take on the orange background color
                    opacity: 0.6, // Adjust opacity as needed
                }}
            />

            {/* Content Wrapper - higher z-index to stay above wave */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2, // Higher than the wave
                }}
            >
                {/* Main content area */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "center" },
                        justifyContent: "space-between",
                        paddingInline: { xs: "20px", sm: "40px", md: "60px", lg: "100px" },
                        paddingBlock: { xs: "10px", md: "15px" },
                        gap: { xs: 4, md: 2 },
                    }}
                >
                    {/* Left Content */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "60%" },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", md: "flex-start" },
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        <Box
                            sx={{
                                background: "#2B275A",
                                paddingInline: { xs: "20px", sm: "30px" },
                                paddingBlock: { xs: "8px", sm: "10px" },
                                borderRadius: "500px",
                                width: "max-content",
                                marginBottom: { xs: 3, md: 4 },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", sm: "14px" },
                                    fontWeight: 500,
                                    color: "#FFFFFF",
                                    fontFamily: '"Metropolis", sans-serif',
                                    whiteSpace: { xs: "normal", sm: "nowrap" },
                                }}
                            >
                                Innovation • Optimize • Advance
                            </Typography>
                        </Box>

                        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: "28px", sm: "36px", md: "42px", lg: "51px" },
                                    fontWeight: 500,
                                    color: "#FFFFFF",
                                    fontFamily: '"Metropolis", sans-serif',
                                    lineHeight: 1.2,
                                }}
                            >
                                Engineering The Future Of
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: '"Delphin", sans-serif',
                                    fontSize: { xs: "50px", sm: "70px", md: "85px", lg: "102px" },
                                    color: { xs: "#FFE522", sm: "#FFE522", md: "#FF8412", },
                                    marginTop: { xs: "-20px", md: "-30px", },
                                    fontWeight: 600,
                                    lineHeight: 1.1,
                                }}
                            >
                                Possibilities
                            </Typography>
                        </Box>

                        <Button
                            sx={{
                                paddingInline: { xs: "25px", sm: "35px" },
                                paddingBlock: { xs: "12px", sm: "20px" },
                                borderRadius: "500px",
                                background: "#fff",
                                minWidth: "max-content",
                                mb: { xs: 4, md: 0 },
                                "&:hover": {
                                    background: "#f2f2f2",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "13px", sm: "14px" },
                                    fontWeight: 700,
                                    color: "#000",
                                    fontFamily: '"Metropolis", sans-serif',
                                    textTransform: "none",
                                }}
                            >
                                Get in Touch
                            </Typography>
                        </Button>
                    </Box>

                    {/* Right Content - Motor Image */}
                    <Box
                        sx={{
                            width: { xs: "90%", sm: "70%", md: "40%" },
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-end" },
                            maxWidth: { xs: "400px", md: "none" },
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={motorImage}
                                alt="motor"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: "100%",
                                    objectFit: "contain"
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Reviews Section */}
                <Box
                    sx={{
                        mt: { xs: 2, md: 0 },
                    }}
                >
                    <Reviews />
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderMain;