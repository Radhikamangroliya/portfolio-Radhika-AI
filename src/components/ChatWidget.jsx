import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm **Radhika AI**, your assistant. Ask me anything about Radhika’s skills, projects, internships!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/ask", {
        question: userMessage.text,
      });

      const aiMessage = {
        sender: "ai",
        text: res.data.answer || "I'm not sure — try another question!",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠ Backend offline — start FastAPI server!" },
      ]);
    }

    setIsLoading(false);
  }

  return (
    <>
      {/* ✅ Floating Bubble */}
      <div className="chat-bubble" onClick={() => setOpen(true)}>
        💬
      </div>

      {/* ✅ Popup Chat Window */}
      {open && (
        <div className="chat-popup">
          <div className="chat-header">
            <h3>Chat with AI</h3>
            <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.sender}`}>
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            ))}

            {isLoading && <div className="typing">• • •</div>}
            <div ref={bottomRef} />
          </div>

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
      )}
    </>
  );
}
