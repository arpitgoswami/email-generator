import { useState, useEffect } from "react";
import { auth, signOut } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login";
import { generateEmail } from "./generateEmail";
import emailjs from "emailjs-com";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailPrompt, setEmailPrompt] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [editableEmail, setEditableEmail] = useState("");
  const [recipient, setRecipient] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleGenerateEmail = async () => {
    if (!emailPrompt) return;
    const emailContent = await generateEmail(emailPrompt, user.displayName);
    setGeneratedEmail(emailContent);
    setEditableEmail(emailContent);
  };

  const handleSendEmail = () => {
    if (!recipient || !editableEmail)
      return alert("Please enter recipient and email content");

    const templateParams = {
      to_email: recipient,
      from_name: user.displayName,
      message: editableEmail,
    };

    emailjs
      .send(
        "service_r4sq5zf",
        "template_61mnd8n",
        templateParams,
        "ur88oOqx_sj8S_wsv"
      )
      .then(() => alert("Email sent successfully!"))
      .catch((error) => console.error("Email send error:", error));
  };

  if (loading) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  return (
    <div className="p-6">
      {user ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome, {user.displayName}!</h1>
          <img
            src={user.photoURL}
            alt="Profile"
            className="rounded-full w-20 h-20 mx-auto my-4"
          />

          <input
            type="email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Recipient's email"
            className="w-full p-2 border rounded-md mt-4"
          />

          <textarea
            value={emailPrompt}
            onChange={(e) => setEmailPrompt(e.target.value)}
            placeholder="Enter your email prompt..."
            className="w-full p-2 border rounded-md mt-4"
          ></textarea>

          <button
            onClick={handleGenerateEmail}
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 mt-2"
          >
            Generate Email
          </button>

          {generatedEmail && (
            <div className="mt-4 p-4 border rounded-md bg-gray-100 text-left">
              <h2 className="font-semibold">Generated Email:</h2>
              <textarea
                value={editableEmail}
                onChange={(e) => setEditableEmail(e.target.value)}
                className="w-full p-2 border rounded-md mt-2"
                rows="6"
              ></textarea>
            </div>
          )}

          <button
            onClick={handleSendEmail}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mt-4"
          >
            Send Email
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 mt-4 ml-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
