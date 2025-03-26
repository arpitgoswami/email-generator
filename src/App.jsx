import { useState, useEffect, useRef } from "react";
import { auth, signOut } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login";
import { generateEmail } from "./generateEmail";
import emailjs from "emailjs-com";
import {
  SendHorizonal,
  LogOut,
  Sparkles,
  Send,
  LoaderCircle,
  Cake,
  Heart,
  Star,
  AlertCircle,
} from "lucide-react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailPrompt, setEmailPrompt] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [editableEmail, setEditableEmail] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [currentDate, setCurrentDate] = useState("2025-03-26 12:31:41");
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeoutRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Use the provided date
    setCurrentDate("2025-03-26 12:31:41");

    return () => {
      unsubscribe();
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleGenerateEmail = async () => {
    if (!emailPrompt) return;
    setIsGenerating(true);
    try {
      const emailContent = await generateEmail(
        emailPrompt,
        user.displayName || "arpitgoswami"
      );
      setGeneratedEmail(emailContent);
      setEditableEmail(emailContent);
    } catch (error) {
      console.error("Email generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleQuickAction = async (type) => {
    setIsGenerating(true);
    let prompt = "";

    switch (type) {
      case "birthday":
        prompt =
          "Write a warm birthday wishes email that's friendly and cheerful";
        break;
      case "appreciation":
        prompt =
          "Write a heartfelt appreciation email to thank someone for their hard work and dedication";
        break;
      case "festival":
        prompt =
          "Write a happy Diwali greeting email that celebrates the festival of lights with warm wishes";
        break;
      default:
        prompt = "Write a professional email";
    }

    setEmailPrompt(prompt);

    try {
      const emailContent = await generateEmail(
        prompt,
        user.displayName || "arpitgoswami"
      );
      setGeneratedEmail(emailContent);
      setEditableEmail(emailContent);
    } catch (error) {
      console.error("Email generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const showButtonTooltip = () => {
    if (!recipient && editableEmail) {
      setShowTooltip(true);

      // Clear any existing timeout
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }

      // Auto-hide tooltip after 3 seconds
      tooltipTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }
  };

  const handleSendEmail = async () => {
    if (!recipient || !editableEmail) {
      // Show styled alert
      document.getElementById("alert-message").innerText =
        "Please enter recipient and email content";
      document.getElementById("alert").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("alert").classList.add("hidden");
      }, 3000);
      return;
    }

    setIsSending(true);
    const templateParams = {
      to_email: recipient,
      from_name: user.displayName || "arpitgoswami",
      message: editableEmail,
    };

    try {
      await emailjs.send(
        "service_r4sq5zf",
        "template_61mnd8n",
        templateParams,
        "ur88oOqx_sj8S_wsv"
      );

      // Show success alert
      document.getElementById("alert-message").innerText =
        "Email sent successfully!";
      document
        .getElementById("alert")
        .classList.remove("hidden", "bg-red-900/50", "border-red-700");
      document
        .getElementById("alert")
        .classList.add("bg-green-900/50", "border-green-700");
      setTimeout(() => {
        document.getElementById("alert").classList.add("hidden");
      }, 3000);
    } catch (error) {
      console.error("Email send error:", error);
      // Show error alert
      document.getElementById("alert-message").innerText =
        "Failed to send email. Please try again.";
      document
        .getElementById("alert")
        .classList.remove("hidden", "bg-green-900/50", "border-green-700");
      document
        .getElementById("alert")
        .classList.add("bg-red-900/50", "border-red-700");
      setTimeout(() => {
        document.getElementById("alert").classList.add("hidden");
      }, 3000);
    } finally {
      setIsSending(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col items-center">
          <LoaderCircle className="w-10 h-10 text-blue-500 animate-spin" />
          <p className="mt-4 text-gray-400">Loading your workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {user ? (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
          {/* Alert */}
          <div
            id="alert"
            className="fixed top-4 right-4 left-4 sm:left-auto sm:w-80 p-4 rounded-lg border bg-red-900/50 border-red-700 shadow-lg z-50 hidden transition-all duration-300"
          >
            <p
              id="alert-message"
              className="text-sm font-medium text-white"
            ></p>
          </div>

          {/* Header with user info */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="rounded-full w-12 h-12 border-2 border-blue-500"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-white">
                  Hello, {user.displayName || "arpitgoswami"}
                </h1>
                <p className="text-sm text-gray-400">{currentDate}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center text-sm px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 text-gray-300 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </button>
          </div>

          {/* Quick action buttons */}
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-400 mb-3">
              Quick Actions
            </h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleQuickAction("birthday")}
                disabled={isGenerating}
                className="group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 overflow-hidden"
              >
                {/* Gradient background with animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:scale-105 transition-transform duration-200"></div>
                <div className="absolute inset-[1px] bg-gray-800 rounded-md"></div>
                <span className="relative flex items-center">
                  <Cake className="w-4 h-4 mr-2 text-pink-400" />
                  Birthday Wishes
                </span>
              </button>

              <button
                onClick={() => handleQuickAction("appreciation")}
                disabled={isGenerating}
                className="group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:scale-105 transition-transform duration-200"></div>
                <div className="absolute inset-[1px] bg-gray-800 rounded-md"></div>
                <span className="relative flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-emerald-400" />
                  Appreciation
                </span>
              </button>

              <button
                onClick={() => handleQuickAction("festival")}
                disabled={isGenerating}
                className="group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 group-hover:scale-105 transition-transform duration-200"></div>
                <div className="absolute inset-[1px] bg-gray-800 rounded-md"></div>
                <span className="relative flex items-center">
                  <Star className="w-4 h-4 mr-2 text-amber-400" />
                  Diwali Greetings
                </span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-xl p-1 mb-8">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-5">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                <SendHorizonal className="w-5 h-5 mr-2 text-blue-400" /> Email
                Generator
              </h2>

              {/* Recipient input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Recipient
                </label>
                <input
                  type="email"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Enter recipient's email address"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none text-gray-300"
                />
              </div>

              {/* Email prompt */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  What would you like to write about?
                </label>
                <textarea
                  value={emailPrompt}
                  onChange={(e) => setEmailPrompt(e.target.value)}
                  placeholder="E.g., Write a follow-up email to the client about the project status..."
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none text-gray-300 min-h-[80px]"
                ></textarea>
              </div>

              {/* Generate button */}
              <div className="flex justify-end">
                <button
                  onClick={handleGenerateEmail}
                  disabled={isGenerating || !emailPrompt}
                  className={`flex items-center text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-200 shadow-lg shadow-blue-700/20 ${
                    isGenerating || !emailPrompt
                      ? "opacity-70 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isGenerating ? (
                    <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4 mr-2" />
                  )}
                  {isGenerating ? "Generating..." : "Generate Email"}
                </button>
              </div>
            </div>
          </div>

          {/* Generated email section */}
          {generatedEmail && (
            <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-xl p-1 mb-6">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-5">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Send className="w-5 h-5 mr-2 text-green-400" /> Your Email
                </h2>
                <textarea
                  value={editableEmail}
                  onChange={(e) => setEditableEmail(e.target.value)}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none text-gray-300 min-h-[200px]"
                  placeholder="Your generated email will appear here..."
                ></textarea>

                <div className="flex justify-end mt-4">
                  <div className="relative">
                    <button
                      onClick={handleSendEmail}
                      onMouseEnter={showButtonTooltip}
                      onFocus={showButtonTooltip}
                      disabled={isSending || !editableEmail || !recipient}
                      className={`flex items-center text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-200 shadow-lg shadow-blue-700/20 ${
                        isSending || !editableEmail || !recipient
                          ? "opacity-70 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {isSending ? (
                        <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {isSending ? "Sending..." : "Send Email"}
                    </button>

                    {/* Tooltip */}
                    {showTooltip && !recipient && editableEmail && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-700 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-10">
                        <div className="flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 text-amber-400" />
                          Please enter recipient email
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-700"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 text-center text-xs text-gray-500">
            <p>
              © 2025 Email AI • Created by {user.displayName || "arpitgoswami"}
            </p>
          </div>
        </div>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
