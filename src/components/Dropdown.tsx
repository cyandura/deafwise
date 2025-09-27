import React, { useState } from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box
        onClick={handleToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          padding: '12px 16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          '&:hover': {
            backgroundColor: '#eeeeee',
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {title}
        </Typography>
        <IconButton size="small" sx={{ color: '#666' }}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      
      <Collapse in={isOpen}>
        <Box sx={{ 
          padding: '16px',
          backgroundColor: '#fafafa',
          border: '1px solid #e0e0e0',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px'
        }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Dropdown;
