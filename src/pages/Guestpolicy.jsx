import React from 'react';

const GuestPolicy = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: '#f4f6f9',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '30px',
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        <h1 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>
          Guest Policy for First Home Stay
        </h1>

        <div style={{ fontFamily: 'Verdana, sans-serif', fontSize: '12px' }}>
          <h5 style={{ fontSize: '14px', color: '#D84315' }}>1. Check-In and Check-Out</h5>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>Check-in time: <strong>[Insert Time]</strong></li>
            <li>Check-out time: <strong>[Insert Time]</strong></li>
            <li>Early check-in or late check-out may be available on request, subject to availability and additional charges.</li>
          </ul>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>2. Identification</h5>
          <p>Valid government-issued photo identification is required at check-in for all guests.</p>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>3. Occupancy Limits</h5>
          <p>The maximum number of guests per room must not exceed the number booked. Additional guests may incur extra charges.</p>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>4. House Rules</h5>
          <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
            <li>No smoking inside the property.</li>
            <li>No pets allowed unless specified.</li>
            <li>Quiet hours are from <strong>[Insert Time]</strong> to <strong>[Insert Time]</strong>.</li>
          </ul>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>5. Payment Terms</h5>
          <p>Full payment is required before or at check-in. We accept <strong>cash, cards, or online payments</strong>.</p>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>6. Cancellations and Refunds</h5>
          <p>Cancellation policies vary. Refunds, if applicable, will be processed within <strong>[Insert days]</strong> business days.</p>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>7. Damages and Loss</h5>
          <p>Guests are responsible for any damage caused during their stay. A damage deposit may be required at check-in.</p>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>8. Safety and Security</h5>
          <p>Please lock doors and windows when leaving the property. We are not responsible for lost belongings.</p>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>9. Right to Refuse Service</h5>
          <p>We reserve the right to remove guests who violate policies or behave in a disruptive or unsafe manner.</p>

          <h5 style={{ fontSize: '14px', color: '#D84315' }}>10. Contact</h5>
          <p>For assistance, please contact our support team or call us at <strong>[Insert Contact Details]</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default GuestPolicy;
