import React from 'react';
import { Box, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const TaxServicesPage: React.FC = () => (
  <Box>
    <Typography >
      <Typography variant="h3" className="tabHeader">
        Let's Talk About Your Income Tax Preparation
      </Typography>
      <Typography className='bodyText'>
        I have <b>over 25 years of experience</b> preparing individual income tax returns.<br/>
        I have prepared returns with the following forms:<br/>
        <ul>
          <li><b>W-2</b> - Wage and Tax Statement</li>
          <li><b>SSA-1099</b> - Social Security Benefit Statement</li>
          <li><b>1099-INT</b> - Interest Income</li>
          <li><b>1099-R</b> - Distributions from pensions, annuities, retirement or profit-sharing … </li>
          <li><b>1099-C</b> - Cancellation of Debt</li>
          <li><b>1099-MISC</b> - Miscellaneous Income</li>
          <li><b>1098-M</b> - Mortgage Interest Statement</li>
          <li><b>1099-K</b> - Payment Card and Third-Party Network Transactions</li>
          <li><b>1098-T</b> - Tuition Statement</li>
          <li><b>…and plus, more forms</b></li>
        </ul>

      </Typography>


      <Box className='bodyText' sx={{ 
        border: '2px solid #8161cc', 
        borderRadius: '8px', 
        padding: '16px', 
        margin: '16px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <WarningIcon sx={{ color: '#ff9800', fontSize: '3rem' }} />
          <b>Important Disclaimer</b>
        </Typography>

        As a tax preparer, I can only make your tax return correct if you give me all the right papers. I am not responsible for mistakes,
        missing forms, or problems if you do not give me full and correct information (like income forms or bookkeeping records). 
        It is your job to keep and share all the papers I need to prepare your taxes.<br/><br/>
        As a tax preparer, I also expect clients to treat me <b>with respect in a professional way.</b> If not, I can stop my service anytime.
      </Box>
    </Typography>
  </Box>
  
);

export default TaxServicesPage; 