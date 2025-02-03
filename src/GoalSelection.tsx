import React, { useState } from 'react';
import { ChevronLeft, Layout} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function GoalSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, fullName } = location.state || { email: '', fullName: '' };
  const [selectedGoal, setSelectedGoal] = useState('');

  const goals = [
    {
      category: 'Lose weight',
      options: [
        'Cutting (gain muscles and lose fat) using Cardio',
        'Cutting (gain muscles and lose fat) using Diet',
      ],
    },
    {
      category: 'Gain weight',
      options: [
        'Bulk fast (high carb)',
        'Clean Bulk (high protein)',
      ],
    },
    {
      category: 'Maintain weight',
      options: [
        'Cutting (gain muscles and lose fat)',
        'Keep muscles and fat',
      ],
    },
  ];

  const handleSubmit = () => {
    if (!selectedGoal) {
      alert('Please select a goal');
      return;
    }
  
    console.log('User data:', { email, fullName, selectedGoal });
    navigate('/activity-level', { state: { email, fullName, selectedGoal } }); // Redirect to activity level selection
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
          <h1 className="text-2xl font-semibold mb-2">Let's start with goals</h1>
          <p className="text-gray-600 mb-8">Select your goal</p>

          <div className="flex flex-col gap-6">
            {goals.map((group, index) => (
              <div key={index} className="text-left">
                <h2 className="text-xl font-semibold mb-3">{group.category}</h2>
                <div className="flex flex-col gap-3">
                  {group.options.map((goal, idx) => (
                    <label
                      key={idx}
                      className={`flex items-center p-4 border border-gray-200 rounded-lg transition-colors cursor-pointer bg-gray-100 ${
                        selectedGoal === goal
                          ? 'border-[#111] bg-gray-200' // Selected state
                          : 'hover:bg-gray-200' // Hover state
                      }`}
                    >
                      <input
                        type="radio"
                        name="goal"
                        value={goal}
                        checked={selectedGoal === goal}
                        onChange={() => setSelectedGoal(goal)}
                        className="hidden" // Hide the radio button
                      />
                      <span className="text-black">{goal}</span> {/* Black text */}
                    </label>
                  ))}
                </div>
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

export default GoalSelection;
