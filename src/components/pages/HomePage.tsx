import React from 'react';
import { Box, Typography } from '@mui/material';
import UnderConstruction from '../UnderConstruction';

const HomePage: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader">
      Our Services
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      DeafWise Planning &amp; Taxes is dedicated to empowering you with the knowledge and tools needed to
      manage your finances effectively. We guide clients through budgeting, retirement planning, income
      tax services, Michigan college savings plans, and help you navigate the differences between Health
      Savings Accounts (HSA) and Flexible Spending Accounts (FSA). Our expertise extends to providing
      insights on co-signers, annual credit report checks, Medicare plan selection, understanding
      Explanation of Benefits (EOB), pre-employment procedures such as W4 forms, funeral pre-
      arrangement planning, adjusting work allowances, identifying unclaimed property, searching for lost
      and found old retirement, and educating senior citizens on personal safety.
    </Typography>
  </Box>
);

export default HomePage; 