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
    <img src="images/DeafWiseEditedDarkerGreen.png" alt="DeafWise Planning & Taxes" width={450} />
  </Box>
);

export default TopBanner; 