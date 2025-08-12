import { Box, Typography } from "@mui/material";
import motorImage from "../../../assets/Header/headerMotor.png"
import Reviews from "./Reviews";

const HeaderMain = () => {
    return (
        <Box
            sx={{

                paddingTop: "200px",

            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingInline: "100px",
                    paddingBlock: "15px",
                }}
            >
                <Box>
                    <Box
                        sx={{
                            background: "#2B275A",
                            paddingInline: "30px",
                            paddingBlock: "10px",
                            borderRadius: "500px",
                            width: "max-content",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#FFFFFF",
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            Innovation • Optimize • Advance
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: "51px",
                                fontWeight: 500,
                                color: "#FFFFFF",
                                fontFamily: '"Metropolis", sans-serif',

                            }}
                        >
                            Engineering The Future Of
                        </Typography>
                        <Typography

                            sx={{
                                fontFamily: '"Delphin", sans-serif',
                                fontSize: "102px",
                                color: "#FE7B01",
                                marginTop: "-60px",
                                fontWeight: 600,
                            }}
                        >
                            Possibilities
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            paddingInline: "35px",
                            paddingBlock: "20px",
                            borderRadius: "500px",
                            background: "#fff",
                            width: "max-content",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#000",
                                fontFamily: '"Metropolis", sans-serif',
                            }}
                        >
                            Get in Touch
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "40%"
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                        }}
                    >
                        <img src={motorImage} alt="motor" />

                    </Box>
                </Box>
            </Box>
            <Box>
                <Reviews />
            </Box>
        </Box >
    );
};

export default HeaderMain;
