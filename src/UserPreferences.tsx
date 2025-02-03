import React, { useState } from 'react';
import { ChevronLeft, Layout } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function UserPreferences() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, fullName, selectedGoal, selectedActivityLevel } = location.state || {
    email: '',
    fullName: '',
    selectedGoal: '',
    selectedActivityLevel: '',
  };

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [birthday, setBirthday] = useState('');
  const [dislikedFood, setDislikedFood] = useState('');
  const [trainingFrequency, setTrainingFrequency] = useState('');
  const [budget, setBudget] = useState('');
  const [trainingLocation, setTrainingLocation] = useState('');

  const handleSubmit = () => {
    if (!weight || !height || !birthday || !trainingFrequency || !budget ) {
      alert('Please fill in all required fields');
      return;
    }

    // Calculate age from birthday (optional)
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    console.log('User data:', {
      email,
      fullName,
      selectedGoal,
      selectedActivityLevel,
      weight,
      height,
      birthday,
      age,
      dislikedFood,
      trainingFrequency,
      budget,
      trainingLocation,
    });

    navigate('/home'); // Redirect to HomePage after form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[450px] mx-auto p-5">
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
        <main className="px-4 text-center">
          <h1 className="text-2xl font-semibold mb-2">Please enter your information</h1>

          <div className="flex flex-col gap-6">
            {/* Weight, Height, and Birthday in the same line */}
            <div className="flex gap-4">
              <div className="flex-1 text-left">
                <label className="block text-gray-700 font-semibold mb-2 text-center">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Weight"
                  required
                />
              </div>

              <div className="flex-1 text-left">
                <label className="block text-gray-700 font-semibold mb-2 text-center">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Height"
                  required
                />
              </div>

              <div className="flex-1 text-left">
                <label className="block text-gray-700 font-semibold mb-2 text-center">Birthday</label>
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  style={{ maxWidth: '150px' }}
                  required
                />
              </div>
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-2">What’s the food that you don’t like or allergic to?</label>
              <input
                type="text"
                value={dislikedFood}
                onChange={(e) => setDislikedFood(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="Enter disliked food"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-2">What will be your budget for the diet?</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                required
              >
                <option value="">Select</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="text-left">
              <label className="block text-gray-700 font-semibold mb-2">How many times can you train every week?</label>
              <select
                value={trainingFrequency}
                onChange={(e) => setTrainingFrequency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                required
              >
                <option value="">Select</option>
                <option value="0">No training</option>
                <option value="1-2">1-2 times</option>
                <option value="3-4">3-4 times</option>
                <option value="5+">5+ times</option>
              </select>
            </div>

            {trainingFrequency !== '0' && (
              <div className="text-left">
                <label className="block text-gray-700 font-semibold mb-2">Where will you train?</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setTrainingLocation('home')}
                    className={`flex-1 p-4 border border-gray-200 rounded-lg transition-colors bg-gray-100 ${
                      trainingLocation === 'home' ? 'bg-gray-200 border-[#111]' : 'hover:bg-gray-200'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => setTrainingLocation('gym')}
                    className={`flex-1 p-4 border border-gray-200 rounded-lg transition-colors bg-gray-100 ${
                      trainingLocation === 'gym' ? 'bg-gray-200 border-[#111]' : 'hover:bg-gray-200'
                    }`}
                  >
                    Gym
                  </button>
                </div>
              </div>)}
          </div>

          <button
            onClick={handleSubmit}
            className="w-2/5 bg-black text-white py-3 rounded-3xl font-medium hover:bg-gray-800 transition-colors mt-8"
          >
            Apply
          </button>
        </main>
      </div>
    </div>
  );
}

export default UserPreferences;
