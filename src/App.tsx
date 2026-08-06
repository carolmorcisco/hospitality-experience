import { useState } from 'react';
import HospitalityLanding from './pages/HospitalityLanding';
import HospitalityExperience from './pages/HospitalityExperience';

function App() {
  const [experienceStarted, setExperienceStarted] = useState(false);

  if (experienceStarted) {
    return <HospitalityExperience />;
  }

  return (
    <div>
      <HospitalityLanding />

      <button
        type="button"
        onClick={() => setExperienceStarted(true)}
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          padding: '12px 18px',
        }}
      >
        Start test
      </button>
    </div>
  );
}

export default App;