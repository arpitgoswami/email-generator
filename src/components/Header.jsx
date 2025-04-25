import { LogOut } from "lucide-react";
import Logo from "./Logo";

function Header({ user, onLogout }) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo className="w-auto h-7" />

          {/* User Profile and Logout */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="relative flex-shrink-0">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-9 h-9 rounded-full border-2 border-gray-200"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 leading-tight">
                  {user.displayName || "arpitgoswami"}
                </p>
                <p className="text-xs text-gray-500 leading-tight">
                  {new Date().toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center px-3.5 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <LogOut className="w-4 h-4 mr-1.5 stroke-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
