import React from 'react';

const TopBanner: React.FC = () => (
  <div style={{
    width: '100%',
    background: 'linear-gradient(135deg, #2d0a5a 0%, #6a1fbf 45%, #a855f7 80%, #22c98a 100%)',
    padding: '32px 24px',
    textAlign: 'center',
  }}>
    <img
      src="images/DeafWiseEditedDarkerGreen.png"
      alt="DeafWise Planning & Taxes"
      style={{ maxWidth: 320, width: '100%', borderRadius: 12 }}
    />
  </div>
);

export default TopBanner;
