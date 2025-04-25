import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Documentation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Documentation</h1>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-700 mb-4">
            Email AI helps you generate professional emails quickly using
            artificial intelligence. Follow these steps to get started:
          </p>
          <ol className="list-decimal pl-6 mb-6 text-gray-700">
            <li className="mb-2">Sign up for an account using your email</li>
            <li className="mb-2">Access the dashboard</li>
            <li className="mb-2">
              Choose a quick action or enter your own prompt
            </li>
            <li className="mb-2">Generate and customize your email</li>
            <li className="mb-2">Send it to your recipient</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Quick Actions
          </h2>
          <p className="text-gray-700 mb-4">
            Quick actions help you generate specific types of emails instantly:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">
              <strong className="text-gray-900">Birthday Wishes:</strong>{" "}
              Generate friendly birthday emails
            </li>
            <li className="mb-2">
              <strong className="text-gray-900">Appreciation:</strong> Create
              thoughtful thank-you messages
            </li>
            <li className="mb-2">
              <strong className="text-gray-900">Festival Greetings:</strong>{" "}
              Craft celebratory festival emails
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Custom Prompts
          </h2>
          <p className="text-gray-700 mb-4">To generate a custom email:</p>
          <ol className="list-decimal pl-6 mb-6 text-gray-700">
            <li className="mb-2">Enter the recipient's email address</li>
            <li className="mb-2">
              Write a description of what you want to communicate
            </li>
            <li className="mb-2">
              Click "Generate Email" to create your message
            </li>
            <li className="mb-2">Edit the generated content if needed</li>
            <li className="mb-2">Click "Send Email" to deliver your message</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Best Practices
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">
              Be specific in your prompts for better results
            </li>
            <li className="mb-2">
              Always review generated content before sending
            </li>
            <li className="mb-2">Use appropriate tone for your recipient</li>
            <li className="mb-2">Double-check recipient email addresses</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            FAQ
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                How secure is my data?
              </h3>
              <p className="text-gray-700">
                We use industry-standard encryption to protect your data. We
                never store your emails or recipient information permanently.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Can I save email templates?
              </h3>
              <p className="text-gray-700">
                Currently, we don't support saving templates, but this feature
                is coming soon.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Is there a limit to email generation?
              </h3>
              <p className="text-gray-700">
                Free accounts can generate up to 50 emails per month. Premium
                users get unlimited generations.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-700">
            If you need assistance or have questions, please contact our support
            team at{" "}
            <a
              href="mailto:support@email-ai.com"
              className="text-blue-500 hover:text-blue-600"
            >
              support@email-ai.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
