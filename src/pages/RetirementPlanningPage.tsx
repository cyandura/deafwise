import React from 'react';

const RetirementPlanningPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="section-tag">Planning</div>
        <h1 className="page-hero-title">Pre-Retirement Planning</h1>
        <p className="page-hero-sub">
          It's never too late to learn and make plans for your future.
        </p>
      </div>
    </section>

    <div className="page-content">
      <div className="section-header">
        <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>Do you have…</h2>
      </div>

      <ul className="themed-list green-accent">
        <li>A Traditional IRA (through work or personal account)?</li>
        <li>A Roth IRA (through work or personal account)?</li>
        <li>Money set aside from each paycheck going into your retirement account?</li>
      </ul>

      <div className="section-header" style={{ marginTop: '40px' }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>Have you thought about…</h2>
      </div>

      <ul className="themed-list green-accent">
        <li>What you want to do after you retire?</li>
        <li>Staying in your current house?</li>
        <li>Paying off your house before retirement?</li>
        <li>Updating or fixing your house before retirement?</li>
        <li>Moving to a warmer climate (like Florida or Arizona) for your health?</li>
        <li>Selling your house and moving to a smaller home?</li>
      </ul>
    </div>
  </>
);

export default RetirementPlanningPage;
