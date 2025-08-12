import { Box, Typography, useMediaQuery, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

// Import any images needed for the projects
import hardwareImg from "../../../assets/Build/hardware-project.png";
import softwareImg from "../../../assets/Build/software-project.png";
import musicImg from "../../../assets/Build/music-project.png";
import teamImg from "../../../assets/Build/team-project.png";
import yellowBackgroundMini from "../../../assets/Build/yellowBackgroundMini.png";
import greenGridImage from "../../../assets/Build/greenGrid.png";

const ProjectCard = ({ title, smallTitle, description, image, bgColor, imageWidth, imageTop, index, isMobile, isTablet }: any) => {
    // Define different color treatments based on card index/type
    const getCardStyle = () => {
        switch (index) {
            case 0: // Hardware - Orange
                return {
                    baseColor: "#FF8800",
                    overlayGradient: "linear-gradient(180deg, rgba(255,102,0,0.5) 0%, rgba(204,68,0,0.8) 100%)",
                    textColor: "#FFFFFF",
                };
            case 1: // Software - Blue
                return {
                    baseColor: "#4B89DC",
                    overlayGradient: "linear-gradient(180deg, rgba(52,73,149,0.5) 0%, rgba(41,58,128,0.8) 100%)",
                    textColor: "#FFFFFF",
                };
            case 2: // Music - Green
                return {
                    baseColor: "#2ECC71",
                    overlayGradient: "linear-gradient(180deg, rgba(24,145,68,0.5) 0%, rgba(20,128,64,0.8) 100%)",
                    textColor: "#FFFFFF",
                };
            case 3: // Team - Purple
                return {
                    baseColor: "#9F51FF",
                    overlayGradient: "linear-gradient(180deg, rgba(108,52,131,0.5) 0%, #38027A8d 100%)",
                    textColor: "#FFFFFF",
                };
            default:
                return {
                    baseColor: bgColor,
                    overlayGradient: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
                    textColor: "#FFFFFF",
                };
        }
    };

    const style = getCardStyle();

    // Adjust card dimensions based on screen size
    const cardHeight = isMobile ? 320 : isTablet ? 320 : 360; // Increased mobile height for full text
    const adjustedImageTop = isMobile ? -40 : imageTop;
    const adjustedImageWidth = isMobile ? "70%" : imageWidth;

    return (
        <Box
            sx={{
                position: "relative",
                height: cardHeight,
                width: "100%",
                borderRadius: { xs: "12px", md: "19.26px" },
            }}
        >
            {/* Base color background */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: style.baseColor,
                    zIndex: 1,
                    borderRadius: { xs: "12px", md: "19.26px" },
                }}
            />

            {/* Background texture/pattern for hardware card */}
            {index === 0 ? (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 2,
                        opacity: 0.7,
                        borderRadius: { xs: "12px", md: "19.26px" },
                    }}
                >
                    <img
                        src={yellowBackgroundMini}
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            mixBlendMode: "multiply", // This helps achieve the warmer tone
                            borderRadius: isMobile ? "12px" : "19.26px",
                            filter: "brightness(0.9)", // Slightly darken the texture
                        }}
                    />
                </Box>
            ) : index === 2 ? (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 2,
                        opacity: 0.7,
                        borderRadius: { xs: "12px", md: "19.26px" },
                    }}
                >
                    <img
                        src={greenGridImage}
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            mixBlendMode: "multiply", // This helps achieve the warmer tone
                            borderRadius: isMobile ? "12px" : "19.26px",
                            filter: "brightness(0.9)", // Slightly darken the texture
                        }}
                    />
                </Box>
            ) : null}

            {/* Overlay gradient for depth and richness */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: style.overlayGradient,
                    mixBlendMode: "soft-light", // Creates richer colors
                    zIndex: 3,
                    borderRadius: { xs: "12px", md: "19.26px" },
                }}
            />

            {/* Additional overlay with more intense color for the bottom area */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "50%", // Cover bottom half
                    background: `linear-gradient(to top, ${style.baseColor} 0%, rgba(0,0,0,0) 100%)`,
                    mixBlendMode: "multiply", // Creates darker bottom area
                    opacity: 0.6,
                    zIndex: 4,
                    borderRadius: { xs: "12px", md: "19.26px" },
                }}
            />

            {/* Main image */}
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    width: adjustedImageWidth,
                    height: "100%",
                    objectFit: "contain",
                    position: "absolute",
                    top: adjustedImageTop,
                    right: 0,
                    left: 0,
                    margin: "0 auto",
                    zIndex: 5,
                }}
            />

            {/* Fade overlay for team image */}
            {index === 3 && (
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: { xs: "30%", md: "40%" }, // Control how much of the bottom to fade
                        background: `linear-gradient(to top, #000 0%, rgba(0,0,0,0) 100%)`,
                        zIndex: 5, // Same z-index as the image
                        borderRadius: { xs: "12px", md: "19.26px" },
                        opacity: { xs: 0.8, md: 0.9 }, // Adjust this to control fade intensity
                    }}
                />
            )}

            {/* Text container with subtle gradient */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: { xs: 1.2, md: 1.5 },
                    paddingTop: { xs: 4, md: 6 }, // Extra padding at top for gradient
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                    zIndex: 6,
                    borderRadius: { xs: "12px", md: "19.26px" },
                }}
            >
                <Typography
                    sx={{
                        color: style.textColor,
                        fontFamily: '"Metropolis", sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: 18, sm: 22, md: 28 },
                        textShadow: "0px 1px 3px rgba(0,0,0,0.3)", // Add shadow for better text visibility
                    }}
                >
                    {title}
                </Typography>

                {smallTitle && (
                    <Typography
                        sx={{
                            color: style.textColor,
                            fontFamily: '"Cormorant", serif',
                            fontStyle: "italic",
                            fontSize: { xs: 14, sm: 18, md: 28 },
                            marginTop: { xs: "-10px", md: "-20px" },
                            textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
                            opacity: 0.9,
                        }}
                    >
                        {smallTitle}
                    </Typography>
                )}

                <Typography
                    sx={{
                        color: style.textColor,
                        fontFamily: '"Metropolis", sans-serif',
                        fontSize: { xs: 10, md: 10 },
                        mt: { xs: 0.5, md: 1 },
                        display: "block", // Always show on all devices
                        opacity: 0.9,
                        lineHeight: 1.4,
                        // Removed WebkitLineClamp limit for mobile
                        // ...(isMobile ? {} : {
                        //     overflow: "hidden",
                        //     textOverflow: "ellipsis",
                        //     WebkitLineClamp: 3,
                        //     WebkitBoxOrient: "vertical",
                        //     display: "-webkit-box",
                        // }),
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isLandscape = useMediaQuery('(orientation: landscape) and (max-width: 900px)');

    const projects = [
        {
            title: "Hardware",
            smallTitle: "Engineering",
            description:
                "Our expertise lies in crafting high-precision mechanical and electrical systems, engineered for both exceptional performance and lasting durability. We build the robust physical components that are the reliable backbone of advanced technology, from intricate gear assemblies to sophisticated robotic arms.",
            image: hardwareImg,
            bgColor: "#FFA500",
            imageWidth: "80%",
            imageTop: -80,
        },
        {
            title: "Software",
            smallTitle: "Solutions",
            description:
                "We design and develop custom software systems specifically to optimize your processes and help your business scale efficiently. Our solutions are tailored to integrate seamlessly, streamlining operations and providing intuitive, powerful tools for growth.",
            image: softwareImg,
            bgColor: "#4B89DC",
            imageWidth: "100%",
            imageTop: -80,
        },
        {
            title: "Music",
            smallTitle: "Instruments",
            description:
                "We create innovative musical instruments that beautifully merge traditional craftsmanship with modern technology. Our instruments offer unique and expressive experiences, blending classic tactile feel with advanced digital enhancements.",
            image: musicImg,
            bgColor: "#2ECC71",
            imageWidth: "100%",
            imageTop: -70,
        },
        {
            title: "Team",
            smallTitle: "Catalysts",
            description:
                "We design and develop custom software systems specifically to optimize your processes and help your business scale efficiently. Our solutions are tailored to integrate seamlessly, streamlining operations and providing intuitive, powerful tools for growth.",
            image: teamImg,
            bgColor: "#9B59B6",
            imageWidth: "80%",
            imageTop: -80,
        },
    ];

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                background: "#F2F7FB",
            }}
        >
            <Box
                sx={{
                    paddingInline: { xs: "16px", sm: "24px", md: "40px", lg: "100px" },
                    paddingBlock: { xs: 4, sm: 5, md: 6, lg: 10 },
                    maxWidth: "1800px",
                    margin: "0 auto",
                }}
            >
                {/* Section Title */}
                <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 5 } }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontFamily: '"Metropolis", sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: 24, sm: 32, md: 48 },
                            color: "#2B275A",
                            mb: 0.5,
                            lineHeight: 1.2,
                        }}
                    >
                        What We Build{" "}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: { xs: "-20px", sm: "-30px", md: "-48px" },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: '"Metropolis", sans-serif',
                                color: "#2B275A",
                                fontStyle: "italic",
                                fontWeight: 600,
                                fontSize: { xs: 24, sm: 32, md: 48 },
                            }}
                        >
                            &
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: '"Delphin", serif',
                                color: "#FE7B01",
                                fontStyle: "italic",
                                fontWeight: 600,
                                fontSize: { xs: 32, sm: 42, md: 69 },
                            }}
                        >
                            Deliver
                        </Typography>
                    </Box>
                </Box>

                {/* Projects section using flexbox */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : isLandscape ? "column" : "row",
                        flexWrap: "wrap",
                        gap: { xs: 2, sm: 3, md: 4 },
                        justifyContent: "center",
                    }}
                >
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: isMobile ? "100%" :
                                    isTablet ? "calc(50% - 12px)" :
                                        isLandscape ? "100%" :
                                            "calc(25% - 24px)",
                                flexGrow: 0,
                                flexShrink: 0,
                                marginBottom: { xs: 2, sm: 0 },
                            }}
                        >
                            <ProjectCard
                                title={project.title}
                                smallTitle={project.smallTitle}
                                description={project.description}
                                image={project.image}
                                bgColor={project.bgColor}
                                imageWidth={project.imageWidth}
                                imageTop={project.imageTop}
                                index={index}
                                isMobile={isMobile}
                                isTablet={isTablet}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default Projects;