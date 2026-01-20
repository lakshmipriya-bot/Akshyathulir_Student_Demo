import * as React from "react";
import { Grid,  Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

const categoryData = [
  ['Technology', 'Software'],
  ['Technology', 'Hardware'],
  ['Technology', 'AI/ML'],
  ['Finance', 'Banking'],
  ['Finance', 'Insurance'],
  ['Finance', 'Investment'],
  ['Healthcare', 'Pharmaceuticals'],
  ['Healthcare', 'Medical Devices'],
  ['Healthcare', 'Telemedicine'],
];

const salesData = [150, 120, 200, 180, 90, 160, 140, 110, 85];
const profitData = [45, 35, 80, 65, 25, 55, 50, 40, 30];

const chartConfig = {
  height: 400,
  xAxis: [{ valueFormatter: (value) => `${value}K` }],
  series: [
    {
      data: salesData,
      label: 'Sales',
      valueFormatter: (value) => `${value}K`,
    },
    {
      data: profitData,
      label: 'Profit',
      valueFormatter: (value) => `${value}K`,
    },
  ],
};

export default function Graph() {
  return (
    <Box sx={{ mt: 4
    }}>
      <Grid container spacing={4}>

        {/* ===== AREA / LINE CHART ===== */}
        <Grid item xs={12} md={8} >
          <Box sx={cardStyle}>
            <Typography variant="h6" mb={2}>
              Downloads growth
            </Typography>

           




    <Box sx={{ width: '100%', maxWidth: 500 }}>
    <BarChart
  layout="horizontal"
  yAxis={[
    {
      data: categoryData,
      scaleType: 'band',
      width: 120,
      groups: [
        // Extract main category
        { getValue: (category) => category[1] },
        // Extract subcategory
        {
          getValue: (category) => category[0],
          tickSize: 120,
          tickLabelStyle: {
            angle: -90,
            textAnchor: 'middle',
          },
        },
      ],
      valueFormatter: (value) => value.join(' - '),
    },
  ]}
  {...chartConfig}
/>
    </Box>
  



          </Box>
        </Grid>

        {/* ===== DONUT CHART ===== */}
        <Grid item xs={12} md={4}>
          <Box sx={cardStyle}>
            <Typography variant="h6" mb={2}>
              Top Courses
            </Typography>

            <PieChart
              series={[
                {
                  innerRadius: 60,
                  outerRadius: 90,
                  data: [
                    { id: 0, value: 60, label: "Fullstack", color: "#3f51b5" },
                    { id: 1, value: 25, label: "Java", color: "#ff9800" },
                    { id: 2, value: 15, label: "Python", color: "#f44336" },
                  ],
                },
              ]}
              height={250}
            />
          </Box>
        </Grid>

        {/* ===== BAR CHART ===== */}
        <Grid item xs={12} md={6}>
          <Box sx={cardStyle}>
            <Typography variant="h6" mb={2}>
              Student Login
            </Typography>

            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["M", "T", "W", "T", "F", "S", "S"],
                },
              ]}
              series={[
                {
                  data: [12, 9, 7, 15, 11, 4, 10],
                  color: "#2e7d32",
                },
              ]}
              height={280}
            />
          </Box>
        </Grid>

        {/* ===== HEATMAP (CUSTOM) ===== */}
        <Grid item xs={12} md={6}>
          <Box sx={cardStyle}>
            <Typography variant="h6" mb={2}>
              opening time
            </Typography>

            {[1, 2, 3, 4, 2, 1].map((_, row) => (
              <Box key={row} sx={{ display: "flex", mb: 1 }}>
                {[1, 2, 3, 4, 5, 2, 1].map((val, col) => (
                  <Box
                    key={col}
                    sx={{
                      width: 32,
                      height: 32,
                      mr: 0.5,
                      borderRadius: 1,
                      backgroundColor: `rgba(46,125,50,${val / 6})`,
                    }}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

const cardStyle = {
  p: 3,
  borderRadius: 3,
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};
