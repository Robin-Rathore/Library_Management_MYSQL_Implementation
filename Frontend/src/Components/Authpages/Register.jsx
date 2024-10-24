import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student');
    const [membership_type, setMembership_type] = useState('regular');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return; // or set a state to show an error message
        }
    
        try {
            const res = await axios.post('http://localhost:3000/register', {
                name, 
                email, 
                password, 
                role, 
                membership_type
            });
            console.log(res.data.message);
            // Redirect to login or dashboard after successful registration
        } catch (error) {
            if (error.response) {
                console.log("Unable to Register: " + error.response.data.message);
            } else {
                console.log("Unable to Register : ): " + error.message);
            }
        }
    };
    

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full sm:h-[100%] max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center">
          {/* Logo */}
          <img src={'#'} alt="CREED" className="h-24" />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Let’s Get Started
        </h2>
        <p className="text-center text-gray-600">Create a new account</p>

        <form method="POST" className="space-y-4" onSubmit={handleRegister}>
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                {/* Add your icon here */}
              </span>
              <input
                id="fullName"
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          {/* Membership Type Input */}
          <div>
            <label
              htmlFor="membership_type"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Membership Type
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                {/* Add your icon here */}
              </span>
              <input
                id="membership_type"
                name="membership_type"
                type="text"
                placeholder="Membership Type"
                required
                className="w-full px-4 py-2 outline-none"
                value={membership_type}
                onChange={(e) => setMembership_type(e.target.value)} // Fix this line
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                {/* Add your icon here */}
              </span>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex relative items-center border-2 border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                {/* Add your icon here */}
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                required
                className="w-full px-4 py-2 outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {/* Eye icon here */}
              </span>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative flex items-center border-2 border-gray-300 rounded-lg">
              <span className="px-3 text-gray-500">
                {/* Add your icon here */}
              </span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Password Again"
                required
                value={confirmPassword}
                className="w-full px-4 py-2 outline-none"
                type={showConfirmPassword ? "text" : "password"} // Fix this logic
                onChange={(e) => setConfirmPassword(e.target.value)} // Fix this line
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {/* Eye icon here */}
              </span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
      className={`w-full px-4 py-2 font-bold text-white bg-SecondaryColor rounded-lg hover:bg-DarkColor transition-colors duration-200 `}
    >
      Sign Up
    </button>
        </form>

        {/* Already have an account */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-SecondaryColor hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
