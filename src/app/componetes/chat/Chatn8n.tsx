'use client';

import { useEffect } from 'react';
import '@n8n/chat/dist/style.css';

interface Chatn8nProps {
  webhookUrl: "https://n8n-oz3s.onrender.com/chat/MgQWhqPySE5bfqwb"; // URL del Chat Trigger de n8n
}

const Chatn8n = ({ webhookUrl }: Chatn8nProps) => {
  useEffect(() => {
    // Import dinámico para que solo se ejecute en el cliente
    import('@n8n/chat').then(({ createChat }) => {
      const chatDiv = document.getElementById('n8n-chat');
      if (chatDiv) chatDiv.innerHTML = ''; // Limpia chats anteriores

      createChat({
        webhookUrl: "https://n8n-oz3s.onrender.com/chat/MgQWhqPySE5bfqwb",
        webhookConfig: { method: 'POST', headers: {} },
        target: '#n8n-chat',
        mode: 'window', // o 'embedded' si querés incrustado
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        metadata: {},
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
          'Hi there! 👋',
          'My name is Nathan. How can I assist you today?'
        ],
        i18n: {
          en: {
            title: 'Hi there! 👋',
            subtitle: "Start a chat. We're here to help you 24/7.",
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
            closeButtonTooltip: 'Cerrar chat',
          },
        },
        enableStreaming: false,
      });
    });
  }, [webhookUrl]);

  return (
    <div
      id="n8n-chat"
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    />
  );
};

export default Chatn8n;
