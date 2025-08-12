import { Box, Typography } from "@mui/material"
import starIcon from "../../../assets/Header/starIcon.svg"

interface ISingleReviewCardProps {
    review: any
}

const SingleReviewCard = ({ review }: ISingleReviewCardProps) => {
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
                        gap: "10px",
                    }}
                >
                    {[...Array(review.star)].map((_, index) => (
                        <img
                            key={index}
                            src={starIcon}
                            alt="star"
                            style={{ width: "20px", height: "20px" }}
                        />
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: "10px",
                    color: "#FFFFFF",
                    fontFamily: '"Metropolis", sans-serif',
                }}
            >
                <Typography
                    sx={{
                        fontSize: "22px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        fontFamily: '"Metropolis", sans-serif',
                        lineHeight: "24px",
                    }}
                >{review.review}</Typography>
                <Typography
                    sx={{
                        fontSize: "22px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        fontFamily: '"Metropolis", sans-serif',
                        marginTop: "10px",
                    }}
                >- {review.name}</Typography>
            </Box>
        </Box>
    )
}

export default SingleReviewCard