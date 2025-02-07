/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp({ toggleForm }: { toggleForm: () => void }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
        await axios.post('https://fit-mate-samer12332-samer12332s-projects.vercel.app/api/auth/register', {
        username:fullName,
        email,
        password,
        confirmPassword
      });
        navigate('/goals');

    } catch (error: any) {
      console.error('Registration error:', error);
      if (error.response) {
        alert(error.response.data.message +  'Registration failed.');
      } else {
        alert('Network error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="px-4 text-center">
      <h1 className="text-3xl font-semibold mb-2">Create your account</h1>
      <p className="text-gray-600 mb-8">Let us help you keep your health</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          required
        />
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
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
          </button>
        </div>
<button
          type="submit"
          disabled={loading}
          className={`w-2/5 ${
            loading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
          } text-white py-3 rounded-3xl font-medium transition-colors mx-auto`}
        >
          {loading ? 'Registering...' : 'Next'}
        </button>
      </form>
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
      <p className="text-sm text-gray-600">
        Already have an account?{' '}
        <button onClick={toggleForm} className="text-blue-600 font-medium hover:underline">
          Sign in
        </button>
      </p>
    </main>
  );
}

export default SignUp;
