'use client';

import { useEffect } from "react";
import { createChat } from "@n8n/chat";
import { trackEvent } from "@/lib/web-intelligence";

type ChatWidgetProps = {
  webhookUrl: string;
};

export default function ChatWidget({ webhookUrl }: ChatWidgetProps) {
  useEffect(() => {
    createChat({
      webhookUrl,
      target: "#n8n-chat",
      mode: "window",

      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",

      loadPreviousSession: true,
      showWelcomeScreen: false,
      enableStreaming: false,

      i18n: {
        es: {
          title: "¡Hola! 👋",
          subtitle: "Estamos para ayudarte 24/7.",
          footer: "",
          getStarted: "Nueva conversación",
          inputPlaceholder: "Escribí tu pregunta...",
          closeButtonTooltip: "Cerrar chat",
        },
      },

      initialMessages: [
        "¡Hola! 👋",
        "Mi nombre es Nathan. ¿En qué puedo ayudarte hoy?",
        "👉 [Hablar con un asesor comercial](https://wa.me/5492612388045?text=Hola%20Agustín%20Web.%20Estoy%20interesado%20en%20saber%20sobre...)",
      ],
    });

    const handleChatClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (href?.includes("wa.me/5492612388045")) {
        trackEvent("whatsapp_click", {
          source: "n8n_chat",
        });
      }
    };

    document.addEventListener("click", handleChatClick);

    return () => {
      document.removeEventListener("click", handleChatClick);
    };
  }, [webhookUrl]);

  return <div id="n8n-chat" />;
}