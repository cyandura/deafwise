import React from 'react';

const About: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="section-tag">About</div>
        <h1 className="page-hero-title">My Story</h1>
        <p className="page-hero-sub">
          Dedicated to empowering the Deaf community with financial knowledge and tools.
        </p>
      </div>
    </section>

    <div className="page-content">
      <div className="about-layout">
        <div className="about-photo">
          <img src="images/deaftaxlady.jpg" alt="Connie" />
          <p className="about-photo-name">Connie Tincknell-Yandura</p>
        </div>

        <div className="about-text">
          <p>
            I am proud to operate DeafWise Planning &amp; Taxes as a Deaf-owned side business.
          </p>
          <br />
          <p>
            I earned my <b>BBA in Finance</b> from Walsh College in Troy, Michigan, along with a <b>Certificate of Finance</b> (nine graduate credits). I also hold dual <b>Associate degrees</b> in Business Administration and Accounting from Oakland Community College.
          </p>
          <br />
          <p>
            I worked at <b>Oakland Community College for four years</b>—serving as an <b>ASL Tutor for four years</b> and an <b>Accounting Tutor for two years.</b>
          </p>
          <br />
          <p>
            I worked as a substitute teacher with a Michigan substitute permit in public schools across Macomb and Oakland counties from October 2015 through June 2016. This included <b>teaching ASL classes</b> as a substitute at two public schools.
          </p>
          <br />
          <p>
            My professional experience includes working at <b>H&amp;R Block</b> for two years (1999–2000) and serving as a <b>Volunteer Income Tax Assistance (VITA)</b> preparer for seven years—one year in Pontiac, MI, and six years in Indianapolis, IN. In addition, I have provided <b>income tax preparation for family members and Deaf taxpayers for over 25 years.</b>
          </p>
          <br />
          <p>
            I am passionate about helping and educating the Deaf community on <b>income taxes, unclaimed property, retirement planning, and many other financial topics.</b> I have supported Deaf clients across Michigan, Indiana, and beyond.
          </p>
          <br />
          <p>
            In addition, I have volunteered as a Deaf Interpreter (DI) for over 30 years, assisting with communication between Deaf and hearing individuals throughout the community.
          </p>
          <br />
          <p>
            To make it easier for my clients, I am available to meet your needs after 6:00 PM on weekdays or on weekends.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default About;
