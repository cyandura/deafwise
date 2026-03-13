import React from 'react';
import { Box, Typography } from '@mui/material';

const RetirementPlanningPage: React.FC = () => (
  <Box>

    <div className="tabHeader">
      <Typography variant="h3">
        Let's Talk About Your Pre-Retirement Plan
      </Typography >
    </div>
    
    <Typography className='bodyText'>
      It's never too late to learn and make plans for your future.
      Do you have…
      <ul className ='content-list'>
        <li>✅ A Traditional IRA (through work or personal account)?</li>
        <li>✅ A Roth IRA (through work or personal account)?</li>
        <li>✅ Money set aside from each paycheck going into your retirement account?</li>
      </ul>

      <Typography className='content-subheading' variant="h4">Have you thought about…</Typography>

      <ul className ='content-list'>
        <li>✅ What you want to do after you retire?</li>
        <li>✅ Staying in your current house?</li>
        <li>✅ Paying off your house before retirement?</li>
        <li>✅ Updating or fixing your house before retirement?</li>
        <li>✅ Moving to a warmer climate (like Florida or Arizona) for your health?</li>
        <li>✅ Selling your house and moving to a smaller home?</li>
      </ul>
    </Typography>
  </Box>
);

export default RetirementPlanningPage; 