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

const CyberSecurity = () => {
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
          <span style={{ color: '#000' }}>Cyber</span>{' '}
          <span style={{ color: '#D84315' }}>Security</span>
        </h1>
      </div>

      {/* Policy Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <PolicySection
          title="1. Data Protection"
          content="We prioritize the protection of your personal and financial data through encryption, secure servers, and advanced cybersecurity protocols."
        />
        <PolicySection
          title="2. Secure Transactions"
          content="All payment transactions are processed through secure and trusted platforms with end-to-end encryption to prevent unauthorized access."
        />
        <PolicySection
          title="3. Threat Monitoring"
          content="Our systems are continuously monitored for suspicious activities, and we employ advanced threat detection tools to proactively respond to potential risks."
        />
        <PolicySection
          title="4. Account Security"
          content="We encourage users to use strong, unique passwords and offer two-factor authentication (2FA) to enhance account protection."
        />
        <PolicySection
          title="5. Incident Response"
          content="In the event of a cybersecurity breach, we have an incident response plan to immediately contain, investigate, and resolve any threats while keeping affected users informed."
        />
        <PolicySection
          title="6. Your Role in Security"
          content="We recommend that users regularly update passwords, avoid sharing login details, and report any suspicious activities immediately to our support team."
        />
      </div>
    </div>
  );
};

export default CyberSecurity;
