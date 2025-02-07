import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SignIn({ toggleForm }: { toggleForm: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', { email, password });
    navigate('/home');
  };

  return (
    <main className="px-4 text-center">
      <h1 className="text-3xl font-semibold mb-2">Sign in</h1>
      <p className="text-gray-600 mb-8">Welcome back! Please enter your details</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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

        <button
          type="submit"
          className="w-2/5 bg-black text-white py-3 rounded-3xl font-medium hover:bg-gray-800 transition-colors mx-auto"
        >
          Sign in
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
        Don't have an account?{' '}
        <button onClick={toggleForm} className="text-blue-600 font-medium hover:underline">
          Create new account
        </button>
      </p>
    </main>
  );
}

export default SignIn;

