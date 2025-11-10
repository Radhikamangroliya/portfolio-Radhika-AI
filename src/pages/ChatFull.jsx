// -------------------------------------------------------------
// ChatFull.jsx — Floating Popup Chat (Like Chintak's)
// -------------------------------------------------------------

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "../styles/chat.css";

export default function ChatFull() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm **Radhika AI**, ask me anything about Radhika’s experience, skills or projects!",
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
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const r = await axios.post("http://localhost:8000/ask", {
        question: input,
      });

      const aiMessage = {
        sender: "ai",
        text: r.data.answer || "I'm not sure, try again!",
      };

      setMessages((m) => [...m, aiMessage]);
    } catch {
      setMessages((m) => [
        ...m,
        { sender: "ai", text: "⚠️ Backend offline — start FastAPI server!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="chat-wrapper">
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

        {/* ✅ Input */}
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
