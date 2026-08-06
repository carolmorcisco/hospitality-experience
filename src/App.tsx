import { useEffect, useState } from 'react';

import ExperienceSelection from './pages/ExperienceSelection';
import HospitalityExperience from './pages/HospitalityExperience';
import { connectExperienceWebSocket } from './services/websocket';
import { EVENTS } from './services/events';

function App() {
  const [selectedExperience, setSelectedExperience] =
    useState<string | null>(null);

  useEffect(() => {
    const socket = connectExperienceWebSocket((event) => {
      console.log('Runtime event received:', event);

      if (
        event.event === EVENTS.EXPERIENCE_SELECTED &&
        event.experience
      ) {
        setSelectedExperience(event.experience);
      }
    });

    return () => {
      socket.close();
    };
  }, []);

  if (selectedExperience === 'hospitality') {
    return <HospitalityExperience />;
  }

  return <ExperienceSelection />;
}

export default App;