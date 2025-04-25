import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-100 border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col mb-6 md:mb-0 items-start space-y-4">
            <Logo className="w-auto h-6" />
            <p className="text-sm text-gray-500">
              Save time and write better emails with our AI-powered email
              generator. Perfect for professional formal communication.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 MIT License - MailCraft. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Resources
              </h3>
              <div className="flex flex-col space-y-4">
                <Link
                  to="/documentation"
                  className="text-sm hover:underline text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Documentation
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-sm hover:underline text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-sm hover:underline text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Connect
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
