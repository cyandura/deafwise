import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, Container } from '@mui/material';
import TopBanner from './components/TopBanner';
import HomePage from './components/HomePage';
import TaxServicesPage from './components/TaxServicesPage';
import RetirementPlanningPage from './components/RetirementPlanningPage';
import OtherServices from './components/OtherServices';

function TabPanel(props: { children?: React.ReactNode; value: number; index: number }) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Banner */}
      <TopBanner />
      {/* Menu Bar */}
      <AppBar position="static" sx={{ bgcolor: '#17024a' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Tabs value={tab} onChange={handleTabChange} textColor="inherit" indicatorColor="secondary" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#17024a',
            color: 'white',
          }}>
            <Tab label="Home" />
            <Tab label="Tax Services" />
            <Tab label="Retirement Planning" />
            <Tab label="Other Services" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* Content */}
      <Container maxWidth="md">
        <TabPanel value={tab} index={0}>
          <HomePage />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <TaxServicesPage />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <RetirementPlanningPage />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <OtherServices />
        </TabPanel>
      </Container>
    </Box>
  );
} 