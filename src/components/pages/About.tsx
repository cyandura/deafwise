import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader">
      About Us
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      At DeafWise Planning and Tax, we offer specialized educational guidance and financial advice,
      focusing on income tax and retirement planning. With a commitment to supporting deaf federal
      employees, I help clients make informed choices and finalize their retirement plans confidently.
      My experience included six years of volunteer experience with the IRS Volunteer Income Tax
      Assistance (VITA) program, assisting both hearing and deaf low-income families—one year in
      Pontiac, MI, and five years in Indianapolis, IN. I also mentor individuals in launching nonprofit
      organizations, reflecting our dedication to financial empowerment and community development.
      The mission at DeafWise Planning and Tax is to deliver clear, accessible, and dependable financial
      support to every Deaf client.
    </Typography>
    
  </Box>
  
);

export default About; 