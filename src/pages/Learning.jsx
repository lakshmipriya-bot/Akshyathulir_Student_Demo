import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 35 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 15 },
  { month: "May", value: 30 },
  { month: "Jun", value: 25 },
  { month: "Jul", value: 40 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 45 },
  { month: "Oct", value: 20 },
  { month: "Nov", value: 30 },
];

export default function LearningCurve() {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight={600}>
            Learning Curve
          </Typography>

          <Typography color="success.main" fontWeight={600}>
            +12%
          </Typography>
        </Box>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              fill="#E0E0E0"
            />
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              fill="#1E40FF"
              barSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
