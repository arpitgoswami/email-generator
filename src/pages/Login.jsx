import React, { useState } from "react";
import { Star, Mail, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { auth, provider, signInWithPopup } from "../firebase";

const Login = ({ setUser }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google Login Error:", error);
      setError("Google login failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Branding */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-gradient-to-br from-[#4747f5] to-[#3535d2] flex flex-col justify-center items-center text-white p-6 md:p-8 relative overflow-hidden min-h-[40vh] md:min-h-full"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10">
            <Star className="text-white" size={30} />
          </div>
          <div className="absolute bottom-20 right-10">
            <Star className="text-white" size={20} />
          </div>
          <div className="absolute top-1/2 left-1/4">
            <Star className="text-white" size={15} />
          </div>
        </div>

        <div className="text-center z-10">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold mb-2 md:mb-4"
          >
            Next Gen Email
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-sm max-w-md leading-relaxed px-4"
          >
            Skip repetitive and manual email writting tasks. Get highly
            productive through automation and save tons of time!
          </motion.p>
        </div>
      </motion.div>

      {/* Right Section - Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: 0 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-8 bg-gray-50"
      >
        <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-center">
            Welcome Back!
          </h2>
          <p className="mb-6 text-gray-600 text-center">
            Sign in to continue to your account
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm text-center">
              {error}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className={`w-full flex items-center justify-center p-3 md:p-4 border rounded-lg hover:bg-gray-50 transition-all duration-200 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <Loader className="animate-spin mr-2" size={18} />
            ) : (
              <Mail className="mr-2" size={18} />
            )}
            {isLoading ? "Signing in..." : "Continue with Google"}
          </motion.button>

          <p className="mt-6 text-xs text-center text-gray-500">
            By continuing, you agree to Email Skip's Terms of Service and
            Privacy Policy
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-500 text-xs text-center"
        >
          © 2025 Email Skip. All rights reserved.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
