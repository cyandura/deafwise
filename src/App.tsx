import React, { useState } from 'react';
import {
  AppBar, 
  Toolbar, 
  Tabs, 
  Tab, 
  Box, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemButton,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TopBanner from './components/TopBanner';
import HomePage from './pages/HomePage';
import TaxServicesPage from './pages/TaxServicesPage';
import RetirementPlanningPage from './pages/RetirementPlanningPage';
import OtherServices from './pages/OtherServices';
import About from './pages/About';
import FinancialPlanning from './pages/FinancialPlanning';
import Contact from './pages/Contact';
import ContactFooter from './components/ContactFooter';
import AccessibilityMenu from './components/AccessibilityMenu';
import FAQ from './pages/FAQ';

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
  const [tab, setTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1300));

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    if (isMobile) {
      setDrawerOpen(false); // Close drawer after selection
    }
  };

  const handleDrawerItemClick = (newValue: number) => {
    setTab(newValue);
    setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };


  const menuItems = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Financial Planning", index: 2 },
    { label: "FAQ", index: 6 },
    { label: "Retirement Planning", index: 3 },
    { label: "Tax Services", index: 4 },
    { label: "Other Services", index: 5 },
    { label: "Contact", index: 7 }
  ];
          

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {/* Banner */}
      <TopBanner />
      
      {/* Menu Bar */}
      <AppBar position="static" sx={{ bgcolor: '#8161cc' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          {isMobile ? (
            // Mobile: Burger menu
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer" 
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: -4 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography 
                variant="h6" 
                sx={{ 
                  flexGrow: 1, 
                  textAlign: 'center',
                  color: 'white'
                }}
              >
                {menuItems[tab].label}
              </Typography>
            </Box>
          ) : (
            // Desktop: Horizontal tabs
            <Tabs 
              value={tab} 
              onChange={handleTabChange} 
              textColor="inherit" 
              indicatorColor="secondary" 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#8161cc',
                color: 'white',
                '& .MuiTab-root': {
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  minHeight: '48px',
                  padding: '12px 24px'
                }
              }}
            >
              {menuItems.map((item) => (
                <Tab key={item.index} label={item.label} />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
       {/* Mobile Drawer */}
       <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', [theme.breakpoints.up(1300)]: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            bgcolor: '#8161cc',
            color: 'white'
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton 
              key={item.index}
              onClick={() => handleDrawerItemClick(item.index)}
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Container maxWidth="lg">
        <TabPanel value={tab} index={0}>
          <HomePage />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <About />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <FinancialPlanning />
        </TabPanel>
        <TabPanel value={tab} index={6}>
          <FAQ />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <RetirementPlanningPage />
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <TaxServicesPage />
        </TabPanel>
        <TabPanel value={tab} index={5}>
          <OtherServices />
        </TabPanel>
        <TabPanel value={tab} index={7}>
          <Contact />
        </TabPanel>
        </Container>
      </Box>
      <ContactFooter/>
      <AccessibilityMenu />
    </Box>
  );
} 