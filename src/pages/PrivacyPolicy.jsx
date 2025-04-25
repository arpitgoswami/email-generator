import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p>Last updated: April 25, 2025</p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p>
            When you use Email AI, we collect information that you provide
            directly to us:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Email address</li>
            <li>Profile information</li>
            <li>Email content you generate</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide and maintain our service</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you about our service</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            3. Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            4. Data Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Service providers who assist in our operations</li>
            <li>Law enforcement when required by law</li>
            <li>Other parties with your consent</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            5. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of certain data sharing</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us at: support@email-ai.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
