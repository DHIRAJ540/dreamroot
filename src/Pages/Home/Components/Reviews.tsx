import { Box, Typography } from "@mui/material";
import SingleReviewCard from "./SingleReviewCard";

const Reviews = () => {
    const reviews = [
        {
            star: 5,
            name: "Rohan Sharma",
            review:
                "Excellent hardware quality, team was very cooperative and supportive throughout the project.",
        },
        {
            star: 5,
            name: "Emily Chen",
            review:
                "Very good product, exceeded expectations, and customer support was fantastic too always helpful.",
        },
        {
            star: 5,
            name: "Kunal Jain",
            review:
                "Good experience with the hardware team, product quality was top-notch and reliable too.",
        },
        {
            star: 5,
            name: "Liam Brown",
            review:
                "Hardware performance was impressive, team was professional and delivered on time always great.",
        },
        {
            star: 5,
            name: "Priya Patel",
            review:
                "Fantastic product, hardware team was knowledgeable and very helpful throughout the process.",
        },
        {
            star: 5,
            name: "Sofia Rodriguez",
            review:
                "Great hardware quality, team was responsive and worked efficiently to meet deadlines always.",
        },
        {
            star: 5,
            name: "Amit Kumar",
            review:
                "Excellent product, hardware team was very supportive and provided great solutions always helpful.",
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
                    paddingLeft: "80px",
                    boxSizing: "border-box",
                    // Add these styles to hide the scrollbar
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    // For Firefox
                    scrollbarWidth: "none",
                    // For IE and Edge
                    msOverflowStyle: "none"
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