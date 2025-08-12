import { Box, Typography, Card, CardContent, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import settingsIcon from "../../../assets/Build/settings.svg";
import musicIcon from "../../../assets/Build/music.svg";
import teamIcon from "../../../assets/Build/team.svg";
import codeIcon from "../../../assets/Build/code.svg";

const ServiceCard = ({ title, description, icon, bgColor, textColor }: any) => {
    return (
        <Card
            sx={{
                bgcolor: bgColor,
                height: "100%",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.3s ease-in-out",
                borderRadius: "0px",
            }}
        >
            <CardContent sx={{ p: 3 }}>
                <Box sx={{ mb: 2 }}>{icon}</Box>
                <Typography
                    sx={{
                        mb: 1,
                        color: textColor || "inherit",
                        fontFamily: '"Cormorant", sans-serif',
                        fontWeight: 500,
                        fontSize: 32,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{ color: textColor ? textColor : "text.secondary", fontFamily: '"Metropolis", sans-serif', fontSize: 12 }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

const WhatWeBuild = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const services = [
        {
            title: "Hardware Engineering",
            description: "Designing and building high-performance, practical solutions for complex applications.",
            bgColor: "#FFFFFF",
            icon: (
                <Box
                    sx={{
                        width: 72,
                        height: 72,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#FFF8F1",
                    }}
                >
                    <img src={settingsIcon} alt="" />
                </Box>
            ),
        },
        {
            title: "Software Solution",
            description: "Developing intelligent, scalable software to power successful data strategies.",
            bgColor: "#272152",
            textColor: "#FFFFFF",
            icon: (
                <Box
                    sx={{
                        width: 72,
                        height: 72,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#FFFFFF0D",
                    }}
                >
                    <img src={codeIcon} alt="" />
                </Box>
            ),
        },
        {
            title: "Music Instruments",
            description: "Creating precision-crafted instruments that blend technology with artistry.",
            bgColor: "#FFFFFF",
            icon: (
                <Box
                    sx={{
                        width: 72,
                        height: 72,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "#FFF8F1",
                    }}
                >
                    <img src={musicIcon} alt="" />
                </Box>
            ),
        },
        {
            title: "Team Catalysts",
            description: "Driving collaboration and innovation to turn bold ideas into reality.",
            bgColor: "#F17623",
            textColor: "#FFFFFF",
            icon: (
                <Box
                    sx={{
                        width: 72,
                        height: 72,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        bgcolor: "#FFFFFF1A",
                    }}
                >
                    <img src={teamIcon} alt="" />
                </Box>
            ),
        },
    ];

    return (
        <Box>
            {/* Services section using flexbox */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    flexWrap: "wrap",
                }}
            >
                {services.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: isMobile ? "100%" : "calc(25% - 18px)",
                            minWidth: isMobile ? "auto" : "200px",
                            flexGrow: 1,
                        }}
                    >
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            bgColor={service.bgColor}
                            textColor={service.textColor}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default WhatWeBuild;
