import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactFooter from '../ContactFooter';

const About: React.FC = () => (
  <Box>
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Typography variant="h2" className="tabHeader" sx ={{
        fontFamily: 'Great Vibes',
        }}>
        <b>My Story</b>
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
      {/* Left side - Image (40%) */}
      <Box sx={{ flex: '0 0 40%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <img src="images\deaftaxlady.jpg" alt="Connie" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
      </Box>
      
      {/* Right side - Content (60%) */}
      <Box sx={{ flex: '0 0 60%' }}>
        <Typography className='bodyText' variant="body1">
          I am proud to operate DeafWise Planning & Taxes as a Deaf-owned side business.
          <p/>

          I earned my <b>BBA in Finance</b> from Walsh College in Troy, Michigan, along with a <b>Certificate of Finance</b> (nine graduate credits). I also hold dual <b>Associate degrees</b> in Business Administration and Accounting from Oakland Community College.
          <p/>
          I worked at <b>Oakland Community College for four years</b>—serving as an <b>ASL Tutor for four years</b> and an <b>Accounting Tutor for two years.</b>
          <p/>
          My professional experience includes working at <b>H&R Block</b> for two years (1999–2000) and serving as a <b>Volunteer Income Tax Assistance (VITA)</b> preparer for seven years—one year in Pontiac, MI, and six years in Indianapolis, IN. In addition, I have provided <b>income tax preparation for family members and Deaf taxpayers for over 25 years.</b>
          <p/>
          I am passionate about helping and educating the Deaf community on <b>income taxes, unclaimed property, retirement planning, and many other financial topics.</b> I have supported Deaf clients across Michigan, Indiana, and beyond.
          <p/>
          In addition, I have volunteered as a Deaf Interpreter (DI) for over 30 years, assisting with communication between Deaf and hearing individuals throughout the community.
          <p/>
          To make it easier for my clients, I am available to meet your needs after 6:00 PM on weekdays or on weekends.
          <br/><br/>
        </Typography>
      </Box>
    </Box>
    <ContactFooter/>
  </Box>
);

export default About; 