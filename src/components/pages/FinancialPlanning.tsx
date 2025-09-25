import React from 'react';
import ContactFooter from '../ContactFooter';
import { Box, Typography } from '@mui/material';

const FinancialPlanning: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader" sx={{mb:2}}>
        Financial Planning
    </Typography>
    <ContactFooter/>
  </Box>
  
);

export default FinancialPlanning; 