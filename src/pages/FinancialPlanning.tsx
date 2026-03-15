import React from 'react';

const FinancialPlanning: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="section-tag">Services</div>
        <h1 className="page-hero-title">Financial Planning</h1>
        <p className="page-hero-sub">
          Supporting the Deaf community with everyday money decisions and long-term financial wellness.
        </p>
      </div>
    </section>

    <div className="page-content">
      <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-section)', marginBottom: '24px' }}>
        I offer <b>financial planning services</b> to support the Deaf community with everyday money decisions. Together, we can look at:
      </p>

      <ul className="themed-list green-accent">
        <li><b>Budgeting</b>How to plan your money each paycheck so it lasts.</li>
        <li><b>HSA vs. FSA</b>Learn the difference between Health Savings Account (HSA) and Flexible Spending Account (FSA). Which one fits you best? What should you know before you retire?</li>
        <li><b>College Savings (MESP)</b>Michigan Education Savings Plan (MESP) can help save for your child's future college at today's cost.</li>
        <li><b>Pre-Funeral Plans</b>I can guide you in making choices, such as where to be buried and how pre-paid plans work.</li>
        <li><b>Consignment</b>Understand the pros and cons. Know the risks before you sign an agreement for someone.</li>
        <li><b>Free Credit Report</b>Check your credit report once a year to make sure all accounts are really yours (and not someone using your SS#).</li>
        <li><b>Job Paperwork</b>Need help filling out pre-employment forms, W-4 allowance, retirement plan, or health insurance? I can walk you through it.</li>
        <li><b>Mortgage Refinancing</b>Should you refinance your house? We can talk about the pros(+) and cons(-) and see if it works with your budget.</li>
      </ul>

      <div className="cta-banner">
        <span>💡</span>
        <p>If your question is not on the list — ask me! I will do my best to help.</p>
      </div>
    </div>
  </>
);

export default FinancialPlanning;
