// -------------------------------------------------------------------
// Navbar.jsx
// Radhika’s neon navigation bar (fixed, minimal, recruiter-friendly)
// -------------------------------------------------------------------

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <Link to="/" className="logo">
          Radhika <span className="accent">AI</span>
        </Link>
      </div>

      <div className="nav-right">
        <Link className={isActive("/about")} to="/about">
          About
        </Link>

        <Link className={isActive("/projects")} to="/projects">
          Projects
        </Link>

        <Link className={isActive("/experience")} to="/experience">
          Experience
        </Link>

        <Link className={isActive("/skills")} to="/skills">
          Skills
        </Link>

        <Link className="chat-btn" to="/chat">
          Chat
        </Link>
      </div>
    </nav>
  );
}
