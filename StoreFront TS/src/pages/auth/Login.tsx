import { useState } from "react";
import { loginApi } from "../../api/auth.api";
import { saveToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { User, Lock } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 const handleLogin = async () => {
  try {
    const res = await loginApi(username, password);
    console.log("LOGIN RESPONSE:", res);
    saveToken(res.token);

    
    const pending = localStorage.getItem("pendingCartProduct");
    if (pending) {
      const { productId, quantity } = JSON.parse(pending);
 console.log("Auto added after login:", productId, quantity);
      localStorage.removeItem("pendingCartProduct");
    }

    navigate("/cart"); 
  } catch (err) {
    setError("User not found. Please register first.");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-700 from-gray-900 to-gray-800">
      <div className="bg-gray-900 p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-white text-4xl font-bold mb-10 text-center">
          USER LOGIN
        </h1>

        <div className="relative mb-6">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {" "}
            <User className="w-5 h-5" />{" "}
          </span>
          <input
            className="pl-10 w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative mb-6">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {" "}
            <Lock className="w-5 h-5" />{" "}
          </span>
          <input
            className="pl-10 w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition"
        >
          Login
        </button>
        <p className="text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <span
            className="text-indigo-500 cursor-pointer font-bold hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
