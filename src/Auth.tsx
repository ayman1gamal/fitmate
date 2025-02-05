import React, { useState } from 'react';
import { ChevronLeft, Layout } from 'lucide-react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

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

        {isSignUp ? <SignUp toggleForm={() => setIsSignUp(false)} /> : <SignIn toggleForm={() => setIsSignUp(true)} />}
      </div>
    </div>
  );
}

export default Auth;