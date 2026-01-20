import './App.css';
import React from 'react';
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import Graph from "./pages/Graph";
import Course from "./pages/Course";
import Placement from "./pages/Placement";
import Industry from "./pages/Industry";
import Certificate from "./pages/Certificate";
import Profile from "./pages/Profile";
import { Box } from '@mui/material';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <Dashboard />

      {/* Main Content */}  
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: "80px",
        }}
      >
        <Routes>
          {/* DASHBOARD PAGE */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Graph />
              </>
            }
          />

          {/* COURSE PAGE */}
          <Route path="/course" element={<Course />} />
          <Route path="/placement" element={<Placement/>}/>
          <Route path="/industry" element={<Industry/>}/>
          <Route path="/certificate" element={<Certificate/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Box>

    </Box>
  );
}

export default App;
