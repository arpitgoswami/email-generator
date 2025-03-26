import { auth, provider, signInWithPopup } from "../firebase";

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
