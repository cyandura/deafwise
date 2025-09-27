import React from 'react';
import { Box, Typography } from '@mui/material';

const ContactFooter: React.FC = () => (
  <Box sx={{
    bgcolor: '#bca0ff',
    py: 2,
    mt: 2,
    textAlign: 'center',
    color: 'white',
    width: '100%'
  }}>
    <Typography sx={{
      fontSize: '1.2rem'
    }}>
      📩 Let's talk!
      We can set up a time to discuss your plan, 
      feel free to contact me by email: <a href="mailto:deaftaxlady@gmail.com" style={{ color: 'white' }}>deaftaxlady@gmail.com</a>
      <br/>  All rights reserved.<br/> DeafWise Planning & Taxes ®
    </Typography>
  </Box>
);
export default ContactFooter