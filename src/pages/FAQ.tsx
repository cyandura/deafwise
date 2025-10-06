import React from 'react';
import { Box, Typography } from '@mui/material';
import Dropdown from '../components/Dropdown';

const FAQ: React.FC = () => (
  <Box>

    <Typography variant="h3" className="tabHeader" sx={{mb:2}}>
      Frequently Asked Questions
    </Typography>


    <Dropdown title="Are you ready to retire? Have you done your research and planning at least 10 years in advance? Why or why not?">
      <Typography className="bodyText">
        There are several things you need to prepare for, for example:
        <ul>
          <li>
            Where do I want to retire? Stay here, move to another state, or downsize to a smaller home?
          </li>
          <li>
            Budgeting: Track your monthly expenses carefully, because you will receive only one pension check 
            and one Social Security check each month (or, if you have investments, you may need to plan how to pro-rate them monthly).
          </li>
          <li>
            And more: There are additional important topics to cover.
          </li>
        </ul>
       
        
        We can set up appointments to go over your retirement planning in detail.
      </Typography>
    </Dropdown>
    

    <Dropdown title="At your current job, do you have a Traditional IRA account?">
      <Typography  className="bodyText">
        I suggest opening a Roth IRA through work if it’s offered, and stopping contributions to your Traditional IRA.
        <p/>
        Why? Because when you retire, money in a Roth IRA does not count as “provisional income” when you file your income tax return.
        Provisional income includes:
        <ul>
          <li>
            Work pension (1099-R)
          </li>
          <li>
            Social Security benefits (up to 85% may be taxable)
          </li>
          <li>
            Any investment, capital gains or interest income, depending on your total income, filing status, and standard deduction
          </li>
        </ul>
        Since Roth IRA money does not count as provisional income, it is a huge advantage for tax planning in retirement.
      </Typography>
    </Dropdown>
    <Dropdown title="Do you get 1099-MISC from your work? 👉 You may have to pay double taxes!">
      <Typography  className="bodyText">
        Be smart—set aside 12% to 15% of your income for taxes.
      </Typography>
    </Dropdown>
    <Dropdown title="Do you get a 1099-C (Cancellation of Debt)? 👉 Do you know what that means?">
      <Typography  className="bodyText">
        It means you worked with your credit card company or another creditor to close your account. 
        But — the amount you no longer owe becomes taxable income on your tax return for that year.
      </Typography>
    </Dropdown>
    <Dropdown title="Do you know your Credit Score?">
      <Typography  className="bodyText">
        At the top of your credit report, you will see your payment history. Paying bills on time helps keep your score strong. 
        If you miss even one payment past the due date, it will show as a tally mark (“1”) and can lower your credit score. 
        A lower credit score is not good—it’s always better to have a higher score.
      </Typography>
    </Dropdown>
    <Dropdown title="Are you paying rent for your apartment or house with only SSDI or SSI?">
      <Typography  className="bodyText">
        You may qualify for a refund through the Michigan Homestead Property Tax Credit.
        <p/>
        👉 Check with Deaf Tax Lady to learn more!

      </Typography>
    </Dropdown>
    <Dropdown title="Do you check your annual free credit report every year?">
      <Typography  className="bodyText">
        <a href="https://www.annualcreditreport.com/index.action">https://www.annualcreditreport.com/index.action</a>
        <p/>
        You should!  Make sure all your creditors (Macy’s, Visa, car loan, Discover, etc.) are correct. 
        This helps protect you—so no one is using your SSN# and your good credit to get approved for things like a car loan.
      </Typography>
    </Dropdown>
    <Dropdown title="Did you know that your 401(k) (Traditional) retirement savings is not all your money (depending on your Adjusted Gross Income)?">
      <Typography  className="bodyText">
        It’s both your money AND the government’s money. Why? Because a Traditional 401(k) 
        means you will have to pay taxes later—when you retire and begin withdrawing.
      </Typography>
    </Dropdown>
  </Box>
  
);

export default FAQ; 