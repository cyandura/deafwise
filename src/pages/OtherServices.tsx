import React from 'react';
import Dropdown from '../components/Dropdown';

const OtherServices: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="section-tag">More</div>
        <h1 className="page-hero-title">Other Services</h1>
        <p className="page-hero-sub">
          Additional ways I can help — from tech guidance to ASL consulting.
        </p>
      </div>
    </section>

    <div className="page-content">
      <Dropdown title="For Senior Citizens">
        <p>
          Do you want to join a small training group to learn how to use your iPhone — or is there anything else you'd like to learn together?
          Let's talk!
        </p>
      </Dropdown>

      <Dropdown title="ASL Consultant Feedback – Test Preparation">
        <p>
          Are you preparing for the <b>BEI State Test</b> or the <b>RID Test</b>?
          I offer <b>personalized feedback</b> on your signing skills to help you determine if you are ready.
        </p>
        <br />
        <p>
          In the past, several <b>ASL students</b> asked me to review their signing before taking these exams.
          From those requests, my work as an ASL Consultant began.
        </p>
        <div className="cta-banner" style={{ marginTop: '16px' }}>
          <span>📩</span>
          <p>Contact me by email to schedule a review session and receive honest, supportive feedback to help you succeed.</p>
        </div>
      </Dropdown>

      <Dropdown title="Which Computer Should You Buy: PC or Mac?">
        <p>
          If you are deciding between a <b>PC (Windows)</b> or a <b>Mac (Apple)</b> laptop, here's something to consider:
        </p>
        <br />
        <p><b>Why a Mac?</b></p>
        <ul className="themed-list">
          <li>You can bring your MacBook directly to the <b>Apple Store</b> in your local shopping mall.</li>
          <li>Trained technicians will look at it and repair it—if it's under warranty, the service is free; otherwise, you can pay for the part that needs replacement.</li>
          <li>In-person service is fast, reliable, and convenient.</li>
        </ul>

        <p><b>What about a PC?</b></p>
        <ul className="themed-list">
          <li>If you buy an HP or another PC laptop, the main support option is to call the company's <b>1-800 number</b>.</li>
          <li>It can be frustrating to go through the automated system before you even reach the right department or a live person.</li>
          <li>Getting repairs or answers often takes longer and feels less personal.</li>
        </ul>

        <div className="cta-banner">
          <span>✅</span>
          <p>A Mac laptop is often the better choice if you want easy, local, face-to-face support in addition to quality performance.</p>
        </div>
      </Dropdown>
    </div>
  </>
);

export default OtherServices;
