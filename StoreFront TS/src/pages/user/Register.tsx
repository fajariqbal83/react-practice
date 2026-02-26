import { useState } from "react";
import { addUser, getAllUsers } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !email || !password || !confirm) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const users = await getAllUsers();

      const alreadyExist = users.find(
        (u) => u.username === username || u.email === email
      );

      if (alreadyExist) {
        setError("User already exists.");
        return;
      }

      await addUser({ username, email, password });

      navigate("/login");
    } catch (err) {
      setError("API error. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-600">
      <div className="w-110 rounded-3xl bg-white backdrop-blur-md shadow-2xl p-6">

        <div className="flex justify-center -mt-12 mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Camera size={48} />
          </div>
        </div>

        <h2 className="text-xl font-bold text-center mb-4">Register Account</h2>

        <input
          className="w-full mb-2 p-2 rounded-xl border outline-none"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full mb-2 p-2 rounded-xl border outline-none"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-2 p-2 rounded-xl border outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-2 rounded-xl border outline-none"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handleRegister}
          className="w-full bg-indigo-600 text-white py-2 rounded-full font-semibold hover:bg-indigo-800 transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-3">
          Already have an account?
          <span
            className="text-indigo-800 hover:underline cursor-pointer ml-1"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;