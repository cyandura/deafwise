import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact: React.FC = () => (
  <Box>
    <Typography variant="h3" className="tabHeader" sx={{mb:2}}>
      Contact Me
    </Typography>
    <img src="images\ContactImage.jpg" alt="contact" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
    <Typography className='bodyText'>
      Email: <a href="mailto:deaftaxlady@gmail.com">deaftaxlady@gmail.com</a>
    </Typography>

  </Box>
  
);

export default Contact; 