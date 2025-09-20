import React from 'react';
import { Box, Typography } from '@mui/material';

const TopBanner: React.FC = () => (
  <Box sx={{ 
    bgcolor: '#bca0ff',
    py: 2, 
    textAlign: 'center',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <img src="images\Deafwise_Planning_Taxes_Square_Logo.png" alt="DeafWise Planning & Taxes" width={300} />
  </Box>
);

export default TopBanner; 