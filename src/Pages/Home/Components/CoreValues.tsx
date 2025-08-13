import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Import your images
import precisionImg from "../../../assets/Values/precision.png";
import automationImg from "../../../assets/Values/automation.png";
import technologyImg from "../../../assets/Values/technology.png";
import intelligenceImg from "../../../assets/Values/intelligence.png";
import glass from "../../../assets/Values/glass.png";

const ValueCard = ({ title, image, backgroundColor, imageAlign = "right" }: any) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: backgroundColor,
                borderRadius: { xs: "12px", md: "16px" },
                padding: { xs: "8px", sm: "14px", md: "24px" },
                height: "100%",
                position: "relative",
                overflow: "hidden",
                minHeight: isMobile ? "120px" : isTablet ? "150px" : "170px",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    marginTop: "30px",
                    width: "100%",
                }}
            >
                {/* Large title watermark - visible on all devices now */}
                <Typography
                    sx={{
                        color: backgroundColor === "#2A46FF" || backgroundColor === "#F73950" ? "#fff" : "#2B275A",
                        fontFamily: '"Delphin", serif',
                        fontWeight: 600,
                        fontSize: { xs: "40px", sm: "40px", md: "69px" },
                        zIndex: 1,
                        opacity: 0.1,
                        position: "absolute",
                        top: isMobile ? -40 : -60,
                        left: isMobile ? -25 : -20,
                        transform: isMobile ? "none" : "none", // Center on mobile
                        width: isMobile ? "100%" : "auto",
                        textAlign: isMobile ? "center" : "left",
                    }}
                >
                    {title}
                </Typography>

                {/* Main title */}
                <Typography
                    sx={{
                        color: backgroundColor === "#2A46FF" || backgroundColor === "#F73950" ? "#fff" : "#2B275A",
                        fontFamily: '"Metropolis", sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: "16px", sm: "16px", md: "28px" },
                        zIndex: 2,
                        position: "relative", // Ensure it's above the watermark
                    }}
                >
                    {title}
                </Typography>
            </Box>

            {/* Image container */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    zIndex: 1,
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        width: "90%",
                        height: "90%",
                        objectFit: "contain",
                        maxHeight: isMobile ? "60%" : "90%",
                        maxWidth: isMobile ? "60%" : "90%",
                    }}
                />
            </Box>

            {/* Glass overlay */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0.6,
                }}
            >
                <img src={glass} alt="glass" style={{ width: "100%", height: "100%" }} />
            </Box>
        </Box>
    );
};

const CoreValues = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const values = [
        {
            title: "Precision",
            image: precisionImg,
            backgroundColor: "#2A46FF",
        },
        {
            title: "Automation",
            image: automationImg,
            backgroundColor: "#ffffff",
        },
        {
            title: "Technology",
            image: technologyImg,
            backgroundColor: "#ffffff",
        },
        {
            title: "Intelligence",
            image: intelligenceImg,
            backgroundColor: "#F73950",
        },
    ];

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                background: "#F2F7FB",
                py: { xs: 4, md: 8 },
                px: { xs: 2, sm: 4, md: 8, lg: 12 },
            }}
        >
            <Box
                sx={{
                    maxWidth: "1600px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "flex-start" },
                }}
            >
                {/* Title and description section */}
                <Box
                    sx={{
                        mb: { xs: 3, md: 0 },
                        textAlign: { xs: "center", md: "left" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        width: { xs: "100%", md: "40%" },
                        marginTop: { xs: "0", md: "2rem" },
                        marginRight: { xs: 0, md: "5%" },
                    }}
                >
                    <Box sx={{ position: "relative", textAlign: { xs: "center", md: "left" }, width: "100%" }}>
                        <Typography
                            component="h2"
                            sx={{
                                fontFamily: '"Metropolis", sans-serif',
                                fontWeight: 600,
                                fontSize: { xs: "28px", sm: "36px", md: "48px" },
                                color: "#2B275A",
                                mb: 0.5,
                                position: "relative",
                                display: { xs: "block", md: "inline-block" },
                                width: "100%",
                            }}
                        >
                            Our Core{" "}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"Delphin", serif',
                                color: "#FE7B01",
                                fontStyle: "italic",
                                fontWeight: 600,
                                fontSize: { xs: 36, sm: 42, md: 69 },
                                marginTop: { xs: "-10px", md: "-50px" },
                                display: "block",
                                width: "100%",
                            }}
                        >
                            Values
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: '"Metropolis", sans-serif',
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "#6E6E80",
                            maxWidth: { xs: "90%", md: "450px" },
                            mt: { xs: 1, md: 2 },
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        Innovation guided by precision, automation, technology, and intelligence.
                    </Typography>
                </Box>

                {/* Cards grid section */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: "16px", md: "24px" }, // Use gap instead of margin for better spacing
                        width: { xs: "100%", md: "55%" },
                        marginTop: { xs: 2, md: 0 },
                        justifyContent: { xs: "center", md: "flex-start" },
                    }}
                >
                    {values.map((value, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: "calc(50% - 8px)", md: "calc(50% - 12px)" },
                                boxSizing: "border-box",
                            }}
                        >
                            <ValueCard
                                title={value.title}
                                image={value.image}
                                backgroundColor={value.backgroundColor}
                                imageAlign="right"
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default CoreValues;