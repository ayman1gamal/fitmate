import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignInSignUp from './SignInSignUp';
import GoalSelection from './GoalSelection';
import ActivityLevelSelection from './ActivityLevelSelection';
import UserPreferences from './UserPreferences';
import HomePage from './HomePage';

// Component to scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Trigger effect when the pathname changes

  return null; // This component doesn't render anything
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component inside the Router */}
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        <Route path="/goals" element={<GoalSelection />} />
        <Route path="/activity-level" element={<ActivityLevelSelection />} />
        <Route path="/user-preferences" element={<UserPreferences />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;