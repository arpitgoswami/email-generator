import { Link } from "react-router-dom";

function Footer({ userName }) {
  return (
    <footer className="mt-12 text-center">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm text-gray-500">
          © 2025 Email AI • Created by {userName || "arpitgoswami"}
        </p>
        <div className="flex space-x-6">
          <Link
            to="/documentation"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
          >
            Documentation
          </Link>
          <Link
            to="/privacy-policy"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
