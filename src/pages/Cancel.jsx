// import React from 'react';
// import Footer from "../Components/Footer";

// const Cancel = () => {
//   return (
//     <div>
//     <div className="flex justify-center items-center min-h-screen px-4 py-10">
//       <div className="max-w-3xl w-full font-sans">
//         <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-left">
//           Cancellation & Refund Policy
//         </h1>
//         <p className="text-blue-600 text-xs md:text-sm lg:text-base mb-4 caret-blue-700 text-left">
//           FirstHomestay values guest satisfaction and aims to provide a transparent and fair cancellation and refund process. By proceeding with a booking, guests agree to the following policy terms.
//         </p>

//         <div className="text-left text-xs md:text-sm lg:text-base space-y-6 text-blue-1000">
//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">1. Standard Cancellation Window</h2>
//             <p style={{ textAlign: 'left' }}>
//               Guests can cancel bookings within a specific timeframe to be eligible for a refund. This window helps maintain consistency and fairness for both hosts and guests.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Cancellations must be requested at least <strong>48 hours before</strong> check-in.</li>
//               <li>After this period, no cancellations are accepted.</li>
//               <li>Applicable only to standard, refundable bookings.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">2. Non-Refundable & Promotional Bookings</h2>
//             <p style={{ textAlign: 'left' }}>
//               Special deals come with strict cancellation terms. These bookings are typically offered at a discounted rate in exchange for non-refundable terms.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Non-refundable bookings cannot be canceled for any reason.</li>
//               <li>Includes flash deals and limited-time promotional packages.</li>
//               <li>No exceptions will be made for promotional rate bookings.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">3. Same-Day Booking Policy</h2>
//             <p style={{ textAlign: 'left' }}>
//               Last-minute bookings are confirmed quickly and are immediately locked in. As such, they are not eligible for cancellation or refunds.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Bookings made <strong>within 24 hours</strong> of check-in are final.</li>
//               <li>No cancellations or modifications are allowed.</li>
//               <li>Ensure accuracy before confirming a same-day booking.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">4. Refund Timeline for Eligible Cancellations</h2>
//             <p style={{ textAlign: 'left' }}>
//               Refunds for qualifying cancellations are processed promptly, excluding any service fees or third-party charges.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Refunds are processed within <strong>7–10 business days</strong>.</li>
//               <li>All refunds are issued to the original payment method.</li>
//               <li>Service fees are non-refundable and will be deducted.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">5. Early Check-Out Policy</h2>
//             <p style={{ textAlign: 'left' }}>
//               If a guest chooses to leave early for personal reasons, the policy ensures hosts are still fairly compensated for the reserved time.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>No refunds will be provided for early check-outs.</li>
//               <li>Guests are charged for the entire duration of the stay.</li>
//               <li>Unused nights after check-in are non-refundable.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">6. Listing Issues & Resolution Eligibility</h2>
//             <p style={{ textAlign: 'left' }}>
//               We prioritize transparency and guest comfort. If any major issue arises with the listing, it must be reported promptly to qualify for support.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Report issues like no access or poor hygiene <strong>within 2 hours</strong> of check-in.</li>
//               <li>Late reports may reduce eligibility for a refund.</li>
//               <li>Photos or evidence may be requested for verification.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">7. Complaints Regarding Amenities</h2>
//             <p style={{ textAlign: 'left' }}>
//               We strive to address amenity concerns quickly. Refunds are considered only if issues remain unresolved after reasonable effort.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Complaints must be reported as soon as possible.</li>
//               <li>Issues will be evaluated and resolved promptly.</li>
//               <li>Refunds only apply if problems are not resolved in a timely manner.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">8. Third-Party Booking Policies</h2>
//             <p style={{ textAlign: 'left' }}>
//               When bookings are made through third-party platforms (e.g., Airbnb, Booking.com), those platforms’ terms and policies override FirstHomestay's.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Refer to the third-party's cancellation policy before booking.</li>
//               <li>All changes and refund requests must go through the platform.</li>
//               <li>We are unable to override third-party platform decisions.</li>
//             </ul>
//           </div>

//           <div>
//             <h2 style={{ textAlign: 'left' }} className="font-semibold">9. Emergency & Dispute Resolution</h2>
//             <p style={{ textAlign: 'left' }}>
//               We aim to resolve conflicts fairly and promptly. In any emergency or disagreement, our support team will act as a neutral party.
//             </p>
//             <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
//               <li>Contact support immediately in case of emergencies.</li>
//               <li>All disputes are reviewed case-by-case.</li>
//               <li>Final decisions aim to be fair and reasonable for all parties.</li>
//             </ul>
//           </div>

//         </div>


//       </div>

//     </div>
//     {/* Footer */}
//     <Footer className="w-full mt-auto" />

//     </div>

//   );
// };

// export default Cancel;

import React from 'react';
import Footer from "../Components/Footer";

const Cancel = () => {
  return (
    <div>
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
            maxWidth: '2000px',
          }}
        >
          <h1 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}>
            Cancellation & Refund Policy
          </h1>

          <div style={{ fontFamily: 'Verdana, sans-serif', fontSize: '12px' }}>
            <h5 style={{ fontSize: '14px', color: '#D84315' }}>1. Introduction</h5>
            <p>
              FirstHomestay values guest satisfaction and aims to provide a transparent and fair cancellation and refund process. By proceeding with a booking, guests agree to the following policy terms.
            </p>


            <h5 style={{ fontSize: '14px', color: '#D84315' }}>2. Standard Cancellation Window</h5>
            <p>
              Guests can cancel bookings within a specific timeframe to be eligible for a refund. This window helps maintain consistency and fairness for both hosts and guests.

            </p>

            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4" >
              <li> Cancellations must be requested at least <strong>48 hours before</strong> check-in.</li>
              <li> After this period, no cancellations are accepted.</li>
              <li> Applicable only to standard, refundable bookings.</li>
            </ul>


            <h5 style={{ fontSize: '14px', color: '#D84315' }}>3.Non-Refundable & Promotional Bookings</h5>
            <p>
              Special deals come with strict cancellation terms. These bookings are typically offered at a discounted rate in exchange for non-refundable terms.
            </p>
            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li> Non-refundable bookings cannot be canceled for any reason.</li>
              <li> Includes flash deals and limited-time promotional packages.</li>
              <li> No exceptions will be made for promotional rate bookings.</li>
            </ul>

            <h5 style={{ fontSize: '14px', color: '#D84315' }}>4.Same-Day Booking Policy</h5>
            <p>
              Last-minute bookings are confirmed quickly and are immediately locked in. As such, they are not eligible for cancellation or refunds.

            </p>

            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li> Bookings made <strong>within 24 hours</strong> of check-in are final.</li>
              <li> No cancellations or modifications are allowed.</li>
              <li> Ensure accuracy before confirming a same-day booking.</li>
            </ul>
            <h5 style={{ fontSize: '14px', color: '#D84315' }}>5. Refund Timeline for Eligible Cancellations</h5>
            <p>
              Refunds for qualifying cancellations are processed promptly, excluding any service fees or third-party charges.
            </p>
            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li>Refunds are processed within <strong>7–10 business days</strong>.</li>
              <li>All refunds are issued to the original payment method.</li>
              <li>Service fees are non-refundable and will be deducted.</li>
            </ul>
            <h5 style={{ fontSize: '14px', color: '#D84315' }}>6. Early Check-Out Policy</h5>
            <p>
              If a guest chooses to leave early for personal reasons, the policy ensures hosts are still fairly compensated for the reserved time.
            </p>
            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li>No refunds will be provided for early check-outs.</li>
              <li>Guests are charged for the entire duration of the stay.</li>
              <li>Unused nights after check-in are non-refundable.</li>
            </ul>
            <h5 style={{ fontSize: '14px', color: '#D84315' }}>7. Listing Issues & Resolution Eligibility</h5>
            <p>
              We prioritize transparency and guest comfort. If any major issue arises with the listing, it must be reported promptly to qualify for support.

            </p>
            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li>Report issues like no access or poor hygiene <strong>within 2 hours</strong> of check-in.</li>
              <li>Late reports may reduce eligibility for a refund.</li>
              <li>Photos or evidence may be requested for verification.</li>
            </ul>
            <h5 style={{ fontSize: '14px', color: '#D84315' }}>8. Complaints Regarding Amenities</h5>
            <p>
              We strive to address amenity concerns quickly. Refunds are considered only if issues remain unresolved after reasonable effort.

            </p>
            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li>Complaints must be reported as soon as possible.</li>
              <li>Issues will be evaluated and resolved promptly.</li>
              <li>Refunds only apply if problems are not resolved in a timely manner.</li>
            </ul>

            <h5 style={{ fontSize: '14px', color: '#D84315' }}>9. Third-Party Booking Policies</h5>
            <p>
              When bookings are made through third-party platforms (e.g., Airbnb, Booking.com), those platforms’ terms and policies override FirstHomestay's.

            </p>
            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li>Refer to the third-party's cancellation policy before booking.</li>
              <li>All changes and refund requests must go through the platform.</li>
              <li>We are unable to override third-party platform decisions.</li>
            </ul>


            <h5 style={{ fontSize: '14px', color: '#D84315' }}>10.Emergency & Dispute Resolution</h5>
            <p>
              We aim to resolve conflicts fairly and promptly. In any emergency or disagreement, our support team will act as a neutral party.

            </p>

            <ul style={{ textAlign: 'left' }} className="list-disc list-inside ml-4">
              <li>Contact support immediately in case of emergencies.</li>
              <li>All disputes are reviewed case-by-case.</li>
              <li>Final decisions aim to be fair and reasonable for all parties.</li>
            </ul>

            <h5 style={{ fontSize: '14px', color: '#D84315' }}>11. Contact Information</h5>
            <p>If you have questions, contact us at:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                Email: <a href="mailto:support@firsthomestay.com" style={{ color: 'blue' }}>support@firsthomestay.com</a>
              </li>
              <li>Phone: [+91-9040170727]</li>
              {/* <li>Address: [Physical Address]</li> */}
            </ul>
          </div>
        </div>

      </div>
      {/* Footer */}
      <Footer className="w-full mt-auto" />
    </div>
  );
};

export default Cancel;
