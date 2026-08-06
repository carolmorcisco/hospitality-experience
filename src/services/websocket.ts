export type ExperienceEvent = {
    event: string;
    status?: string;
  };
  
  const GATEWAY_URL =
    'wss://deskpro-event-gateway.onrender.com';
  
  export function connectExperienceWebSocket(
    onEvent: (event: ExperienceEvent) => void
  ) {
    const socket = new WebSocket(GATEWAY_URL);
  
    socket.addEventListener('open', () => {
      console.log('Connected to Event Gateway');
    });
  
    socket.addEventListener('message', async (message) => {
      try {
        const text =
          typeof message.data === 'string'
            ? message.data
            : await message.data.text();
  
        if (!text.trim()) {
          return;
        }
  
        const event = JSON.parse(text) as ExperienceEvent;
  
        onEvent(event);
      } catch (error) {
        console.error(
          'Unable to process WebSocket event:',
          error
        );
      }
    });
  
    socket.addEventListener('close', () => {
      console.log('Disconnected from Event Gateway');
    });
  
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });
  
    return socket;
  }