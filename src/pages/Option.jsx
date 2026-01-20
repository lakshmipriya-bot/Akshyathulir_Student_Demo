import * as React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const options = [
  { label: "Courses", icon: <SchoolIcon /> },
  { label: "Favorites", icon: <FavoriteBorderIcon /> },
  { label: "Explore", icon: <ExploreIcon /> },
  { label: "Notifications", icon: <NotificationsNoneIcon /> },
  { label: "Alerts", icon: <WarningAmberIcon /> },
  { label: "Tips", icon: <LightbulbOutlinedIcon /> },
];

export default function OptionBoxes() {
  return (
    <Grid container spacing={2}>
      {options.map((item, index) => (
        <Grid item xs={6} key={index}>
          <Card
            sx={{
              height: 110,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                bgcolor: "#1E40FF",
                color: "#fff",
              },
            }}
          >
            <Box mb={1}>{item.icon}</Box>
            <Typography fontWeight={600}>{item.label}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
