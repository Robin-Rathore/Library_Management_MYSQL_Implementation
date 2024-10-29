import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [membershipType, setMembershipType] = useState('regular');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/register', {
        name,
        email,
        password,
        role,
        membership_type: membershipType
      });
      console.log(res.data.message);
      // Redirect to login or dashboard after successful registration
      navigate('/login'); // Change the path to your desired route
    } catch (error) {
      if (error.response) {
        setError("Unable to Register: " + error.response.data.message);
      } else {
        setError("Unable to Register: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full sm:h-[100%] max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center">
          <img src={'#'} alt="CREED" className="h-24" />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-800">Let’s Get Started</h2>
        <p className="text-center text-gray-600">Create a new account</p>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <form method="POST" className="space-y-4" onSubmit={handleRegister}>
          {/* Full Name Input */}
          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Membership Type Input */}
          <div>
            <label htmlFor="membership_type" className="block mb-2 text-sm font-medium text-gray-700">Membership Type</label>
            <select
              id="membership_type"
              value={membershipType}
              onChange={(e) => setMembershipType(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            >
              <option value="regular">Regular</option>
              <option value="premium">Premium</option>
              {/* Add more membership types as needed */}
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {/* Eye icon here */}
              </span>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                id="confirmPassword"
                placeholder="Password Again"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(prev => !prev)}
              >
                {/* Eye icon here */}
              </span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 font-bold text-white bg-SecondaryColor rounded-lg hover:bg-DarkColor transition-colors duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {/* Already have an account */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-SecondaryColor hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
