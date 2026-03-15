import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="logo-badge">
            <div className="logo-circle">
              <img src="images/LogoSVG.svg" alt="DeafWise Logo" />
            </div>
          </div>
          <div className="hero-text">
            <div className="hero-eyebrow">Financial Empowerment</div>
            <h1 className="hero-title">DeafWise<br />Planning &amp; Taxes</h1>
            <p className="hero-sub">
              Dedicated to empowering you with the knowledge and tools to manage your finances effectively — at affordable rates.
            </p>
            <a href="mailto:deaftaxlady@gmail.com" className="hero-cta">
              Let's Talk &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="home-main">
        {/* LEFT: Services */}
        <div>
          <div className="section-header">
            <div className="section-tag">What I Offer</div>
            <h2 className="section-title">Services Designed To<br /><em>Empower Your Finances</em></h2>
            <p className="section-intro">
              DeafWise Planning &amp; Taxes — I am dedicated to empowering you with the knowledge and tools to manage your finances effectively. I can help you with:
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💰</div>
              <div className="service-text">Budgeting</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🏦</div>
              <div className="service-text">Retirement planning</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🧾</div>
              <div className="service-text">Income tax services</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <div className="service-text">Michigan college savings plans (MESP 529)</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <div className="service-text">Health Savings Accounts (HSA) vs. Flexible Spending Accounts (FSA)</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <div className="service-text">Starting a Small Business (Schedule C)</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <div className="service-text">Understanding co-signers risk</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <div className="service-text">Annual credit report checks</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <div className="service-text">Medicare plan selection</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <div className="service-text">Explanation of Benefits (EOB) review</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <div className="service-text">Pre-employment forms (such as W-4)</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🕊️</div>
              <div className="service-text">Funeral pre-arrangement planning</div>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <div className="service-text">Adjusting work allowances</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <div className="service-text">Identifying unclaimed property</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <div className="service-text">Searching for old/lost retirement accounts</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <div className="service-text">Personal safety education for senior citizens</div>
            </div>
          </div>

          
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="sidebar">
          {/* Contact card */}
          <div className="contact-card">
            <div className="contact-card-label">💬 Get in Touch</div>
            <h3>Let's talk about your plan</h3>
            <p>We can set up a time to discuss your financial goals. Feel free to reach out — I'm here to help.</p>
            <a href="mailto:deaftaxlady@gmail.com" className="contact-email">
              <div className="contact-email-icon">✉️</div>
              deaftaxlady@gmail.com
            </a>
          </div>

          {/* Stats */}
          <div className="stats-card">
            <div className="stat">
              <div className="stat-num"><img src="images/mich.svg" alt="Michigan" style={{ height: '1em' }} /></div>
              <div className="stat-label">Michigan Based</div>
            </div>
            <div className="stat">
              <div className="stat-num"><img src="images/ily.svg" alt="I Love You in ASL" style={{ height: '1em' }} /></div>
              <div className="stat-label">Deaf Owned</div>
            </div>
            <div className="stat">
              <div className="stat-num">4+</div>
              <div className="stat-label">Services</div>
            </div>
            <div className="stat">
              <div className="stat-num">$</div>
              <div className="stat-label">Affordable</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="quick-links">
            <h4>Quick Links</h4>
            <div className="quick-links-grid">
              <Link className="quick-link" to="/about">About</Link>
              <Link className="quick-link" to="/financial-planning">Financial</Link>
              <Link className="quick-link" to="/retirement-planning">Retirement</Link>
              <Link className="quick-link" to="/tax-services">Tax Services</Link>
              <Link className="quick-link" to="/faq">FAQ</Link>
              <Link className="quick-link" to="/contact">Contact</Link>
            </div>
          </div>
          <div className="affordable-banner">
            <span>✨</span>
            <p>All services are offered at affordable rates.</p>
          </div>
        </aside>
      </main>
    </>
  );
};

export default HomePage;
