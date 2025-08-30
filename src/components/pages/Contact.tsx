import React from 'react';
import { Box, Typography } from '@mui/material';
import UnderConstruction from '../UnderConstruction';

const Contact: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader">
    Contact Us
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      For more information or to get in touch, contact Deaf Tax Lady at DeafWise Planning & Taxes 
      by email at <a href="mailto:deaftaxlady@gmail.com">deaftaxlady@gmail.com</a>
    </Typography>
  </Box>
  
);

export default Contact; 