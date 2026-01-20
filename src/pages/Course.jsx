import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ScheduleIcon from "@mui/icons-material/Schedule";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import fullStack from "../assets/images/fullStack.jpg";
import javascript from"../assets/images/javascript.jpg";
import python from "../assets/images/python.jpg";
import ai from "../assets/images/ai.jpg";
import testing from "../assets/images/testing.png";
/* ===================== DATA ===================== */
const cards = [
  {
    id: 1,
    title: "Total Courses",
    value: "24+",
    subtitle: "Programs",
    today: "• Multiple Domains",
    icon: <MenuBookIcon />,
  },
  {
    id: 2,
    title: "Active Courses",
    value: 10,
    subtitle: "Live",
    today: "• Running Batches",
    icon: <PlayCircleFilledIcon />,
  },
  {
    id: 3,
    title: "Upcoming Courses",
    value: 6,
    subtitle: "Planned",
    today: "• Enrolling Now",
    icon: <ScheduleIcon />,
  },
  {
    id: 4,
    title: "Completed Courses",
    value: 8,
    subtitle: "Certified",
    today: "• Finished",
    icon: <VerifiedIcon />,
  },
];
const courses = [
  {
    title: "FullStack for Beginners",
    author: "Richardino Guevara",
    progress: 25,
    lessons: "4/20 lessons",
    image: fullStack

  },
  {
    title: "Javasript for Beginners",
    author: "Richardino Guevara",
    progress: 50,
    lessons: "10/20 lessons",
    image: javascript ,
  },
  {
    title: "Beginner to Pro Class",
    author: "Richardino Guevara",
    progress: 89,
    lessons: "29/30 lessons",
    image: python,
  },
   {
    title: "Software Testing",
    author: "Richardino Guevara",
    progress: 59,
    lessons: "29/30 lessons",
    image: testing,
  },
  {
    title: "Hands On AI",
    author: "Richardino Guevara",
    progress: 80,
    lessons: "8/10 lessons",
    image: ai,
  },
];

/* ===================== COMPONENT ===================== */
export default function Course() {
  const [formData, setFormData] = React.useState({
    instituteName: "",
    registrationName: "",
    yearOfEstablishment: "",
    address: "",
    districtCity: "",
    contactnumber: "",
    emailid: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      {/* ===================== STATS CARDS ===================== */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mb: 3,
          ml:"5px"
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            sx={{
              flex: { xs: "100%", sm: 1 },
              minWidth: { xs: "100%", sm: 240 },
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              bgcolor: "#f1f8e9",
            }}
          >
            <CardContent>
              {/* HEADER */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar
                    sx={{
                      bgcolor: "#e8f5e9",
                      color: "#2e7d32",
                      width: 40,
                      height: 40,
                    }}
                  >
                    {card.icon}
                  </Avatar>
                  <Typography fontWeight={600}>
                    {card.title}
                  </Typography>
                </Box>

                <Avatar
                  sx={{
                    bgcolor: "#e8f5e9",
                    color: "#2e7d32",
                    width: 32,
                    height: 32,
                  }}
                >
                  <TrendingUpIcon fontSize="small" />
                </Avatar>
              </Box>

              {/* VALUE */}
              <Typography
                variant="h3"
                sx={{ mt: 2, fontWeight: 700, color: "#2e7d32" }}
              >
                {card.value}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {card.subtitle}
              </Typography>

              {/* FOOTER */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <Typography
                  sx={{ fontSize: 13, color: "#2e7d32", fontWeight: 600 }}
                >
                  {card.today}
                </Typography>

                <Box
                  sx={{
                    px: 1.2,
                    py: 0.4,
                    bgcolor: "#e8f5e9",
                    borderRadius: 1,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#2e7d32",
                  }}
                >
                  ↑ 100%
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      
      <Box>
      {/* Section Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        p={2}
        borderRadius={1}
        bgcolor="#ECFAE5"
      >
        <Typography variant="h6" fontWeight={600}>
          Recent Enrolled Course (12)
        </Typography>
        <Typography color="primary" sx={{ cursor: "pointer" }}>
          View All
        </Typography>
      </Box>

      {/* Cards */}
      <Box display="flex" gap={8} flexWrap="wrap">
        {courses.map((course, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              backgroundColor:"#ECFAE5",
              overflow:"hidden",
              height:"100%"
            }}
          >
            <Box
              component="img"
              src={course.image}
              alt={course.title}
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                display: "block",
              }}
            />

            <CardContent>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
              >
                A Course by {course.author}
              </Typography>

              <Typography
                variant="subtitle1"
                fontWeight={600}
                mt={0.5}
                mb={1}
                noWrap
              >
                {course.title}
              </Typography>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Typography variant="body2" fontWeight={600}>
                  {course.progress}%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {course.lessons}
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={course.progress}
                sx={{
                  height: 6,
                  borderRadius: 5,
                  backgroundColor: "#EAECEF",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#2BB0A6",
                  },
                }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </Box>
  );
}
