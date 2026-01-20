import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ApartmentIcon from '@mui/icons-material/Apartment';
import InsightsIcon from '@mui/icons-material/Insights';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';





const cards = [
  {
    id: 1,
    title: "Total Placements",
    value: "850+",
    subtitle: "• Industry-wide hiring",
    today: "• Multiple job roles",
    icon: <BusinessCenterIcon />,
  },
  {
    id: 2,
    title: "Students Placed",
    value: 720,
    subtitle: "Top recruiters onboard",
    today: "Careers enabled",
    icon: <HowToRegIcon />,
  },
  {
    id: 3,
    title: "Joined Students",
    value: 680,
    subtitle: "Active professionals",
    today: "• Success achieved",
    icon: <ApartmentIcon/>,
  },
  {
    id: 4,
    title: "Placement Success Rate",
    value: "92%",
    subtitle: "Consistent results",
    today: "• Strong placement record",
    icon: <InsightsIcon />,
  },
];

export default function StatsCard() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
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
              gap={1}
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
              sx={{
                mt: 2,
                fontWeight: 700,
                color: "#2e7d32",
              }}
            >
              {card.value}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {card.subtitle}
            </Typography>

            {/* FOOTER */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#2e7d32",
                  fontWeight: 600,
                }}
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
  );
}
