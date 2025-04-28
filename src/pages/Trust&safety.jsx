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

const TrustAndSafety = () => {
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
          <span style={{ color: '#000' }}>Trust</span>{' '}
          <span style={{ color: '#D84315' }}>and Safety</span>
        </h1>
      </div>

      {/* Policy Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <PolicySection
          title="1. Our Commitment"
          content="We are committed to creating a safe, secure, and reliable environment for all our guests and hosts. We take proactive steps to ensure that every booking experience is trustworthy and transparent."
        />
        <PolicySection
          title="2. Guest Verification"
          content="We verify the identity of our guests through multiple layers of security checks to build a safe community and protect our hosts and properties."
        />
        <PolicySection
          title="3. Host Standards"
          content="All hosts must adhere to strict quality, safety, and hospitality standards to maintain a trusted experience for guests. We regularly review listings for accuracy and quality."
        />
        <PolicySection
          title="4. Safety Measures"
          content="Emergency contact information, safety instructions, and property safety features like smoke detectors are required for every listing to ensure guest security."
        />
        <PolicySection
          title="5. Reporting Issues"
          content="If any guest or host encounters unsafe conditions or suspicious activity, we encourage immediate reporting. Our dedicated Trust & Safety team responds swiftly to investigate and take action."
        />
        <PolicySection
          title="6. Continuous Improvement"
          content="We continuously update our trust and safety practices based on feedback, new technologies, and evolving standards to offer the highest levels of protection for our community."
        />
      </div>
    </div>
  );
};

export default TrustAndSafety;
