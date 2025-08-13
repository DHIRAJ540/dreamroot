import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import starIcon from "../../../assets/Header/starIcon.svg";

interface ISingleReviewCardProps {
    review: any;
}

const SingleReviewCard = ({ review }: ISingleReviewCardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
        <Box
            sx={{
                minWidth: "300px",
            }}
        >
            <Box
                sx={{
                    paddingBlock: "10px",
                    borderRadius: "500px",
                    width: "max-content",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? "8px" : "10px",
                    }}
                >
                    {[...Array(review.star)].map((_, index) => (
                        <img
                            key={index}
                            src={starIcon}
                            alt="star"
                            style={{ width: isMobile ? "12px" : "20px", height: isMobile ? "12px" : "20px" }}
                        />
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: isMobile ? "0px" : "10px",
                    color: "#FFFFFF",
                    fontFamily: '"Metropolis", sans-serif',
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "14px", sm: "14px", md: "22px" },
                        fontWeight: 400,
                        color: "#FFFFFF",
                        fontFamily: '"Metropolis", sans-serif',
                        lineHeight: "24px",
                    }}
                >
                    {review.review}
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: "14px", sm: "14px", md: "22px" },
                        fontWeight: 500,
                        color: "#FFFFFF",
                        fontFamily: '"Metropolis", sans-serif',
                        marginTop: "10px",
                    }}
                >
                    - {review.name}
                </Typography>
            </Box>
        </Box>
    );
};

export default SingleReviewCard;
