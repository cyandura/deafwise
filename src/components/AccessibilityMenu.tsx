import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  FormControlLabel,
  Typography,
  Divider,
  Slider,
  Tooltip,
  Chip
} from '@mui/material';
import {
  Accessibility as AccessibilityIcon,
  TextIncrease as TextIncreaseIcon,
  Contrast as ContrastIcon,
  Link as LinkIcon,
  FormatLineSpacing as SpacingIcon,
  Close as CloseIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

interface AccessibilitySettings {
  biggerText: boolean;
  highContrast: boolean;
  highlightLinks: boolean;
  fontSize: number;
}

const AccessibilityMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    biggerText: false,
    highContrast: false,
    highlightLinks: false,
    fontSize: 100
  });

  const open = Boolean(anchorEl);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Apply settings to the document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply bigger text
    if (newSettings.biggerText) {
      root.style.setProperty('--accessibility-font-size', `${newSettings.fontSize}%`);
      root.classList.add('accessibility-bigger-text');
    } else {
      root.style.removeProperty('--accessibility-font-size');
      root.classList.remove('accessibility-bigger-text');
    }

    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('accessibility-high-contrast');
    } else {
      root.classList.remove('accessibility-high-contrast');
    }

    // Apply highlight links
    if (newSettings.highlightLinks) {
      root.classList.add('accessibility-highlight-links');
    } else {
      root.classList.remove('accessibility-highlight-links');
    }
  };

  // Save settings to localStorage and apply
  const updateSettings = (newSettings: AccessibilitySettings) => {
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleBiggerText = () => {
    updateSettings({
      ...settings,
      biggerText: !settings.biggerText
    });
  };

  const handleToggleHighContrast = () => {
    updateSettings({
      ...settings,
      highContrast: !settings.highContrast
    });
  };

  const handleToggleHighlightLinks = () => {
    updateSettings({
      ...settings,
      highlightLinks: !settings.highlightLinks
    });
  };

  const handleFontSizeChange = (event: Event, newValue: number | number[]) => {
    const fontSize = Array.isArray(newValue) ? newValue[0] : newValue;
    updateSettings({
      ...settings,
      fontSize
    });
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      biggerText: false,
      highContrast: false,
      highlightLinks: false,
      fontSize: 100
    };
    updateSettings(defaultSettings);
  };

  return (
    <>
      <Tooltip title="Accessibility Menu">
        <IconButton
          onClick={handleClick}
          size="large"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: '#8161cc',
            color: 'white',
            '&:hover': {
              backgroundColor: '#6a4f9f'
            },
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          aria-label="Open accessibility menu"
        >
          {settings.biggerText || settings.highContrast || settings.highlightLinks ? (
            <SettingsIcon />
          ) : (
            <AccessibilityIcon />
          )}
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 400,
            maxHeight: '80vh',
            overflow: 'auto',
            zIndex: 1300,
            px: 3
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        BackdropProps={{
          sx: {
            backgroundColor: settings.highContrast ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)',
            zIndex: 1299
          }
        }}
        disableScrollLock={true}
        disablePortal={false}
      >
        <Box sx={{ p: 2, pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h6" sx={{ color: '#8161cc', fontWeight: 'bold' }}>
              Accessibility
            </Typography>
            <IconButton size="small" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Customize your browsing experience
          </Typography>
        </Box>

        <Divider />

        {/* Bigger Text */}
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <TextIncreaseIcon sx={{ mr: 1, color: '#8161cc' }} />
            <Typography variant="subtitle2">Bigger Text</Typography>
            {settings.biggerText && <Chip label="ON" size="small" color="primary" sx={{ ml: 1 }} />}
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={settings.biggerText}
                onChange={handleToggleBiggerText}
                color="primary"
              />
            }
            label="Increase text size"
          />
          {settings.biggerText && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" gutterBottom>
                Font Size: {settings.fontSize}%
              </Typography>
              <Slider
                value={settings.fontSize}
                onChange={handleFontSizeChange}
                min={100}
                max={200}
                step={10}
                marks={[
                  { value: 100, label: '100%' },
                  { value: 150, label: '150%' },
                  { value: 200, label: '200%' }
                ]}
                valueLabelDisplay="auto"
              />
            </Box>
          )}
        </Box>

        <Divider />

        {/* High Contrast */}
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <ContrastIcon sx={{ mr: 1, color: '#8161cc' }} />
            <Typography variant="subtitle2">High Contrast</Typography>
            {settings.highContrast && <Chip label="ON" size="small" color="primary" sx={{ ml: 1 }} />}
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={settings.highContrast}
                onChange={handleToggleHighContrast}
                color="primary"
              />
            }
            label="Increase contrast for better readability"
          />
        </Box>

        <Divider />

        {/* Highlight Links */}
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LinkIcon sx={{ mr: 1, color: '#8161cc' }} />
            <Typography variant="subtitle2">Highlight Links</Typography>
            {settings.highlightLinks && <Chip label="ON" size="small" color="primary" sx={{ ml: 1 }} />}
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={settings.highlightLinks}
                onChange={handleToggleHighlightLinks}
                color="primary"
              />
            }
            label="Highlight all links with background"
          />
        </Box>

        <Divider />

        {/* Reset Button */}
        <Box sx={{ p: 2 }}>
          <MenuItem onClick={resetSettings} sx={{ justifyContent: 'center', color: '#8161cc' }}>
            Reset All Settings
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default AccessibilityMenu;
