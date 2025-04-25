import { Link } from "react-router-dom";
import { LogOut, Settings } from "lucide-react";

function Header({ user, onLogout }) {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={user.photoURL}
                alt="Profile"
                className="rounded-full w-8 h-8 border-2 border-blue-500"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {user.displayName || "arpitgoswami"}
              </p>
              <p className="text-xs text-gray-500">
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
