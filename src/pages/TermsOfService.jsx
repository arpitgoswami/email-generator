import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-600 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose max-w-none">
          <p>Last updated: April 25, 2025</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using Email AI, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. Description of Service
          </h2>
          <p>
            Email AI provides an AI-powered email generation service. We reserve
            the right to modify, suspend, or discontinue any aspect of the
            service at any time.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. User Accounts
          </h2>
          <p>You are responsible for:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Maintaining the confidentiality of your account</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us of any unauthorized use</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Use the service for any illegal purpose</li>
            <li>Generate spam or harmful content</li>
            <li>Attempt to breach our security measures</li>
            <li>Resell or redistribute our service</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Intellectual Property
          </h2>
          <p>
            The service, including all content and features, is owned by Email
            AI and protected by copyright, trademark, and other intellectual
            property laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            Email AI shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use or
            inability to use the service.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Termination
          </h2>
          <p>
            We reserve the right to terminate or suspend your account and access
            to the service at our sole discretion, without notice, for any
            violation of these terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            8. Changes to Terms
          </h2>
          <p>
            We may update these terms from time to time. Continued use of the
            service after such changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            9. Contact
          </h2>
          <p>
            For any questions about these Terms of Service, please contact us
            at: support@email-ai.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
