import React from 'react';
import Dropdown from '../components/Dropdown';

const FAQ: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="section-tag">Support</div>
        <h1 className="page-hero-title">Frequently Asked Questions</h1>
        <p className="page-hero-sub">
          Common questions about taxes, retirement, credit, and financial planning.
        </p>
      </div>
    </section>

    <div className="page-content">
      <Dropdown title="Are you ready to retire? Have you done your research and planning at least 10 years in advance? Why or why not?">
        <p>There are several things you need to prepare for, for example:</p>
        <ul className="themed-list">
          <li>Where do I want to retire? Stay here, move to another state, or downsize to a smaller home?</li>
          <li>Budgeting: Track your monthly expenses carefully, because you will receive only one pension check and one Social Security check each month (or, if you have investments, you may need to plan how to pro-rate them monthly).</li>
          <li>And more: There are additional important topics to cover.</li>
        </ul>
        <p>We can set up appointments to go over your retirement planning in detail.</p>
      </Dropdown>

      <Dropdown title="At your current job, do you have a Traditional IRA account?">
        <p>
          I suggest opening a Roth IRA through work if it's offered, and stopping contributions to your Traditional IRA.
        </p>
        <br />
        <p>
          Why? Because when you retire, money in a Roth IRA does not count as "provisional income" when you file your income tax return. Provisional income includes:
        </p>
        <ul className="themed-list bullets">
          <li>Work pension (1099-R)</li>
          <li>Social Security benefits (up to 85% may be taxable)</li>
          <li>Any investment, capital gains or interest income, depending on your total income, filing status, and standard deduction</li>
        </ul>
        <p>Since Roth IRA money does not count as provisional income, it is a huge advantage for tax planning in retirement.</p>
      </Dropdown>

      <Dropdown title="Do you get 1099-MISC from your work? You may have to pay double taxes!">
        <p>Be smart—set aside 12% to 15% of your income for taxes.</p>
      </Dropdown>

      <Dropdown title="Do you get a 1099-C (Cancellation of Debt)? Do you know what that means?">
        <p>
          It means you worked with your credit card company or another creditor to close your account.
          But — the amount you no longer owe becomes <b>"taxable"</b> income on your tax return for that year.
        </p>
      </Dropdown>

      <Dropdown title="Do you know your Credit Score?">
        <p>
          At the top of your credit report, you will see your payment history. Paying bills on time helps keep your score strong.
          If you miss even one payment past the due date, it will show as a tally mark ("1") and can lower your credit score.
          A lower credit score is not good—it's always better to have a higher score.
        </p>
      </Dropdown>

      <Dropdown title="Are you paying rent for your apartment or house with only SSDI or SSI?">
        <p>You may qualify for a refund through the Michigan Homestead Property Tax Credit.</p>
        <div className="cta-banner">
          <span>💡</span>
          <p>Check with Deaf Tax Lady to learn more!</p>
        </div>
      </Dropdown>

      <Dropdown title="Do you check your annual free credit report every year?">
        <p>
          <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noopener noreferrer">annualcreditreport.com</a>
        </p>
        <br />
        <p>
          You should! Make sure all your creditors (Macy's, Visa, car loan, Discover, etc.) are correct.
          This helps protect you—so no one is using your SSN# and your good credit to get approved for things like a car loan.
        </p>
      </Dropdown>

      <Dropdown title="Did you know that your 401(k) (Traditional) retirement savings is not all your money?">
        <p>
          It's both your money AND the government's money. Why? Because a Traditional 401(k)
          means you will have to pay taxes later—when you retire and begin withdrawing.
        </p>
      </Dropdown>
    </div>
  </>
);

export default FAQ;
