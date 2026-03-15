import React from 'react';

const TaxServicesPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="section-tag">Services</div>
        <h1 className="page-hero-title">Income Tax Preparation</h1>
        <p className="page-hero-sub">
          Over 25 years of experience preparing individual income tax returns.
        </p>
      </div>
    </section>

    <div className="page-content">
      <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-section)', marginBottom: '24px' }}>
        I have prepared returns with the following forms:
      </p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📄</div>
          <div className="service-text"><b>W-2</b> — Wage and Tax Statement</div>
        </div>
        <div className="service-card">
          <div className="service-icon">🏛️</div>
          <div className="service-text"><b>SSA-1099</b> — Social Security Benefit Statement</div>
        </div>
        <div className="service-card">
          <div className="service-icon">💵</div>
          <div className="service-text"><b>1099-INT</b> — Interest Income</div>
        </div>
        <div className="service-card">
          <div className="service-icon">🏦</div>
          <div className="service-text"><b>1099-R</b> — Distributions from pensions, annuities, retirement …</div>
        </div>
        <div className="service-card">
          <div className="service-icon">💳</div>
          <div className="service-text"><b>1099-C</b> — Cancellation of Debt</div>
        </div>
        <div className="service-card">
          <div className="service-icon">📋</div>
          <div className="service-text"><b>1099-MISC</b> — Miscellaneous Income</div>
        </div>
        <div className="service-card">
          <div className="service-icon">🏠</div>
          <div className="service-text"><b>1098-M</b> — Mortgage Interest Statement</div>
        </div>
        <div className="service-card">
          <div className="service-icon">💰</div>
          <div className="service-text"><b>1099-K</b> — Payment Card and Third-Party Transactions</div>
        </div>
        <div className="service-card">
          <div className="service-icon">🎓</div>
          <div className="service-text"><b>1098-T</b> — Tuition Statement</div>
        </div>
        <div className="service-card">
          <div className="service-icon">📝</div>
          <div className="service-text"><b>…and more forms</b></div>
        </div>
      </div>

      <div className="info-card" style={{ marginTop: '36px' }}>
        <div className="info-card-title">
          <span style={{ fontSize: '1.5rem' }}>⚠️</span>
          Important Disclaimer
        </div>
        <div className="info-card-body">
          <p>
            As a tax preparer, I can only make your tax return correct if you give me all the right papers. I am not responsible for mistakes,
            missing forms, or problems if you do not give me full and correct information (like income forms or bookkeeping records).
            It is your job to keep and share all the papers I need to prepare your taxes.
          </p>
          <br />
          <p>
            As a tax preparer, I also expect clients to treat me <b>with respect in a professional way.</b> If not, I can stop my service anytime.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TaxServicesPage;
