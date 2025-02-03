import React, { useState } from 'react';
import { ChevronLeft, Layout } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function ActivityLevelSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, fullName, selectedGoal } = location.state || { email: '', fullName: '', selectedGoal: '' };
  const [selectedActivityLevel, setSelectedActivityLevel] = useState('');

  const activityLevels = [
    { level: 'No exercise', description: 'Only daily normal activities' },
    { level: 'Light exercise', description: 'Exercising 1 to 3 times a week' },
    { level: 'Moderate exercise', description: 'Exercising 4 to 5 times a week' },
    { level: 'Intense exercise', description: 'Exercising 6 to 7 times a week' },
    { level: 'Extremely intense exercise or physical labor', description: 'Very intense exercise daily or physical work' },
  ];

  const handleSubmit = () => {
    if (!selectedActivityLevel) {
      alert('Please select an activity level');
      return;
    }
  
    console.log('User data:', { email, fullName, selectedGoal, selectedActivityLevel });
    navigate('/user-preferences', { state: { email, fullName, selectedGoal, selectedActivityLevel } }); // Redirect to user preferences
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
          <h1 className="text-2xl font-semibold mb-2">What's your baseline activity level?</h1>
          <p className="text-gray-600 mb-8">Not including workout</p>

          <div className="flex flex-col gap-6">
            {activityLevels.map((activity, index) => (
              <div key={index} className="text-left">
                <label
                  className={`flex flex-col p-4 border border-gray-200 rounded-lg transition-colors cursor-pointer bg-gray-100 ${
                    selectedActivityLevel === activity.level
                      ? 'border-[#111] bg-gray-200' // Selected state
                      : 'hover:bg-gray-200' // Hover state
                  }`}
                >
                  <input
                    type="radio"
                    name="activityLevel"
                    value={activity.level}
                    checked={selectedActivityLevel === activity.level}
                    onChange={() => setSelectedActivityLevel(activity.level)}
                    className="hidden" // Hide the radio button
                  />
                  <span className="text-black font-semibold">{activity.level}</span>
                  <span className="text-gray-600">{activity.description}</span>
                </label>
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="w-2/5 bg-black text-white py-3 rounded-3xl font-medium hover:bg-gray-800 transition-colors mt-8"
          >
            Next
          </button>
        </main>
      </div>
    </div>
  );
}

export default ActivityLevelSelection;
