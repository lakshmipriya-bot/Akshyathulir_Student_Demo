import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  AvatarGroup,
  LinearProgress,
  Chip,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// InfoOutlinedIcon was removed because it's not used in this file
// import Ads from "./ads";
import Api from "./api";
const EDU_COLORS = {
  primary: "#1a3e36",
  secondary: "#8db596",
  background: "#f1f8f4",
  accent: "#4caf50",
};

const initialAddress = {
  country: "",
  state: "",
  district: "",
  city: "",
  pinCode: "",
};

const Placements = () => {
  const [placementStats, setPlacementStats] = useState({
    highestPackage: 0,
    studentsPlaced: 0,
    recruiters: 0,
    averagePackage: 0,
  });

  const eduCompanyData = [
    {
      id: 1,
      name: "TCS",
      role: "System Engineer",
      students: 157,
      package: "7.5 LPA",
      growth: "+8%",
    },
    {
      id: 2,
      name: "Infosys",
      role: "Power Programmer",
      students: 90,
      package: "9.0 LPA",
      growth: "+12%",
    },
    {
      id: 3,
      name: "Wipro",
      role: "Project Engineer",
      students: 70,
      package: "6.5 LPA",
      growth: "+5%",
    },
    {
      id: 4,
      name: "Cognizant",
      role: "Analyst",
      students: 50,
      package: "6.0 LPA",
      growth: "+10%",
    },
    {
      id: 5,
      name: "Accenture",
      role: "Associate Software Engineer",
      students: 102,
      package: "8.2 LPA",
      growth: "+15%",
    },
  ];

  /* eslint-disable-next-line no-unused-vars */
  const EduFormRow = ({ children }) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 3 }}>
      {React.Children.map(children, (child) => (
        <Box
          sx={{
            flex: 1,
            minWidth: "250px",
            display: "flex",
            alignItems: "flex-start",
            "& > *": { width: "100%" },
          }}
        >
          {child}
        </Box>
      ))}
    </Box>
  );

  const eduToday = new Date().toISOString().split("T")[0];

  const eduDate = new Date();
  eduDate.setFullYear(eduDate.getFullYear() - 2);
  const eduTwoYearsAgo = eduDate.toISOString().split("T")[0];
  const [eduFormData, setEduFormData] = useState({
    startupName: "",
    legalStatus: "",
    dateOfEstablishment: "",
    primarySector: "",
    secondarySector: "",
    companyPAN: "",
    gstin: "",
    currentTeamSize: "",
    maleCount: "",
    femaleCount: "",
    companyWebsite: "",
    numberOfBranches: "1",
    branchAddresses: [{ ...initialAddress }],
  });

  const [eduErrors, setEduErrors] = useState({});
  const [, setLoading] = useState(false);

  const eduHandleBranchCountChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setEduFormData({
        ...eduFormData,
        numberOfBranches: "",
        branchAddresses: [],
      });

      setEduErrors((prev) => ({
        ...prev,
        numberOfBranches: "Number of branches is required",
      }));
      return;
    }

    let count = Number(value);

    if (isNaN(count) || count < 1) {
      return;
    }

    if (count > 20) {
      setEduErrors((prev) => ({
        ...prev,
        numberOfBranches: "Maximum allowed branches is 20",
      }));
      return;
    } else {
      setEduErrors((prev) => ({
        ...prev,
        numberOfBranches: "",
      }));
    }

    const updatedAddresses = [...eduFormData.branchAddresses];

    if (count > updatedAddresses.length) {
      for (let i = updatedAddresses.length; i < count; i++) {
        updatedAddresses.push({ ...initialAddress });
      }
    } else if (count < updatedAddresses.length) {
      updatedAddresses.length = count;
    }

    setEduFormData({
      ...eduFormData,
      numberOfBranches: value,
      branchAddresses: updatedAddresses,
    });
  };

  const eduHandleInputChange = (field) => (event) => {
    const value = event.target.value;

    // enforce letters-only for startup name
    if (field === "startupName") {
      if (!/^[A-Za-z ]*$/.test(value)) {
        setEduErrors((prevErr) => ({
          ...prevErr,
          startupName: "Letters only",
        }));
        return;
      } else if (eduErrors.startupName) {
        setEduErrors((prevErr) => ({ ...prevErr, startupName: "" }));
      }
    }

    setEduFormData((prev) => {
      const updated = { ...prev, [field]: value };

      const teamSize = Number(updated.currentTeamSize || 0);
      const male = Number(updated.maleCount || 0);
      const female = Number(updated.femaleCount || 0);

      if (teamSize > 0 && male + female > teamSize) {
        setEduErrors((prevErr) => ({
          ...prevErr,
          maleCount: "Male + Female employees cannot exceed team size",
          femaleCount: "Male + Female employees cannot exceed team size",
        }));
      } else {
        setEduErrors((prevErr) => ({
          ...prevErr,
          maleCount: "",
          femaleCount: "",
        }));
      }

      return updated;
    });

    if (eduErrors[field]) {
      setEduErrors((prevErr) => ({ ...prevErr, [field]: "" }));
    }
  };

  /* eslint-disable-next-line no-unused-vars */
  const eduValidateForm = () => {
    let tempErrors = {};
    let isValid = true;

    const checkRequired = (field, label) => {
      if (!eduFormData[field]) {
        tempErrors[field] = `${label} is required`;
        isValid = false;
      }
    };

    checkRequired("firstName", "First Name");
    checkRequired("lastName", "Last Name");
    checkRequired("email", "Email");
    checkRequired("phone", "Phone");
    checkRequired("dateOfBirth", "DOB");
    checkRequired("gender", "Gender");
    checkRequired("designation", "Designation");

    checkRequired("startupName", "Startup Name");
    checkRequired("legalStatus", "Legal Status");
    checkRequired("dateOfEstablishment", "Date of Est.");
    checkRequired("primarySector", "Sector");
    checkRequired("companyPAN", "PAN");
    checkRequired("currentTeamSize", "Team Size");
    checkRequired("maleCount", "Male Count");
    checkRequired("femaleCount", "Female Count");
    checkRequired("numberOfBranches", "Branches");

    checkRequired("founderName", "Founder Name");
    checkRequired("founderEmail", "Founder Email");
    checkRequired("founderPhone", "Founder Phone");
    checkRequired("founderDOB", "Founder DOB");
    checkRequired("founderGender", "Founder Gender");

    if (eduFormData.dateOfEstablishment) {
      if (eduFormData.dateOfEstablishment < eduTwoYearsAgo) {
        tempErrors.dateOfEstablishment =
          "Startup must be less than 2 years old.";
        isValid = false;
      } else if (eduFormData.dateOfEstablishment > eduToday) {
        tempErrors.dateOfEstablishment = "Date cannot be in the future.";
        isValid = false;
      }
    }

    eduFormData.branchAddresses.forEach((addr, index) => {
      if (!addr.country) {
        tempErrors[`address_${index}_country`] = "Required";
        isValid = false;
      }
      if (!addr.state) {
        tempErrors[`address_${index}_state`] = "Required";
        isValid = false;
      }
      if (!addr.district) {
        tempErrors[`address_${index}_district`] = "Required";
        isValid = false;
      }
      if (!addr.city) {
        tempErrors[`address_${index}_city`] = "Required";
        isValid = false;
      }
      if (!addr.pinCode) {
        tempErrors[`address_${index}_pinCode`] = "Required";
        isValid = false;
      }
    });

    setEduErrors(tempErrors);
    return isValid;
  };

  const eduHandleSubmit = async () => {
    try {
      setLoading(true);
      const email = localStorage.getItem("userEmail");

      await Api.post("/placements/", {
        startupName: eduFormData.startupName,
        legalStatus: eduFormData.legalStatus,
        dateOfEstablishment: eduFormData.dateOfEstablishment,
        primarySector: eduFormData.primarySector,
        secondarySector: eduFormData.secondarySector || "",
        companyPAN: eduFormData.companyPAN,
        gstin: eduFormData.gstin || "",
        currentTeamSize: Number(eduFormData.currentTeamSize),
        maleCount: Number(eduFormData.maleCount),
        femaleCount: Number(eduFormData.femaleCount),
        companyWebsite: eduFormData.companyWebsite || "",
        numberOfBranches: Number(eduFormData.numberOfBranches),
        adminEmail: email,
      });

      alert("✅ Company Registered Successfully!");
      getCompanies();
      eduHandleReset();
    } catch (error) {
      console.log(error);
      alert("❌ Error while submitting!");
    } finally {
      setLoading(false);
    }
  };
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    // ✅ call /stats not /kpi_dashboard
    axios
      .get(`http://127.0.0.1:8000/api/placements/stats/${email}`)
      .then((res) => {
        setPlacementStats({
          highestPackage: res.data.highestPackage || 0,
          studentsPlaced: res.data.studentsPlaced || 0,
          recruiters: res.data.recruiters || 0,
          averagePackage: res.data.averagePackage || 0,
        });
      })
      .catch((err) => console.log(err));

    getCompanies();
  }, []);
  const topRecruiters = [
    { name: "TCS", logo: "https://www.google.com/s2/favicons?domain=tcs.com&sz=64" },
    { name: "Infosys", logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=64" },
    { name: "Wipro", logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=64" },
    { name: "Cognizant", logo: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=64" },
    { name: "Accenture", logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=64" },
  ];

  const getCompanies = async () => {
    try {
      const email = localStorage.getItem("userEmail");

      const res = await Api.get(`/placements/admin/${email}`);

      setCompanies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const eduHandleReset = () => {
    setEduFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedin: "",
      website: "",
      dateOfBirth: "",
      gender: "",
      designation: "",
      startupName: "",
      legalStatus: "",
      dateOfEstablishment: "",
      startupStage: "",
      primarySector: "",
      companyPAN: "",
      currentTeamSize: "",
      maleCount: "",
      femaleCount: "",
      gstin: "",
      companyWebsite: "",
      numberOfBranches: "1",
      branchAddresses: [{ ...initialAddress }],
      founderName: "",
      founderEmail: "",
      founderPhone: "",
      founderDOB: "",
      founderGender: "",
      founderLinkedIn: "",
      founderFacebook: "",
      fundingNeeded: "",
      mentorshipNeeded: "",
      technologySupport: "",
      incubationSpace: "",
      registrationNeeded: "",
      supportInterest: "",
      governmentSchemes: "",
    });
    setEduErrors({});
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: EDU_COLORS.background,
        minHeight: "100vh",
      }}
    >
      {/*header*/}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="800"
          color={EDU_COLORS.primary}
          sx={{
            letterSpacing: "-0.5px",
            fontSize: { xs: "1.75rem", md: "2.125rem" },
          }}
        >
          Career Launchpad
        </Typography>
      </Box>
      {/* Placement Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          {
            icon: <TrendingUpIcon color="primary" />,
            value: `₹${placementStats.highestPackage} LPA`,
            title: "Highest Package",
            subtitle: "CTC offered",
          },
          {
            icon: <PeopleIcon color="primary" />,
            value: placementStats.studentsPlaced,
            title: "Students Placed",
            subtitle: "Total placements",
          },
          {
            icon: <BusinessIcon color="primary" />,
            value: placementStats.recruiters,
            title: "Recruiters",
            subtitle: "Companies visited",
          },
          {
            icon: <TrendingUpIcon color="primary" />,
            value: `₹${placementStats.averagePackage} LPA`,
            title: "Average Package",
            subtitle: "Across all branches",
          },
          {
            icon: <BusinessIcon color="primary" />,
            value: "",
            title: "Top Recruiters",
            subtitle: "",
            logos: topRecruiters,
          },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Card
              sx={{
                width: 220,
                height: 220,
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: 2,
                  bgcolor: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {card.icon}
              </Box>

              {card.logos ? (
                <AvatarGroup max={5} sx={{ justifyContent: "center", mb: 1 }}>
                  {card.logos.map((company, i) => (
                    <Avatar
                      key={i}
                      src={company.logo}
                      alt={company.name}
                      sx={{ width: 40, height: 40, bgcolor: "#1a3e36", fontSize: 14 }}
                    >
                      {company.name.charAt(0)}  {/* ← shows initial if image fails */}
                    </Avatar>
                  ))}
                </AvatarGroup>
              ) : (
                <Typography variant="h5" fontWeight="bold">
                  {card.value}
                </Typography>
              )}

              <Typography fontWeight={600}>{card.title}</Typography>

              <Typography variant="body2" color="text.secondary">
                {card.subtitle}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Top Recruiters Card */}


      {/* Placement Company Details Table */}
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", color: EDU_COLORS.primary }}
      >
        Placement Company Details
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          border: "2px solid #1f4d3a",
          overflow: "hidden",
          elevation: 0,
          mb: 4,
        }}
      >

        <Table>

          <TableHead sx={{ backgroundColor: EDU_COLORS.primary }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Company</TableCell>
              <TableCell sx={{ color: "white" }}>Sector</TableCell>
              <TableCell sx={{ color: "white" }}>Team Size</TableCell>
              <TableCell sx={{ color: "white" }}>Website</TableCell>
              <TableCell sx={{ color: "white" }}>Branches</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>


            {companies.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No companies registered
                </TableCell>
              </TableRow>
            ) : (
              companies.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.startupName}</TableCell>
                  <TableCell>{row.primarySector}</TableCell>
                  <TableCell>{row.currentTeamSize}</TableCell>
                  <TableCell>{row.companyWebsite}</TableCell>
                  <TableCell>{row.numberOfBranches}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* New Company Registration Form */}
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", color: EDU_COLORS.primary }}
      >
        New Company Registration
      </Typography>
      <Card sx={{ mb: 3, border: "2px solid #1f4d3a" }}>
        <Box sx={{ backgroundColor: EDU_COLORS.primary, color: "white", p: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Company Details
          </Typography>
        </Box>

        <CardContent sx={{ p: 3 }}>
          {/* Form Grid */}
          <Grid container spacing={3}>
            {/* Row 1 */}
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Startup Name *"
                value={eduFormData.startupName}
                onChange={eduHandleInputChange("startupName")}
                error={!!eduErrors.startupName}
                helperText={eduErrors.startupName}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                select
                fullWidth
                label="Legal Status *"
                value={eduFormData.legalStatus}
                onChange={eduHandleInputChange("legalStatus")}
                error={!!eduErrors.legalStatus}
                helperText={eduErrors.legalStatus}
              >
                <MenuItem value="Private Limited">Private Limited</MenuItem>
                <MenuItem value="LLP">LLP</MenuItem>
                <MenuItem value="Partnership">Partnership</MenuItem>
                <MenuItem value="Sole Proprietorship">
                  Sole Proprietorship
                </MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                type="date"
                fullWidth
                label="Date of Establishment *"
                InputLabelProps={{ shrink: true }}
                value={eduFormData.dateOfEstablishment}
                onChange={eduHandleInputChange("dateOfEstablishment")}
                inputProps={{ min: eduTwoYearsAgo, max: eduToday }}
                error={!!eduErrors.dateOfEstablishment}
                helperText={eduErrors.dateOfEstablishment}
              />
            </Grid>

            {/* Row 2 */}
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                select
                fullWidth
                label="Primary Sector *"
                value={eduFormData.primarySector}
                onChange={eduHandleInputChange("primarySector")}
                error={!!eduErrors.primarySector}
                helperText={eduErrors.primarySector}
              >
                <MenuItem value="HealthTech">HealthTech</MenuItem>
                <MenuItem value="FinTech">FinTech</MenuItem>
                <MenuItem value="EdTech">EdTech</MenuItem>
                <MenuItem value="AgriTech">AgriTech</MenuItem>
                <MenuItem value="E-Commerce">E-Commerce</MenuItem>
                <MenuItem value="AI / ML">AI / ML</MenuItem>
                <MenuItem value="IoT">IoT</MenuItem>
                <MenuItem value="SaaS">SaaS</MenuItem>
                <MenuItem value="Blockchain">Blockchain</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                select
                fullWidth
                label="Secondary Sector"
                value={eduFormData.secondarySector}
                onChange={eduHandleInputChange("secondarySector")}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="HealthTech">HealthTech</MenuItem>
                <MenuItem value="FinTech">FinTech</MenuItem>
                <MenuItem value="EdTech">EdTech</MenuItem>
                <MenuItem value="AgriTech">AgriTech</MenuItem>
                <MenuItem value="E-Commerce">E-Commerce</MenuItem>
                <MenuItem value="AI / ML">AI / ML</MenuItem>
                <MenuItem value="IoT">IoT</MenuItem>
                <MenuItem value="SaaS">SaaS</MenuItem>
                <MenuItem value="Blockchain">Blockchain</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                fullWidth
                label="Company PAN *"
                value={eduFormData.companyPAN}
                onChange={eduHandleInputChange("companyPAN")}
                inputProps={{ maxLength: 10 }}
                error={!!eduErrors.companyPAN}
                helperText={eduErrors.companyPAN}
              />
            </Grid>

            {/* Row 3 */}
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                fullWidth
                label="GSTIN / CIN"
                value={eduFormData.gstin}
                onChange={eduHandleInputChange("gstin")}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                fullWidth
                type="number"
                label="Current Team Size *"
                value={eduFormData.currentTeamSize}
                onChange={eduHandleInputChange("currentTeamSize")}
                inputProps={{ min: 0 }}
                error={!!eduErrors.currentTeamSize}
                helperText={eduErrors.currentTeamSize}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
              <TextField
                fullWidth
                type="number"
                label="Male Employees *"
                value={eduFormData.maleCount}
                onChange={eduHandleInputChange("maleCount")}
                inputProps={{ min: 0 }}
                error={!!eduErrors.maleCount}
                helperText={eduErrors.maleCount}
              />
            </Grid>

            {/* Row 4 */}
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                type="number"
                label="Female Employees *"
                value={eduFormData.femaleCount}
                onChange={eduHandleInputChange("femaleCount")}
                inputProps={{ min: 0 }}
                error={!!eduErrors.femaleCount}
                helperText={eduErrors.femaleCount}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Company Website"
                value={eduFormData.companyWebsite}
                onChange={eduHandleInputChange("companyWebsite")}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                type="number"
                label="Number of Branches *"
                value={eduFormData.numberOfBranches}
                onChange={eduHandleBranchCountChange}
                inputProps={{ min: 1, max: 20 }}
                error={!!eduErrors.numberOfBranches}
                helperText={eduErrors.numberOfBranches}
              />
            </Grid>

            {/* Buttons */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 3,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  onClick={eduHandleSubmit}
                  sx={{ backgroundColor: EDU_COLORS.primary, px: 4 }}
                >
                  Submit Application
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="large"
                  onClick={eduHandleReset}
                >
                  Reset Form
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Ads page="placements" />
    </Box>
  );
};

export default Placements;
