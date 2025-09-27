import React from 'react';
import ContactFooter from '../components/ContactFooter';
import { Box, Typography } from '@mui/material';

const FinancialPlanning: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader">
      Let's Talk About Your Financial Planning
    </Typography>
    
    <Typography className='bodyText' sx={{ mt: 2 }}>
      I offer <b>financial planning services</b> to support the Deaf community with everyday money decisions. Together, we can look at:
    

    <ul style={{ listStyle: 'none' }}>
      <li>✅ <b>Budgeting</b> - How to plan your money each paycheck so it lasts.</li>
      <li>✅ <b>HSA vs. FSA</b> - Learn the difference between Health Savings Account (HSA) and Flexible Spending Account (FSA). Which one fits you best? What should you know before you retire?</li>
      <li>✅ <b>College Savings (MESP)</b> - Michigan Education Savings Plan (MESP) can help save for your child's future college at today's cost.</li>
      <li>✅ <b>Pre-Funeral Plans</b> - I can guide you in making choices, such as where to be buried and how pre-paid plans work.</li>
      <li>✅ <b>Consignment</b> - Understand the pros and cons. Know the risks before you sign an agreement for someone.</li>
      <li>✅ <b>Free Credit Report</b> - Check your credit report once a year to make sure all accounts are really yours (and not someone using your SS#).</li>
      <li>✅ <b>Job Paperwork</b> - Need help filling out pre-employment forms, W-4 allowance, retirement plan, or health insurance? I can walk you through it.</li>
      <li>✅ <b>Mortgage Refinancing</b> - Should you refinance your house? We can talk about the pros and cons and see if it works with your budget.</li>
    </ul>

    </Typography>

    <Typography className='bodyText' sx={{ my: 2 }}>
      💡 <b>If your question is not on the list — ask me!</b> I will do my best to help.
    </Typography>
    <ContactFooter/>
  </Box>
);

export default FinancialPlanning; 