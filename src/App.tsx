import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, Container } from '@mui/material';
import TopBanner from './components/TopBanner';
import HomePage from './components/pages/HomePage';
import TaxServicesPage from './components/pages/TaxServicesPage';
import RetirementPlanningPage from './components/pages/RetirementPlanningPage';
import OtherServices from './components/pages/OtherServices';
import About from './components/pages/About';
import FinancialPlanning from './components/pages/FinancialPlanning';
import MESP from './components/pages/MESP';
import Contact from './components/pages/Contact';

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
      <AppBar position="static" sx={{ bgcolor: '#8161cc' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Tabs value={tab} onChange={handleTabChange} textColor="inherit" indicatorColor="secondary" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#8161cc',
            color: 'white',
          }}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Financial Planning" />
            <Tab label="Retirement Planning" />
            <Tab label="Tax Services" />
            <Tab label="Michigan Education Savings Plan (529)" />
            <Tab label="Other Services" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* Content */}
      <Container maxWidth="md">
        <TabPanel value={tab} index={0}>
          <HomePage />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <About />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <FinancialPlanning />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <TaxServicesPage />
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <MESP />
        </TabPanel>
        <TabPanel value={tab} index={5}>
          <RetirementPlanningPage />
        </TabPanel>
        <TabPanel value={tab} index={6}>
          <OtherServices />
        </TabPanel>
        <TabPanel value={tab} index={7}>
          <Contact />
        </TabPanel>
      </Container>
    </Box>
  );
} 