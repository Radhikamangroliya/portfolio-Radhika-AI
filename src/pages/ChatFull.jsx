// -------------------------------------------------------------
// ChatFull.jsx — Modern Floating Chat UI (Like your screenshot)
// -------------------------------------------------------------

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "../styles/chat.css";

export default function ChatFull() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm **Radhika 2.0**, your AI assistant. Ask me anything about Radhika’s projects, skills, experience, or internships!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/ask", {
        question: userMessage.text,
      });

      const aiMessage = {
        sender: "ai",
        text: response.data.answer || "I'm not sure — try asking another question!",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "⚠️ Backend offline — please start FastAPI!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="chat-wrapper">

      {/* ✅ Floating Chat Box */}
      <div className="chat-box">
        
        {/* ✅ Header */}
        <div className="chat-header">
          <h2>Chat with AI</h2>
          <p>Ask me anything!</p>

          <button className="close-chat" onClick={() => (window.location.href = "/")}>
            ✕
          </button>
        </div>

        {/* ✅ Messages */}
        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`bubble ${m.sender}`}>
              <ReactMarkdown>{m.text}</ReactMarkdown>
            </div>
          ))}

          {isLoading && <div className="typing-dots">• • •</div>}

          <div ref={bottomRef} />
        </div>

        {/* ✅ Message Input */}
        <form className="chat-input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
