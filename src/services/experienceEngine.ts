import type { ExperienceCardData } from '../models/experience';
import type { ExperienceEvent } from './websocket';
import { EVENTS } from './events';

export function applyExperienceEvent(
  cards: ExperienceCardData[],
  event: ExperienceEvent
): ExperienceCardData[] {
  if (event.event === EVENTS.PROFILE_AUTHENTICATED) {
    return cards.map((card) => {
      if (card.id === 'profile') {
        return {
          ...card,
          message:
            'Welcome back, Alex Morgan\nReturning guest\nVegetarian\nOutdoor activities',
          highlight: 'Guest profile loaded',
          prompt: undefined,
        };
      }

      if (card.id === 'dining') {
        return {
          ...card,
          message:
            'Discover the best restaurants at Aurora Resort.',
          highlight: undefined,
          prompt: 'Book dinner for Saturday night.',
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.DINING_CONFIRMED) {
    return cards.map((card) => {
      if (card.id === 'dining') {
        return {
          ...card,
          message:
            'Ocean Terrace\nSaturday · 7:30 PM',
          highlight: 'Reservation confirmed',
          prompt: undefined,
        };
      }

      if (card.id === 'activities') {
        return {
          ...card,
          message:
            "Let's find something memorable for your weekend.",
          highlight: undefined,
          prompt:
            'Find an activity for Saturday afternoon.',
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.ACTIVITIES_RECOMMENDED) {
    return cards.map((card) => {
      if (card.id === 'activities') {
        return {
          ...card,
          message:
            'Sunset Kayaking\nSaturday · 4:00 PM',
          highlight: 'Preparing your reservation...',
          prompt: undefined,
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.ACTIVITIES_WAIVER_SENT) {
    return cards.map((card) => {
      if (card.id === 'activities') {
        return {
          ...card,
          message:
            'Sunset Kayaking\nPlease review the waiver on your phone and tell me when you are ready.',
          highlight: 'Waiver sent to your phone',
          prompt: undefined,
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.ACTIVITIES_WAIVER_ACCEPTED) {
    return cards.map((card) => {
      if (card.id === 'activities') {
        return {
          ...card,
          message:
            'Sunset Kayaking\nSaturday · 4:00 PM',
          highlight:
            'Waiver accepted\nReservation confirmed',
          prompt: undefined,
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.ACTIVITIES_QR_GENERATED) {
    return cards.map((card) => {
      if (card.id === 'activities') {
        return {
          ...card,
          message:
            'Sunset Kayaking\nSaturday · 4:00 PM',
          highlight:
            'Reservation confirmed\nQR activity check-in pass generated',
          prompt: undefined,
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.TRANSPORTATION_AVAILABLE) {
    return cards.map((card) => {
      if (card.id === 'transportation') {
        return {
          ...card,
          message:
            "Your activity is ready. Let's arrange your transportation.",
          highlight: undefined,
          prompt: 'Arrange transportation to my activity.',
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.TRANSPORTATION_CONFIRMED) {
    return cards.map((card) => {
      if (card.id === 'transportation') {
        return {
          ...card,
          message:
            'Electric Shuttle\nLobby pickup · 3:30 PM',
          highlight: 'Transportation confirmed',
          prompt: undefined,
        };
      }

      return card;
    });
  }

  if (event.event === EVENTS.EXPERIENCE_COMPLETED) {
    return cards.map((card) => {
      if (card.id === 'transportation') {
        return {
          ...card,
          message:
            'Electric Shuttle\nLobby pickup · 3:30 PM',
          highlight:
            'Weekend itinerary sent to your phone',
          prompt: undefined,
        };
      }

      return {
        ...card,
        prompt: undefined,
      };
    });
  }

  return cards;
}