import type { ExperienceCardData } from '../models/experience';
import type { ExperienceEvent } from './websocket';

export function applyExperienceEvent(
  cards: ExperienceCardData[],
  event: ExperienceEvent
): ExperienceCardData[] {
  switch (event.event) {
    case 'profile.authenticated':
      return cards.map((card) => {
        if (card.id === 'profile') {
          return {
            ...card,
            message:
              'Returning Guest\nVegetarian\nOutdoor Activities\nOcean View\n\nPersonal welcome phrase:\nWebexOne 2026',
            prompt: undefined,
            status: 'confirmed',
          };
        }

        if (card.id === 'dining') {
          return {
            ...card,
            message:
              'Based on your preferences, Ocean Terrace is a great match.',
            prompt: 'Book dinner for Saturday at 7:30 PM.',
            status: 'active',
          };
        }

        return card;
      });

    case 'dining.confirmed':
      return cards.map((card) => {
        if (card.id === 'dining') {
          return {
            ...card,
            message:
              'Reservation confirmed\nOcean Terrace\nSaturday · 7:30 PM\nVegetarian preference noted',
            prompt: undefined,
            status: 'confirmed',
          };
        }

        if (card.id === 'activities') {
          return {
            ...card,
            message:
              'Ready to find an activity based on your outdoor interests.',
            prompt: 'Find an activity for Saturday afternoon.',
            status: 'active',
          };
        }

        return card;
      });

    case 'activities.recommended':
      return cards.map((card) => {
        if (card.id === 'activities') {
          return {
            ...card,
            message:
              'Sunset Kayaking\nSaturday · 4:00 PM',
            prompt: undefined,
            status: 'active',
          };
        }

        return card;
      });

    case 'activities.waiver.sent':
      return cards.map((card) => {
        if (card.id === 'activities') {
          return {
            ...card,
            message:
              'Sunset Kayaking\nSaturday · 4:00 PM\n\nWaiver sent to your phone.\nPlease review it and tell me when you’re ready.',
            prompt: "I've read it.",
            status: 'active',
          };
        }

        return card;
      });

    case 'activities.waiver.accepted':
      return cards.map((card) => {
        if (card.id === 'activities') {
          return {
            ...card,
            message:
              '✓ Waiver accepted\nReservation confirmed',
            prompt: undefined,
            status: 'confirmed',
          };
        }

        return card;
      });

    case 'activities.qr.generated':
      return cards.map((card) => {
        if (card.id === 'activities') {
          return {
            ...card,
            message:
              '✓ Waiver accepted\nReservation confirmed\nQR activity check-in generated',
            prompt: undefined,
            status: 'confirmed',
          };
        }

        return card;
      });

    case 'transportation.available':
      return cards.map((card) => {
        if (card.id === 'transportation') {
          return {
            ...card,
            message:
              'Transportation is available for your activity.',
            prompt: 'Arrange transportation.',
            status: 'active',
          };
        }

        return card;
      });

    case 'transportation.confirmed':
      return cards.map((card) => {
        if (card.id === 'transportation') {
          return {
            ...card,
            message:
              'Transportation confirmed\nElectric Shuttle\nLobby pickup · 3:30 PM',
            prompt: undefined,
            status: 'confirmed',
          };
        }

        return card;
      });

    case 'experience.completed':
      return cards.map((card) => ({
        ...card,
        prompt: undefined,
        status: 'confirmed',
      }));

    default:
      return cards;
  }
}