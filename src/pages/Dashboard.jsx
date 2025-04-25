import { useState, useRef } from "react";
import { auth, signOut } from "../firebase";
import { generateEmail, emailTones } from "../generateEmail";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import {
  SendHorizonal,
  Sparkles,
  Send,
  LoaderCircle,
  Cake,
  Heart,
  Star,
  AlertCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Dashboard({ user }) {
  const [emailPrompt, setEmailPrompt] = useState("");
  const [selectedTone, setSelectedTone] = useState("professional");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [editableEmail, setEditableEmail] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeoutRef = useRef(null);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleGenerateEmail = async () => {
    if (!emailPrompt) return;
    setIsGenerating(true);
    try {
      const emailContent = await generateEmail(
        emailPrompt,
        user.displayName || "arpitgoswami",
        selectedTone
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
        user.displayName || "arpitgoswami",
        selectedTone
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

      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }

      tooltipTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }
  };

  const handleSendEmail = async () => {
    if (!recipient || !editableEmail) {
      toast.error("Please enter recipient and email content", {
        duration: 3000,
        position: "top-right",
      });
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

      toast.success("Email sent successfully!", {
        duration: 3000,
        position: "top-right",
        icon: "🚀",
      });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send email. Please try again.", {
        duration: 3000,
        position: "top-right",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Header user={user} onLogout={handleLogout} />
      <main className="max-w-4xl mx-auto pt-16 pb-4 px-4 sm:px-6">
        {/* Quick action buttons */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => handleQuickAction("birthday")}
              disabled={isGenerating}
              className="relative px-6 py-4 rounded-xl text-sm font-medium bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <span className="relative flex items-center justify-center">
                <Cake className="w-5 h-5 mr-2 text-pink-500" />
                Birthday Wishes
              </span>
            </button>

            <button
              onClick={() => handleQuickAction("appreciation")}
              disabled={isGenerating}
              className="relative px-6 py-4 rounded-xl text-sm font-medium bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <span className="relative flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2 text-emerald-500" />
                Appreciation
              </span>
            </button>

            <button
              onClick={() => handleQuickAction("festival")}
              disabled={isGenerating}
              className="relative px-6 py-4 rounded-xl text-sm font-medium bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <span className="relative flex items-center justify-center">
                <Star className="w-5 h-5 mr-2 text-amber-500" />
                Diwali Greetings
              </span>
            </button>
          </div>
        </div>

        {/* Email Generator */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <SendHorizonal className="w-5 h-5 mr-2 text-blue-500" />
              Email Generator
            </h2>
          </div>

          <div className="p-6">
            {/* Recipient input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient
              </label>
              <input
                type="email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Enter recipient's email address"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none"
              />
            </div>

            {/* Email prompt */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What would you like to write about?
              </label>
              <textarea
                value={emailPrompt}
                onChange={(e) => setEmailPrompt(e.target.value)}
                placeholder="E.g., Write a follow-up email to the client about the project status..."
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none min-h-[100px] resize-y"
              ></textarea>
            </div>

            {/* Tone selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Email Tone
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {emailTones.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedTone(tone.id)}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                      selectedTone === tone.id
                        ? tone.id === "formal"
                          ? "bg-blue-50 border-blue-200 text-blue-700"
                          : tone.id === "friendly"
                          ? "bg-green-50 border-green-200 text-green-700"
                          : tone.id === "cheerful"
                          ? "bg-yellow-50 border-yellow-200 text-yellow-700"
                          : tone.id === "assertive"
                          ? "bg-purple-50 border-purple-200 text-purple-700"
                          : tone.id === "empathetic"
                          ? "bg-pink-50 border-pink-200 text-pink-700"
                          : "bg-gray-50 border-gray-200 text-gray-700"
                        : "border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <div className="font-medium text-sm mb-1">{tone.name}</div>
                    <div className="text-xs opacity-75">{tone.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate button */}
            <div className="flex justify-end">
              <button
                onClick={handleGenerateEmail}
                disabled={isGenerating || !emailPrompt}
                className={`flex items-center px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-all duration-200 ${
                  isGenerating || !emailPrompt
                    ? "opacity-50 cursor-not-allowed"
                    : "transform hover:translate-y-[-1px] hover:shadow-lg"
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
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Send className="w-5 h-5 mr-2 text-green-500" />
                Your Email
              </h2>
            </div>

            <div className="p-6">
              <textarea
                value={editableEmail}
                onChange={(e) => setEditableEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 outline-none min-h-[200px] resize-y mb-6"
                placeholder="Your generated email will appear here..."
              ></textarea>

              <div className="flex-col space-y-8 md:space-y-0 flex md:flex-row md:items-center justify-between">
                <div
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    isSending || !editableEmail || !recipient
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {isSending || !editableEmail || !recipient
                    ? "Please enter recipient email address"
                    : "Ready to send"}
                </div>
                <div className="relative">
                  <button
                    onClick={handleSendEmail}
                    onMouseEnter={showButtonTooltip}
                    onFocus={showButtonTooltip}
                    disabled={isSending || !editableEmail || !recipient}
                    className={`flex items-center w-full md:w-auto px-5 py-2.5 justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-all duration-200 ${
                      isSending || !editableEmail || !recipient
                        ? "opacity-50 cursor-not-allowed"
                        : "transform hover:translate-y-[-1px] hover:shadow-lg"
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
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-10">
                      <div className="flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1 text-amber-400" />
                        Please enter recipient email
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
