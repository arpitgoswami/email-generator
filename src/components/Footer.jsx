import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";

function Footer({ userName }) {
  return (
    <footer className="mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Logo className="w-auto h-6" />
            <p className="text-sm text-gray-500">
              © 2025 Email AI • Created by {userName || "arpitgoswami"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                to="/documentation"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Documentation
              </Link>
              <Link
                to="/privacy-policy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
