import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Navbar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const cards = [
    {
      id: 1,
      title: 'Total Users',
      value: 40,
      subtitle: 'All users',
      today: '+0 today',
      icon: <PeopleIcon />,
    },
    {
      id: 2,
      title: 'Courses',
      value: 6,
      subtitle: 'All courses',
      today: '+0 today',
      icon: <MenuBookIcon />,

    },
    {
      id: 3,
      title: 'Placements',
      value: 20,
      subtitle: 'All users',
      today: '+0 today',
      icon: <WorkIcon />,

    },
    {
      id: 4,
      title: 'Trainers',
      value: 20,
      subtitle: 'All users',
      today: '+0 today',
      icon: <SchoolIcon />,

    },
  ];

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered sx={{
            "& .MuiTab-root": {

              fontWeight: 500,
              fontSize: 20
            },
            "& .Mui-selected": {

              fontWeight: 700,
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#0b5e00",
            },
          }}>
            <Tab label="TOTAL" value="1" />
            <Tab label="TODAY" value="2" />
            <Tab label="THIS WEEK" value="3" />
            <Tab label="THIS MONTH" value="4" />
            <Tab label="6 MONTH" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 18,
              fontSize: "20px",
              ml: '10px'
            }}
          >
            {cards.map((card) => (
              <Card
                key={card.id}
                sx={{
                  borderRadius: 3,
                  backgroundColor: '#f4fbf4',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              >
                <CardActionArea sx={{ height: '100%' }}>
                  <CardContent
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: '#e0f2e9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#2e7d32',
                        }}
                      >
                        {card.icon}
                      </Box>

                      <TrendingUpIcon sx={{ color: '#2e7d32' }} />
                    </Box>

                    <Typography fontWeight={600}>
                      {card.title}
                    </Typography>

                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      sx={{ color: '#2e7d32' }}
                    >
                      {card.value}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {card.subtitle}
                    </Typography>

                    <Box
                      sx={{

                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 'auto',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: '#2e7d32', fontWeight: 500 }}
                      >
                        {card.today}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: '#2e7d32', fontWeight: 500 }}
                      >
                        ↑ 0%
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}