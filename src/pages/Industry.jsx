import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import BusinessIcon from '@mui/icons-material/Business';

import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';






const cards = [
  {
    id: 1,
    title: "Total Industry Partners",
    value: "45+",
    subtitle: "Partner Companies",
    today: "•IT, Core & Startup Frims  ",
    icon: <BusinessIcon />,
  },
  {
    id: 2,
    title: "Active Partners",
    value: 28,
    subtitle: "Ongoing Collaborations",
    today: "Hiring & Training Support",
    icon: <HandshakeIcon />,
  },
  {
    id: 3,
    title: "MoUs Signed",
    value: 17,
    subtitle: "Official Agreements",
    today: "• Skill & Placement MoUs",
    icon: <DescriptionIcon/>,
  },
  {
    id: 4,
    title: "Placement Growth Percentage",
    value: "+22%",
    subtitle: "Yearly Growth",
    today: "• Compared to Last Year",
    icon: <TrendingUpIcon />,
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
