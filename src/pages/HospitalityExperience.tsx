import { useEffect, useState } from 'react';

import ExperienceCard from '../components/ExperienceCard';
import type { ExperienceCardData } from '../models/experience';
import { connectExperienceWebSocket } from '../services/websocket';
import { applyExperienceEvent } from '../services/experienceEngine';

const initialCards: ExperienceCardData[] = [
  {
    id: 'profile',
    title: '👤 Profile',
    message: "Let's personalize your stay.",
    prompt: 'My name is Alex Morgan.\n\nPersonal welcome phrase:\nWebex One 2026',
  },
  {
    id: 'dining',
    title: '🍽 Dining',
    message:
      "We'll recommend restaurants after we get to know you.",
    prompt: 'Book dinner for Saturday at 7:30 PM.',
  },
  {
    id: 'activities',
    title: '🏖 Activities',
    message:
      "We'll personalize your activities after your profile is loaded.",
  },
  {
    id: 'transportation',
    title: '🚗 Transportation',
    message:
      'Transportation options will appear when your itinerary is ready.',
  },
];

function HospitalityExperience() {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const socket = connectExperienceWebSocket((event) => {
      console.log('Experience event received:', event);
  
      setCards((currentCards) =>
        applyExperienceEvent(currentCards, event)
      );
    });
  
    return () => {
      socket.close();
    };
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '48px',
      }}
    >
      <header
        style={{
          marginBottom: '32px',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '18px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#7dd3fc',
          }}
        >
          Aurora Resort
        </p>

        <h1
          style={{
            margin: '12px 0 8px',
            fontSize: '54px',
          }}
        >
          Planning your weekend...
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: '24px',
            color: '#cbd5e1',
          }}
        >
          Your AI Concierge is coordinating your experience.
        </p>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '24px',
        }}
      >
        {cards.map((card) => (
          <ExperienceCard
            key={card.id}
            card={card}
          />
        ))}
      </section>
    </main>
  );
}

export default HospitalityExperience;