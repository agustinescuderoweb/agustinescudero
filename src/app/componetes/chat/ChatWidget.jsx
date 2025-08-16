'use client'

import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll automático al final
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const appendMessage = (text, sender) => {
    setMessages((msgs) => [...msgs, { text, sender }]);
  };

  const sendMessage = async () => {
    const msg = input.trim();
    if (!msg) return;
    appendMessage("Tú: " + msg, "user");
    setInput("");

    try {
      const res = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      appendMessage("Bot: " + data.reply, "bot");
    } catch {
      appendMessage("Bot: Error al conectar con el servidor.", "bot");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div style={styles.widget}>
      <div style={styles.header}>Chat</div>
      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              ...(m.sender === 'user' ? styles.userMessage : styles.botMessage),
            }}
          >
            {m.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Escribí tu pregunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>Enviar</button>
      </div>
    </div>
  );
}


const styles = {
  widget: {
    position: 'fixed',
    right: 20,
    bottom: 20,
    width: '90vw',       // ancho responsivo, 90% viewport width
    maxWidth: 320,
    maxHeight: 420,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
    zIndex: 10000,
  },
  header: {
    backgroundColor: 'rgb(50, 205, 50)',
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    textAlign: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 8,
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: 24,
    cursor: 'pointer',
    lineHeight: 1,
  },
  messages: {
    flexGrow: 1,
    padding: 10,
    overflowY: 'auto',
    borderBottom: '1px solid #ccc',
  },
  message: {
    marginBottom: 8,
    padding: '6px 8px',
    borderRadius: 6,
    maxWidth: '80%',
    wordWrap: 'break-word',
  },
  userMessage: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#f1f0f0',
    alignSelf: 'flex-start',
  },
  inputArea: {
    display: 'flex',
    borderTop: '1px solid #ccc',
  },
  input: {
    flexGrow: 1,
    border: 'none',
    padding: 12,
    fontSize: 16,
    outline: 'none',
    boxSizing: 'border-box',
    borderRadius: '0 0 0 8px',
  },
  button: {
    width: 80,
    borderRadius: '0 0 8px 0',
    backgroundColor: 'rgb(50, 205, 50)',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: 16,
    border: 'none',
  },
  openButton: {
    position: 'fixed',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: 'rgb(50, 205, 50)',
    color: 'white',
    fontSize: 30,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    zIndex: 10000,
  },
};