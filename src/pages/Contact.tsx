import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact: React.FC = () => (
  <Box>
    <div className="tabHeader">
      <Typography variant="h3" sx={{mb:2}}>
        Contact Me
      </Typography>
    </div>
    
    <img src="images\ContactImage.jpg" alt="contact" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
    <Typography className='bodyText'>
      Email: <a href="mailto:deaftaxlady@gmail.com">deaftaxlady@gmail.com</a>
    </Typography>

  </Box>
  
);

export default Contact; 