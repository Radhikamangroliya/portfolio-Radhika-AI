// -------------------------------------------------------------
// ChatDock.jsx — Floating chat bubble (opens full chat instantly)
// -------------------------------------------------------------

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatDock.css";

export default function ChatDock() {
  const navigate = useNavigate();

  const openChat = () => {
    navigate("/chat");
  };

  return (
    <div className="chatdock-wrapper" onClick={openChat}>
      <div className="chatdock-bubble">
        💬
      </div>
    </div>
  );
}
