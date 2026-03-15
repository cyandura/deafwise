import React from 'react';

const Contact: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="section-tag">Reach Out</div>
        <h1 className="page-hero-title">Contact Me</h1>
        <p className="page-hero-sub">
          We can set up a time to discuss your financial goals. Feel free to reach out — I'm here to help.
        </p>
      </div>
    </section>

    <div className="page-content">
      <div className="contact-layout">
        <div className="contact-card">
          <div className="contact-card-label">💬 Get in Touch</div>
          <h3>Let's talk about your plan</h3>
          <p>We can set up a time to discuss your financial goals. Feel free to reach out — I'm here to help.</p>
          <a href="mailto:deaftaxlady@gmail.com" className="contact-email">
            <div className="contact-email-icon">✉️</div>
            deaftaxlady@gmail.com
          </a>
        </div>
        <img src="images/ContactImage.jpg" alt="contact" />
      </div>
    </div>
  </>
);

export default Contact;
