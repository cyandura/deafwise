import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactFooter from '../components/ContactFooter';

const Contact: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader" sx={{mb:2}}>
      Contact Me
    </Typography>
    <img src="images\ContactImage.jpg" alt="Connie" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
    <ContactFooter/>
  </Box>
  
);

export default Contact; 