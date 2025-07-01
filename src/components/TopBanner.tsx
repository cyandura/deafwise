import React from 'react';
import { Box, Typography } from '@mui/material';

const TopBanner: React.FC = () => (
  <Box sx={{ 
    bgcolor: '#17024a',
    py: 4, 
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <Typography variant="h3" component="h1" gutterBottom>
      DeafWise Planning & Taxes
    </Typography>
    <Typography variant="h5" color="error">
      <a href="mailto:deaftaxlady@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
        deaftaxlady@gmail.com
      </a>
    </Typography>
  </Box>
);

export default TopBanner; 