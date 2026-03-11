import React, { useState } from 'react';
import {
  Box,
  Container,
  Drawer,
  List,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
      {value === index && <>{children}</>}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  const handleNavigate = (newValue: number) => {
    setTab(newValue);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Financial Planning", index: 2 },
    { label: "FAQ", index: 3 },
    { label: "Retirement Planning", index: 4 },
    { label: "Tax Services", index: 5 },
    { label: "Other Services", index: 6 },
    { label: "Contact", index: 7 }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* NAV */}
      {isMobile ? (
        <div className="mobile-nav-bar">
          <button className="burger-btn" onClick={() => setDrawerOpen(!drawerOpen)} aria-label="open menu">
            <MenuIcon />
          </button>
          <span className="current-page">{menuItems[tab].label}</span>
        </div>
      ) : (
        <nav className="main-nav">
          {menuItems.map((item) => (
            <button
              key={item.index}
              className={`nav-link${tab === item.index ? ' active' : ''}`}
              onClick={() => handleNavigate(item.index)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 260,
            bgcolor: 'var(--dark)',
            color: 'rgba(255,255,255,0.8)',
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.index}
              onClick={() => handleNavigate(item.index)}
              selected={tab === item.index}
              sx={{
                '&.Mui-selected': {
                  bgcolor: 'var(--purple-mid)',
                  color: '#fff',
                },
                '&:hover': {
                  bgcolor: 'rgba(124,58,191,0.3)',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        {/* Home page is full-width (has its own hero + layout) */}
        <TabPanel value={tab} index={0}>
          <HomePage onNavigate={handleNavigate} />
        </TabPanel>

        {/* Other pages use Container */}
        {[
          { index: 1, component: <About /> },
          { index: 2, component: <FinancialPlanning /> },
          { index: 3, component: <FAQ /> },
          { index: 4, component: <RetirementPlanningPage /> },
          { index: 5, component: <TaxServicesPage /> },
          { index: 6, component: <OtherServices /> },
          { index: 7, component: <Contact /> },
        ].map((item) => (
          <TabPanel key={item.index} value={tab} index={item.index}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
              {item.component}
            </Container>
          </TabPanel>
        ))}
      </Box>

      <ContactFooter />
      <AccessibilityMenu />
    </Box>
  );
}
