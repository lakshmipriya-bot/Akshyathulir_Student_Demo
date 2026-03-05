import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Chip,
    Divider,
} from "@mui/material";
import {
    AccessTime,
    Payments,
    Person,
    Groups,
} from "@mui/icons-material";



import {
    CheckCircle,
    FavoriteBorder,
} from "@mui/icons-material";


import { ArrowBack, People, School } from "@mui/icons-material";

/* TEMP COURSE DATA */
const coursesData = [
    {
        id: "CRS001",
        name: "Full Stack Web Development",
        duration: "6 Months",
        fees: "$2,500",
        trainer: "John Smith",
        enrolled: 45,
        status: "Active",
        description:
            "Become a job-ready full stack developer with real-world projects.",
    },
];

const Syllabus = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const course = coursesData.find((c) => c.id === id);

    return (
        <Box p={4}>
            {/* 🔙 Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate("/courses")}
                sx={{
                    mb: 3,
                    color: "#1b5e20",
                    fontWeight: "bold",
                    "&:hover": {
                        backgroundColor: "#e8f5e9",
                    },
                }}
            >
                Back to Courses
            </Button>

            {/* 🌈 Header */}
            <Box
                sx={{
                    p: 4,
                    borderRadius: 4,
                    background:
                        "linear-gradient(135deg, #1b5e20, #43a047)",
                    color: "white",
                    mb: 4,
                }}
            >
                <Typography variant="h4" fontWeight="bold">
                    {course.name}
                </Typography>

                <Typography mt={1} sx={{ opacity: 0.9 }}>
                    {course.description}
                </Typography>

                <Chip
                    label={course.status}
                    sx={{
                        mt: 2,
                        backgroundColor: "#c8e6c9",
                        color: "#1b5e20",
                        fontWeight: "bold",
                    }}
                />
            </Box>

            {/* 📦 Main Content */}
            <Grid container spacing={4}>
                {/* LEFT */}
                <Grid item xs={12} md={8}>
                    <Card
                        sx={{
                            borderRadius: 4,
                            p: 2,
                            background:
                                "linear-gradient(180deg, #ffffff, #f1f8e9)",
                            boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
                            width: "120%",
                            height: "80%"
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                mb={3}
                                sx={{ color: "#1b5e20" }}
                            >
                                Course Details
                            </Typography>

                            <Grid container spacing={3}>
                                {/* Duration */}
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            p: 2,
                                            borderRadius: 3,
                                            backgroundColor: "#e8f5e9",
                                        }}
                                    >
                                        <AccessTime sx={{ color: "#2e7d32" }} />
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">
                                                Duration
                                            </Typography>
                                            <Typography fontWeight="bold">
                                                {course.duration}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Fees */}
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            p: 2,
                                            borderRadius: 3,
                                            backgroundColor: "#e8f5e9",
                                        }}
                                    >
                                        <Payments sx={{ color: "#2e7d32" }} />
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">
                                                Fees
                                            </Typography>
                                            <Typography fontWeight="bold">
                                                {course.fees}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Trainer */}
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            p: 2,
                                            borderRadius: 3,
                                            backgroundColor: "#e8f5e9",
                                        }}
                                    >
                                        <Person sx={{ color: "#2e7d32" }} />
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">
                                                Trainer
                                            </Typography>
                                            <Typography fontWeight="bold">
                                                {course.trainer}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Enrolled */}
                                <Grid item xs={12} sm={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            p: 2,
                                            borderRadius: 3,
                                            backgroundColor: "#e8f5e9",
                                        }}
                                    >
                                        <Groups sx={{ color: "#2e7d32" }} />
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">
                                                Students Enrolled
                                            </Typography>
                                            <Typography fontWeight="bold">
                                                {course.enrolled}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                </Grid>

                {/* RIGHT – ENROLL */}
                <Grid item xs={12} md={4} pl={"13%"}>
                    <Card
                        sx={{
                            borderRadius: 4,
                            overflow: "hidden",
                            position: "sticky",
                            top: 90,
                            boxShadow: "0 14px 40px rgba(46,125,50,0.25)",
                        }}
                    >
                        {/* 🖼 Course Image */}
                        <Box
                            sx={{
                                height: 180,
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(180deg, rgba(27,94,32,0.6), rgba(27,94,32,0.85))",
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 16,
                                    left: 16,
                                    color: "#fff",
                                }}
                            >
                                <Typography fontWeight="bold">
                                    Enroll in this course
                                </Typography>
                                <Typography fontSize={14} sx={{ opacity: 0.9 }}>
                                    Start learning today
                                </Typography>
                            </Box>
                        </Box>

                        <CardContent>
                            {/* 💰 Price */}
                            <Box display="flex" alignItems="center" gap={2}>
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    sx={{ color: "#1b5e20" }}
                                >
                                    $89.99
                                </Typography>

                                <Typography
                                    sx={{
                                        textDecoration: "line-through",
                                        color: "#81c784",
                                    }}
                                >
                                    $199.99
                                </Typography>

                                <Chip
                                    label="55% off"
                                    sx={{
                                        backgroundColor: "#e8f5e9",
                                        color: "#1b5e20",
                                        fontWeight: "bold",
                                    }}
                                />
                            </Box>

                            {/* ⏳ Sale */}
                            <Typography sx={{ color: "#2e7d32" }} mt={1}>
                                Sale ends in 2 days
                            </Typography>

                            {/* 🟢 Enroll Button */}
                            <Button
                                fullWidth
                                sx={{
                                    mt: 3,
                                    py: 1.4,
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    background:
                                        "linear-gradient(135deg, #1b5e20, #43a047)",
                                    color: "#fff",
                                    borderRadius: 2,
                                }}
                            >
                                Enroll Now
                            </Button>

                            {/* 🤍 Wishlist */}
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<FavoriteBorder />}
                                sx={{
                                    mt: 2,
                                    borderRadius: 2,
                                    fontWeight: "bold",
                                    borderColor: "#2e7d32",
                                    color: "#2e7d32",
                                    "&:hover": {
                                        backgroundColor: "#e8f5e9",
                                        borderColor: "#1b5e20",
                                    },
                                }}
                            >
                                Add to Wishlist
                            </Button>

                            {/* 🛡 Guarantee */}
                            <Typography
                                align="center"
                                fontSize={14}
                                mt={2}
                                sx={{ color: "#388e3c" }}
                            >
                                30-Day Money-Back Guarantee
                            </Typography>

                            <Divider sx={{ my: 3 }} />

                            {/* 📦 Includes */}
                            <Typography
                                fontWeight="bold"
                                mb={2}
                                sx={{ color: "#1b5e20" }}
                            >
                                This course includes:
                            </Typography>

                            <Box display="flex" flexDirection="column" gap={1.5}>
                                {[
                                    "42 hours of on-demand video",
                                    "15 hands-on projects",
                                    "Downloadable resources",
                                    "Certificate of completion",
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        display="flex"
                                        alignItems="center"
                                        gap={1.2}
                                    >
                                        <CheckCircle
                                            sx={{ color: "#2e7d32", fontSize: 20 }}
                                        />
                                        <Typography sx={{ color: "#4caf50" }}>
                                            {item}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>


                </Grid>
            </Grid>
        </Box>
    );
};

export default Syllabus;
