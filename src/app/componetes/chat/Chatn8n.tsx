'use client';

import { useEffect } from 'react';
import '@n8n/chat/dist/style.css';

interface Chatn8nProps {
  webhookUrl: string; // URL pública de tu Chat Trigger en Render
}

const Chatn8n = ({ webhookUrl }: Chatn8nProps) => {
  useEffect(() => {
    // Import dinámico solo en cliente
    import('@n8n/chat').then(({ createChat }) => {
      const chatDiv = document.getElementById('n8n-chat');
      if (chatDiv) chatDiv.innerHTML = ''; // limpia chat anterior

      createChat({
        webhookUrl: "https://n8n-oz3s.onrender.com/webhook/3579c138-48ac-4200-ac9e-dc74df06241f/chat",
        target: '#n8n-chat',
        mode: 'window', // chat flotante seguro para producción
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        showWelcomeScreen: false,
        enableStreaming: false,
        i18n: {
          es: {
            title: '¡Hola! 👋',
            subtitle: 'Estamos para ayudarte 24/7.',
            footer: '',
            getStarted: 'Nueva conversación',
            inputPlaceholder: 'Escribí tu pregunta...',
            closeButtonTooltip: 'Cerrar chat',
          },
        },
        initialMessages: [
          '¡Hola! 👋',
          'Mi nombre es Nathan. ¿En qué puedo ayudarte hoy?',
          '👉 [Hablar con un asesor comercial](https://wa.me/5491112345678?text=Hola%20Agustín%20Web.%20Estoy%20interesado%20en%20saber%20sobre...)'
        ],
      });
    });
  }, [webhookUrl]);

  // El div puede estar vacío; el chat se renderiza dentro
  return <div id="n8n-chat" style={{ height: '0px', width: '0px' }} />;
};

export default Chatn8n;
