import React from 'react';

const PolicySection = ({ title, content }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        width: '100%',
        maxWidth: '700px',
        textAlign: 'left',
      }}
    >
      <h2
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#6A1B9A',
          marginBottom: '16px',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: '14px',
          color: '#555',
          lineHeight: '1.6',
        }}
      >
        {content}
      </p>
    </div>
  );
};

const Policy = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px',
        background: 'linear-gradient(to bottom, #ffffff, #f0f2f5)',
      }}
    >
      {/* Page Header */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: '800',
          }}
        >
          <span style={{ color: '#000' }}>Privacy</span>{' '}
          <span style={{ color: '#D84315' }}>Policy</span>
        </h1>
      </div>

      {/* Policy Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <PolicySection
          title="1. Information We Collect"
          content="We collect personal information like your name, contact details, and payment information when you book a stay. We also collect non-personal data like browser type and device information."
        />
        <PolicySection
          title="2. How We Use Your Information"
          content="Your information is used to manage bookings, process payments, improve services, and fulfill legal requirements. We do not sell or rent your information to third parties."
        />
        <PolicySection
          title="3. Data Security"
          content="We implement strong security measures to protect your data. However, no internet transmission or storage system can be guaranteed to be 100% secure."
        />
        <PolicySection
          title="4. Your Rights"
          content="You can request access, correction, or deletion of your personal information by contacting us directly."
        />
        <PolicySection
          title="5. Changes to This Policy"
          content="We may update this policy occasionally. Any changes will be posted on this page with an updated date."
        />
        <PolicySection
          title="6. Contact Us"
          content="For questions about this policy, please contact us at: [Insert Email Address] or [Insert Phone Number]."
        />
      </div>
    </div>
  );
};

export default Policy;
