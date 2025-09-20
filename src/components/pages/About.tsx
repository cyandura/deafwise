import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader">
      My Story
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
      
      I am proud to operate DeafWise Planning & Taxes as a Deaf-owned side business.
      <p/>

      I earned my <b>BBA in Finance</b> from Walsh College in Troy, Michigan, along with a <b>Certificate of Finance</b> (nine graduate credits). I also hold dual <b>Associate degrees</b> in Business Administration and Accounting from Oakland Community College.
      <p/>
      My professional experience includes working at <b>H&R Block</b> for two years (1999–2000) and serving as a <b>Volunteer Income Tax Assistance (VITA)</b> preparer for seven years—one year in Pontiac, MI, and six years in Indianapolis, IN. In addition, I have provided <b>income tax preparation for family members and Deaf taxpayers for over 25 years.</b>
      <p/>
      I am passionate about helping and educating the Deaf community on <b>income taxes, unclaimed property, retirement planning, and many other financial topics.</b> I have supported Deaf clients across Michigan, Indiana, and beyond.
      <p/>
      In addition, I have volunteered as a Deaf Interpreter (DI) for over 30 years, assisting with communication between Deaf and hearing individuals throughout the community.
      <p/>
      To make it easier for my clients, I am available to meet your needs after 6:00 PM on weekdays or on weekends.
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <img src="images\deaftaxlady.jpg" alt="Connie" width={400} />
    </Box>
    
  </Box>
  
);

export default About; 