import React from 'react';

const Terms = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 font-serif text-sm">
      <div className="w-full max-w-4xl sm:max-w-3xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <h1 className="text-xl font-semibold mb-6 text-center text-amber-950">Terms and Conditions</h1>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">1. Introduction</h6>
          <p className="text-xs">
            Welcome to First Home Stay! By accessing or using our platform, you agree to be bound by the following Terms and Conditions.
            Please read them carefully before using our services. Our platform connects travelers with hosts offering unique stays across
            a wide range of locations. By continuing to use our service, you acknowledge that you understand the responsibilities and rights
            involved in the booking process.
          </p>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">2. Account Registration</h6>
          <p className="text-xs">
            To use certain features of First Home Stay, you are required to create an account. You agree to provide accurate and truthful information during registration.
            You are responsible for maintaining the confidentiality of your account and password. You also agree to promptly update any information that may change
            over time, such as contact details or payment preferences, to avoid interruptions during booking or check-in processes.
          </p>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">3. Service Usage</h6>
          <p className="text-xs">
            First Home Stay provides a platform for booking accommodations. By using our services, you agree to use the platform only for legal purposes
            and to provide accurate information while making bookings. You also agree not to use the platform to solicit, advertise, or misrepresent services
            outside the intended use. We reserve the right to monitor activity and disable accounts suspected of fraudulent or inappropriate behavior.
          </p>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">4. Payment and Refund Policy</h6>
          <p className="text-xs">
            All payments for bookings must be made through our platform. A full payment is required at the time of booking.
            Refunds may be requested within 7 days of checkout, subject to certain conditions. Refund eligibility is determined by cancellation timing,
            property rules, and host discretion. We use secure payment gateways to process transactions and do not store credit card information on our servers.
          </p>
          <ul className="text-center mt-2 list-disc list-inside">
            <li className="text-xs">Cancellations within 24 hours: Full refund.</li>
            <li className="text-xs">Cancellations after 24 hours: Partial refund.</li>
          </ul>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">5. User Responsibilities</h6>
          <p className="text-xs">
            As a user, you are responsible for following all house rules, maintaining respectful conduct, and complying with the local laws of your accommodation’s location.
            You agree to be courteous and to avoid disruptive behavior during your stay. Any property damage or breach of conduct may result in penalties or legal action,
            including being barred from future bookings.
          </p>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">6. Limitation of Liability</h6>
          <p className="text-xs">
            First Home Stay is not liable for any direct or indirect damages, losses, or accidents that may occur during your stay.
            Our total liability is limited to the amount paid for the specific booking causing the issue.
            We do not guarantee the accuracy or completeness of host-provided information, although we conduct regular reviews for platform quality.
          </p>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">7. Termination</h6>
          <p className="text-xs">
            We reserve the right to suspend or terminate your account for any violations of these terms. Suspension or termination may occur without prior notice in cases of fraud or misuse.
            Users may appeal account actions by contacting our support team, but reinstatement is not guaranteed.
          </p>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">8. Modifications</h6>
          <p className="text-xs">
            First Home Stay reserves the right to modify these terms at any time. Updates will be posted on this page, and you agree to review the terms periodically to stay informed of any changes.
            Continued use of the platform after updates implies acceptance of the revised terms. We may also notify users of major changes via email or in-app notifications.
          </p>
        </section>

        <section className="mb-4 p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">9. Governing Law</h6>
          <p className="text-xs">
            These terms are governed by the laws of [Your Country]. Any disputes arising from these terms will be subject to the jurisdiction of the courts located in [City/State].
            Users are responsible for ensuring compliance with all applicable regulations when traveling internationally or booking cross-border stays.
          </p>
        </section>

        <section className="p-3 bg-gray-50 rounded-md">
          <h6 className="text-xs font-semibold mb-1 text-center text-blue-500">10. Contact Information</h6>
          <p className="text-xs">
            If you have any questions about these terms or need further clarification, please contact us at
            <a href="mailto:support@firsthomestay.com" className="text-blue-600 underline text-xs"> support@firsthomestay.com</a>.
            Our customer support is available 24/7 to assist you with inquiries related to bookings, cancellations, host disputes, or platform usage.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
