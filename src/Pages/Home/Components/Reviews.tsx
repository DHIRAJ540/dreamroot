import { Box, Typography } from "@mui/material";
import SingleReviewCard from "./SingleReviewCard";

const Reviews = () => {
    const reviews = [
        {
            star: 5,
            name: "John Doe",
            review:
                "DreamRoots transformed our ideas into reality with unmatched engineering expertise and innovative solutions.",
        },
        {
            star: 5,
            name: "John Doe",
            review:
                "DreamRoots transformed our ideas into reality with unmatched engineering expertise and innovative solutions.",
        },
        {
            star: 5,
            name: "John Doe",
            review:
                "DreamRoots transformed our ideas into reality with unmatched engineering expertise and innovative solutions.",
        },
        {
            star: 5,
            name: "John Doe",
            review:
                "DreamRoots transformed our ideas into reality with unmatched engineering expertise and innovative solutions.",
        },
        {
            star: 5,
            name: "John Doe",
            review:
                "DreamRoots transformed our ideas into reality with unmatched engineering expertise and innovative solutions.",
        },
        {
            star: 5,
            name: "John Doe",
            review:
                "DreamRoots transformed our ideas into reality with unmatched engineering expertise and innovative solutions.",
        },
        {
            star: 5,
            name: "John Doe",
            review:
                "DreamRoots transformed our ideas into reality with unmatched engineering expertise and innovative solutions.",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                position: "relative", // Make this relative for absolute positioning of children
                width: "100%"
            }}
        >
            {/* Blue box with vertical text - now positioned absolutely */}
            <Box
                sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0, // This makes it extend to the full height
                    width: "60px", // Fixed width for the blue bar
                    background: "#2B275A",
                    borderTopRightRadius: "34px",
                    borderBottomRightRadius: "34px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        textOrientation: 'mixed',
                        fontSize: { xs: '20px', sm: '20px', md: '33px' },
                        fontWeight: 400,
                        letterSpacing: '1px',
                    }}
                >
                    Review
                </Typography>
            </Box>

            {/* Cards container - with padding-left to account for the blue bar */}
            <Box
                sx={{
                    display: "flex",
                    gap: "20px",
                    overflowX: "auto",
                    width: "100%",
                    paddingLeft: "80px", // Add padding to account for the width of the blue bar
                    boxSizing: "border-box" // Make sure padding is included in width calculation
                }}
            >
                {reviews.map((review, index) => (
                    <SingleReviewCard review={review} key={index} />
                ))}
            </Box>
        </Box>
    );
};

export default Reviews;