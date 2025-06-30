
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Your privacy is important to us
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> December 20, 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a reservation, contact us for support, or communicate with us in any other way.
                </p>
                <p className="text-gray-700 mb-4">
                  This information may include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Name, email address, and contact information</li>
                  <li>Payment information and billing details</li>
                  <li>Travel preferences and booking history</li>
                  <li>Communications with our customer service team</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Process your bookings and provide customer service</li>
                  <li>Send you confirmations, updates, and administrative messages</li>
                  <li>Personalize your experience and improve our services</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>With hotels and travel partners to complete your bookings</li>
                  <li>With service providers who assist us in operating our platform</li>
                  <li>To comply with legal obligations or protect our rights</li>
                  <li>With your consent or at your direction</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We take reasonable measures to protect your personal information from loss, theft, 
                  misuse, and unauthorized access. However, no internet transmission is completely secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and personalize content. You can manage your cookie preferences 
                  through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Object to processing of your information</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information in accordance 
                  with applicable laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our services are not intended for children under 13. We do not knowingly collect 
                  personal information from children under 13. If you believe we have collected 
                  information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new policy on our website and updating the 
                  "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> privacy@hotelbooker.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 123 Business Avenue, Suite 100, New York, NY 10001
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
