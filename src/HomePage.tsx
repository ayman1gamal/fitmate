import React from 'react';
import { Layout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo, Website Name, and Navigation Bar */}
      <header className="bg-white text-black py-4">
        <div className="max-w-[1050px] mx-auto px-4">
          {/* Logo and Website Name */}
          <div className="flex items-center gap-2 mb-4">
            {/* Logo */}
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Layout className="w-7 h-7 text-white" />
            </div>
            {/* Website Name */}
            <h1 className="text-3xl font-bold">Fit Mate</h1>
          </div>

          {/* Navigation Bar */}
          <nav className="flex justify-start gap-8">
            <button
              onClick={() => navigate('/')}
              className="p-2 font-bold text-black border border-white rounded-full hover:bg-gray-100 transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="p-2 font-bold text-black border border-white rounded-full hover:bg-gray-100 transition-colors"
            >
              EXERCISE
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="p-2 font-bold text-black border border-white rounded-full hover:bg-gray-100 transition-colors"
            >
              DIET
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="p-2 font-bold text-black border border-white rounded-full hover:bg-gray-100 transition-colors"
            >
              DIARY
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="p-2 font-bold text-black border border-white rounded-full hover:bg-gray-100 transition-colors"
            >
              DIARY HISTORY
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="p-2 font-bold text-black border border-white rounded-full hover:bg-gray-100 transition-colors"
            >
              PROFILE
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="p-2 ml-64 font-bold text-black border border-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Log In
            </button>
          </nav>
        </div>
      </header>

      {/* New Section with Background Image */}
      <div
        className="relative max-w-[1050px] h-[250px] mx-auto bg-cover bg-center  text-white hero-section"
      >
        <div className="text-left pl-32 pt-3">
          <h1 className="home-photo-font text-[70px] font-bold my-[-10px]">TRAIN</h1>
          <h2 className="home-photo-font text-[55px] font-bold text-[#C91313] ml-2 mt-[-32px]">INSANE</h2>
          <h3 className="home-photo-font text-[35px] font-bold ml-2 mt-[-17px]">OR REMAIN</h3>
          <h3 className="home-photo-font text-[40px] font-bold text-[#D22B2B] ml-2 mt-[-12px]">THE SAME</h3>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1000px] mx-auto px-4 py-8">
        {/* First Row: Exercise and Diet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
          {/* Exercise Section */}
          <div
            onClick={() => navigate('/signin')}
            className="px-6 pt-3 border border-black rounded-[3vw] hover:bg-gray-100 transition-colors cursor-pointer shadow-xl shadow-gray-200 flex items-start justify-between"
          >
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-4">EXERCISE</h2>
              <p className="sec-description-font text-black text-sm">Here you will find your Exercise table</p>
            </div>
            <img src='/assets/exercise.png' alt="Exercise" className="pr-2 w-28 h-52" />
          </div>

          {/* Diet Section */}
          <div
            onClick={() => navigate('/signin')}
            className="pl-6 pr-2 pt-3 border border-black rounded-[3vw] hover:bg-gray-100 transition-colors cursor-pointer shadow-xl shadow-gray-200 flex items-start justify-between"
          >
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-4">DIET</h2>
              <p className="sec-description-font text-black text-sm">Here you will find your daily meals</p>
            </div>
            <img src="/assets/diet.png" alt="Diet" className="pt-2 w-56 h-48" />
          </div>
        </div>

        {/* Second Row: Diary, Diary History, and Profile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Profile Section */}
          <div
            onClick={() => navigate('/signin')}
            className="px-6 pt-3 pb-10 border border-black rounded-[3vw] hover:bg-gray-100 transition-colors cursor-pointer shadow-xl shadow-gray-200 flex items-start justify-between"
          >
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-4">PROFILE</h2>
              <p className="sec-description-font text-black text-sm">Here you can view and update your personal data</p>
            </div>
            <img src="/assets/profile.png" alt="Profile" className="mt-4 w-28 h-28" />
          </div>

          {/* Diary Section */}
          <div
            onClick={() => navigate('/signin')}
            className="px-6 pt-3 pb-10 border border-black rounded-[3vw] hover:bg-gray-100 transition-colors cursor-pointer shadow-xl shadow-gray-200 flex items-start justify-between"
          >
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-4">DIARY</h2>
              <p className="sec-description-font text-black text-sm pr-8">Here you can find and record your daily progress you achieve</p>
            </div>
            <img src="/assets/pencil.png" alt="Diary" className="mt-8 w-20 h-20" />
          </div>

          {/* Diary History Section */}
          <div
            onClick={() => navigate('/signin')}
            className="px-6 pt-3 pb-10 border border-black rounded-[3vw] hover:bg-gray-100 transition-colors cursor-pointer shadow-xl shadow-gray-200"
          >
            <h2 className="text-left text-2xl font-semibold mb-4">DIARY HISTORY</h2>
            <div className="text-left flex items-start justify-between">
              <p className="sec-description-font text-left text-black text-sm pr-8">Here you will find the record of your daily progress in the last month</p>
              <img src="/assets/diaryhistory.png" alt="Diary History" className="w-20 h-20" />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2 flex justify-center">Follow us on social media</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.open('https://facebook.com', '_blank')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img src="/assets/facebook.png" alt="Facebook" className="w-8 h-8" />
            </button>
            <button
              onClick={() => window.open('https://instagram.com', '_blank')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img src="/assets/instagram.png" alt="Instagram" className="w-8 h-8" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/201559779813', '_blank')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
