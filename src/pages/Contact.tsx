import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact: React.FC = () => (
  <Box>
    <div className="tabHeader">
      <Typography variant="h3" sx={{mb:2}}>
        Contact Me
      </Typography>
    </div>
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-card-label">💬 Get in Touch</div>
        <h3>Let's talk about your plan</h3>
        <p>We can set up a time to discuss your financial goals. Feel free to reach out — I'm here to help.</p>
        <a href="mailto:deaftaxlady@gmail.com" className="contact-email">
          <div className="contact-email-icon">✉️</div>
          deaftaxlady@gmail.com
        </a>
      </div>
      <img src="images\ContactImage.jpg" alt="contact" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '28px' }} />
    </div>

  </Box>
  
);

export default Contact; 