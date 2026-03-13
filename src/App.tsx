import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
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

const menuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Financial Planning", path: "/financial-planning" },
  { label: "FAQ", path: "/faq" },
  { label: "Retirement Planning", path: "/retirement-planning" },
  { label: "Tax Services", path: "/tax-services" },
  { label: "Other Services", path: "/other-services" },
  { label: "Contact", path: "/contact" },
];

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));
  const location = useLocation();

  const currentItem = menuItems.find(item => item.path === location.pathname) || menuItems[0];

  const handleNav = () => {
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* NAV */}
      {isMobile ? (
        <div className="mobile-nav-bar">
          <Link to="/" className="nav-logo-link" onClick={handleNav}>
            <img src="images/LogoSVG.svg" alt="DeafWise – Home" className="nav-logo" />
          </Link>
          <span className="current-page">{currentItem.label}</span>
          <button className="burger-btn" onClick={() => setDrawerOpen(!drawerOpen)} aria-label="open menu">
            <MenuIcon />
          </button>
        </div>
      ) : (
        <nav className="main-nav">
          <Link to="/" className="nav-logo-link" onClick={handleNav}>
            <img src="images/LogoSVG.svg" alt="DeafWise – Home" className="nav-logo" />
          </Link>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link${location.pathname === item.path ? ' active' : ''}`}
              onClick={handleNav}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
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
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleNav}
              selected={location.pathname === item.path}
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
      <Box className="content-box" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div className="container"><About /></div>} />
          <Route path="/financial-planning" element={<div className="container"><FinancialPlanning /></div>} />
          <Route path="/faq" element={<div className="container"><FAQ /></div>} />
          <Route path="/retirement-planning" element={<div className="container"><RetirementPlanningPage /></div>} />
          <Route path="/tax-services" element={<div className="container"><TaxServicesPage /></div>} />
          <Route path="/other-services" element={<div className="container"><OtherServices /></div>} />
          <Route path="/contact" element={<div className="container"><Contact /></div>} />
        </Routes>
      </Box>

      <ContactFooter />
      <AccessibilityMenu />
    </Box>
  );
}
