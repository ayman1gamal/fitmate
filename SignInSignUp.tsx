import React, { useState } from 'react';
import { ChevronLeft, Layout, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SignInSignUp() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    if (isSignUp) {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if (!fullName.trim()) {
        alert('Please enter your full name');
        return;
      }

      // Navigate to the goal selection page after successful sign-up
      navigate('/goals', { state: { email, fullName } });
    } else {
      // Handle sign-in logic
      console.log('Sign in:', { email, password });
      navigate('/home'); // Redirect to HomePage after sign-in
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setFullName('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[450px] mx-auto p-5">
        {/* Navbar */}
        <nav className="flex justify-between items-center mb-12">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-base">Fit Mate</span>
          </div>
        </nav>

        {/* Main Content */}
        <main className="px-4 text-center">
          <h1 className="text-3xl font-semibold mb-2">
            {isSignUp ? 'Create your account' : 'Sign in'}
          </h1>
          <p className="text-gray-600 mb-8">
            {isSignUp 
              ? 'Let us help you keep your health' 
              : 'Welcome back! Please enter your details'}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
            {isSignUp && (
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
              </button>
            </div>
            {isSignUp && (
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm the password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-2/5 bg-black text-white py-3 rounded-3xl font-medium hover:bg-gray-800 transition-colors"
              >
                {isSignUp ? 'Next' : 'Sign in'}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative text-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative">
              <span className="px-4 text-sm text-gray-500 bg-white">OR</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={() => console.log('Google sign-in clicked')}
              className="flex items-center justify-center gap-3 w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
            <button
              onClick={() => console.log('Facebook sign-in clicked')}
              className="flex items-center justify-center gap-3 w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
              Continue with Facebook
            </button>
          </div>

          {/* Toggle Sign in/Sign up */}
          <p className="text-sm text-gray-600">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button 
              onClick={toggleForm}
              className="text-blue-600 font-medium hover:underline"
            >
              {isSignUp ? 'Sign in' : 'Create new account'}
            </button>
          </p>
        </main>
      </div>
    </div>
  );
}

export default SignInSignUp;