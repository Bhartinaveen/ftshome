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

const ResponsibleDisclosure = () => {
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
          <span style={{ color: '#000' }}>Responsible</span>{' '}
          <span style={{ color: '#D84315' }}>Disclosure</span>
        </h1>
      </div>

      {/* Disclosure Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <PolicySection
          title="1. Our Commitment"
          content="We are committed to maintaining the security and privacy of our users' data. We value the contributions of security researchers and welcome responsible disclosure of vulnerabilities."
        />
        <PolicySection
          title="2. Reporting Vulnerabilities"
          content="If you discover a security vulnerability, please report it to us promptly by contacting [Insert Security Email Address]. Provide a detailed description so we can quickly reproduce and address the issue."
        />
        <PolicySection
          title="3. Guidelines for Responsible Disclosure"
          content="Do not publicly disclose vulnerabilities before we have had an opportunity to fix them. Avoid exploiting the vulnerability or accessing data beyond what is necessary for demonstration."
        />
        <PolicySection
          title="4. What You Can Expect"
          content="We will acknowledge your report within a reasonable time frame, keep you updated on the progress of fixing the issue, and may recognize your contribution if appropriate."
        />
        <PolicySection
          title="5. Scope"
          content="Our Responsible Disclosure policy covers vulnerabilities related to our websites, applications, and APIs. Issues related to third-party services are not included."
        />
        <PolicySection
          title="6. Thank You"
          content="We appreciate your efforts in making our platform safer. Your contributions help protect our community and enhance overall trust."
        />
      </div>
    </div>
  );
};

export default ResponsibleDisclosure;
