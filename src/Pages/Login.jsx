// Login.js
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email)
    localStorage.setItem("password", password);
    console.log("Login submitted:", email, password);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-4 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="example@example.com"
            />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-700"
              placeholder="●●●●●●●●●●"
            />
          </label>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link className="text-orange-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
