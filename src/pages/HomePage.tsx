import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactFooter from '../components/ContactFooter';

const HomePage: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader">
      What I Offer
    </Typography>
    
    <Typography className='bodyText' variant="body1" sx={{ mt: 2 }}>
      DeafWise Planning & Taxes
      I am dedicated to empowering you with the knowledge and tools to manage your finances effectively.
      I can help you with:
    
      <ul style={{ listStyle: 'none' }}>
        <li>✅ Budgeting</li>
        <li>✅ Retirement planning</li>
        <li>✅ Income tax services</li>
        <li>✅ Michigan college savings plans (MESP 529)</li>
        <li>✅ Health Savings Accounts (HSA) vs. Flexible Spending Accounts (FSA)</li>
        <li>✅ Starting a Small Business (Schedule C)</li>
        <li>✅ Understanding co-signers risk</li>
        <li>✅ Annual credit report checks</li>
        <li>✅ Medicare plan selection</li>
        <li>✅ Explanation of Benefits (EOB) review</li>
        <li>✅ Pre-employment forms (such as W-4)</li>
        <li>✅ Funeral pre-arrangement planning</li>
        <li>✅ Adjusting work allowances</li>
        <li>✅ Identifying unclaimed property</li>
        <li>✅ Searching for old/lost retirement accounts</li>
        <li>✅ Personal safety education for senior citizens</li>
      </ul>
    </Typography>
    <Typography className='bodyText' sx ={{ mt: 2}}>
      ✨ <b>All services are offered at affordable rates.</b>
    </Typography>
    <ContactFooter/>
    
  </Box>
);

export default HomePage; 