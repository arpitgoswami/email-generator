import { Link } from "react-router-dom";
import { Mail, Sparkles, Clock, Shield } from "lucide-react";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Generate Perfect Emails with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Save time and write better emails with our AI-powered email
            generator. Perfect for professional communication.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started
            <Mail className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md">
            <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI-Powered
            </h3>
            <p className="text-gray-600">
              Advanced AI technology that understands context and generates
              human-like emails.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md">
            <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Save Time
            </h3>
            <p className="text-gray-600">
              Generate professional emails in seconds instead of spending
              minutes crafting them.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md">
            <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600">
              Your data is encrypted and protected. We take security seriously.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Features for Better Emails
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to write professional and effective emails
              quickly
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-lg font-semibold">
                    1
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Quick Actions
                  </h3>
                  <p className="text-gray-600">
                    Generate common types of emails instantly with our pre-built
                    templates
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-lg font-semibold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Smart Editor
                  </h3>
                  <p className="text-gray-600">
                    Edit and customize generated emails with our user-friendly
                    interface
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 text-lg font-semibold">
                    3
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Professional Tone
                  </h3>
                  <p className="text-gray-600">
                    AI ensures your emails maintain a professional and
                    appropriate tone
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-50 w-10 h-10 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 text-lg font-semibold">
                    4
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Easy Sharing
                  </h3>
                  <p className="text-gray-600">
                    Send emails directly from the platform with just one click
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
