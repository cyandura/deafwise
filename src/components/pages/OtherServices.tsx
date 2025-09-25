import React from 'react';
import { Box, Typography } from '@mui/material';
import UnderConstruction from '../UnderConstruction';
import ContactFooter from '../ContactFooter';

const OtherServices: React.FC = () => (
  <Box>

    <Typography variant="h3" className="tabHeader" sx={{mb:2}}>
      Other Services
    </Typography>
    <ContactFooter/>
  </Box>
  
);

export default OtherServices; 