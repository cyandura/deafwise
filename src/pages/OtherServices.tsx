import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactFooter from '../components/ContactFooter';
import Dropdown from '../components/Dropdown';

const OtherServices: React.FC = () => (
  <Box>

    <Typography variant="h3" className="tabHeader" sx={{mb:2}}>
      Other Services
    </Typography>


    <Dropdown title="For Senior Citizens">
      <Typography className="bodyText">
          Do you want to join a small training group to learn how to use your iPhone — or is there anything else you’d like to learn together?
          Let’s talk!
      </Typography>
    </Dropdown>
    

    <Dropdown title="ASL Consultant Feedback – Test Preparation">
      <Typography  className="bodyText">
        Are you preparing for the <b>BEI State Test</b> or the <b>RID Test</b>?
        I offer <b>personalized feedback</b> on your signing skills to help you determine if you are ready. 
        <p/>
        In the past, several <b>ASL students</b> asked me to review their signing before taking these exams. 
        From those requests, my work as an ASL Consultant began.
        <p/>
        📩 <b>Contact me by email</b> to schedule a review session and receive honest, supportive feedback to help you succeed.
      </Typography>
    </Dropdown>
    <Dropdown title="Which Computer Should You Buy: PC or Mac?">
      <Typography  className="bodyText">
      If you are deciding between a <b>PC (Windows)</b> or a <b>Mac (Apple)</b> laptop, here’s something to consider:
      <p/>
      <b>Why a Mac?</b>
      <ul>
        <li>You can bring your MacBook directly to the <b>Apple Store</b> in your local shopping mall.</li>
        <li>Trained technicians will look at it and repair it—if it’s under warranty, the service is free; otherwise, you can pay for the part that needs replacement.</li>
        <li>Meet In-person service is fast, reliable, and convenient.</li>
      </ul>
      <p/>
      <b>What about a PC?</b>
      <ul>
        <li>If you buy an HP or another PC laptop, the main support option is to call the company’s <b>1-800 number</b>.</li>
        <li>It can be frustrating to go through the automated system before you even reach the right department or a live person.</li>
        <li>Getting repairs or answers often takes longer and feels less personal.</li>
      </ul>
      <p/>
      ✅ Conclusion: A Mac laptop is often the better choice if you want <b>easy, local, face-to-face support</b> in addition to quality performance.
      </Typography>
    </Dropdown>
  </Box>
  
);

export default OtherServices; 