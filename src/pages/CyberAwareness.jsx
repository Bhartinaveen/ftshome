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

const CyberSecurityAwareness = () => {
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
          <span style={{ color: '#000' }}>Cyber Security</span>{' '}
          <span style={{ color: '#D84315' }}>Awareness</span>
        </h1>
      </div>

      {/* Awareness Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <PolicySection
          title="1. Importance of Cyber Security"
          content="Cyber security is essential to protect your personal information, prevent identity theft, and secure online transactions. Staying vigilant helps protect both individuals and businesses from cyber threats."
        />
        <PolicySection
          title="2. Recognizing Phishing Attempts"
          content="Be cautious of unexpected emails, links, and attachments. Always verify the sender’s information and avoid clicking suspicious links or sharing personal information."
        />
        <PolicySection
          title="3. Strong Password Practices"
          content="Use complex, unique passwords for different accounts. Consider using a reputable password manager to store and generate strong passwords securely."
        />
        <PolicySection
          title="4. Device Security"
          content="Keep your devices updated with the latest security patches. Install trusted antivirus software and enable two-factor authentication (2FA) wherever possible."
        />
        <PolicySection
          title="5. Safe Browsing Habits"
          content="Only visit secure websites (look for HTTPS), avoid downloading files from untrusted sources, and be mindful of public Wi-Fi networks when accessing sensitive information."
        />
        <PolicySection
          title="6. Reporting Cyber Threats"
          content="If you encounter suspicious activity, immediately report it to the concerned authority or cyber security team. Prompt reporting helps prevent potential breaches."
        />
      </div>
    </div>
  );
};

export default CyberSecurityAwareness;
