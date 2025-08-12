import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Import your images
import precisionImg from "../../../assets/Values/precision.png";
import automationImg from "../../../assets/Values/automation.png";
import technologyImg from "../../../assets/Values/technology.png";
import intelligenceImg from "../../../assets/Values/intelligence.png";

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
                borderRadius: "16px",
                padding: { xs: "16px", sm: "20px", md: "24px" },
                height: "100%",
                position: "relative",
                overflow: "hidden",
                minHeight: isMobile ? "130px" : isTablet ? "150px" : "160px",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    marginTop: isMobile ? "0" : "30px",
                }}
            >
                <Typography
                    sx={{
                        color: backgroundColor === "#2A46FF" || backgroundColor === "#F73950" ? "#fff" : "#2B275A",
                        fontFamily: '"delphin", sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: "69px", sm: "69px", md: "69px" },
                        zIndex: 2,
                        flex: 1,
                        opacity: 0.1,
                        position: "absolute",
                        top: -60,
                        left: -20
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: backgroundColor === "#2A46FF" || backgroundColor === "#F73950" ? "#fff" : "#2B275A",
                        fontFamily: '"Metropolis", sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: "18px", sm: "24px", md: "28px" },
                        zIndex: 2,
                        flex: 1,
                    }}
                >
                    {title}
                </Typography>

            </Box>

            <Box
                sx={{
                    height: "auto",
                    display: "flex",
                    justifyContent: imageAlign === "right" ? "flex-end" : "flex-start",
                    zIndex: 1,
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    minWidth: "50%"
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
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
                py: { xs: 5, md: 8 },
                px: { xs: 2, sm: 4, md: 8, lg: 12 },
            }}
        >
            <Box
                sx={{
                    maxWidth: "1600px",
                    mx: "auto",
                    display: "flex",
                    alignItems: "flex-start",
                }}
            >
                <Box
                    sx={{
                        mb: { xs: 4, md: 6 },
                        textAlign: isMobile ? "center" : "left",
                        display: isMobile ? "flex" : "block",
                        flexDirection: "column",
                        alignItems: isMobile ? "center" : "flex-start",
                        width: "50%",
                        minWidth: "50%",
                        marginTop: "2rem"
                    }}
                >
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: '"Metropolis", sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: "28px", sm: "36px", md: "48px" },
                            color: "#2B275A",
                            mb: 0.5,
                            position: "relative",
                            display: "inline-block",
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
                            fontSize: { xs: 32, sm: 42, md: 69 },
                            marginTop: "-50px",
                        }}
                    >
                        Values
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: '"Metropolis", sans-serif',
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "#6E6E80",
                            maxWidth: "450px",
                            mt: 2,
                        }}
                    >
                        Innovation guided by precision, automation, technology, and intelligence.
                    </Typography>
                </Box>

                {/* Custom Flexbox Grid Layout */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        margin: "-12px", // Negative margin to counteract the padding
                    }}
                >
                    {values.map((value, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {
                                    xs: "100%", // Full width on mobile
                                    sm: "50%", // Half width on tablets
                                    md: "50%", // Half width on desktop
                                },
                                padding: "12px", // This creates spacing between items
                                boxSizing: "border-box",
                            }}
                        >
                            <ValueCard
                                title={value.title}
                                image={value.image}
                                backgroundColor={value.backgroundColor}
                                imageAlign={index === 0 || index === 3 ? "right" : "right"}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default CoreValues;