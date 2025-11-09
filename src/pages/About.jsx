// --------------------------------------------------------------------
// About.jsx
// HUMAN-WRITTEN ✨
// This is Radhika's About page — a clean introduction + highlights.
// Recruiters read this FIRST after the homepage.
// --------------------------------------------------------------------

import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper">

      {/* =============================
          TITLE SECTION
      ============================== */}
      <section className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          A builder at heart — I use AI, data, and code to create powerful,
          human-centered digital experiences.
        </p>
      </section>

      {/* =============================
          CORE STORY
      ============================== */}
      <section className="about-story neon-box">
        <h2>Who I Am</h2>

        <p>
          I’m <strong>Radhika Mangroliya</strong>, a passionate AI/ML and full-stack
          developer who loves turning ideas into real, scalable applications.
        </p>

        <p>
          Whether it’s <strong>building RAG systems</strong>, deploying apps with
          <strong>cloud + CI/CD</strong>, or designing <strong>clean UX flows</strong>,
          I’m deeply interested in the intersection of AI and product design.
        </p>

        <p>
          I thrive in environments where creativity meets engineering — where
          prototypes evolve into polished products powered by intelligence.
        </p>

        <p>
          My goal is simple: <strong>use AI to make digital experiences smarter,
          faster, and more personal.</strong>
        </p>
      </section>

      {/* =============================
          HIGHLIGHT METRICS
      ============================== */}
      <section className="about-highlights">
        <div className="highlight-card">
          <h3>20+ Projects</h3>
          <p>AI • ML • Data • Full-Stack</p>
        </div>

        <div className="highlight-card">
          <h3>5+ Years</h3>
          <p>Hands-on development experience</p>
        </div>

        <div className="highlight-card">
          <h3>5+ AI Apps</h3>
          <p>RAG • CV • LLM • NLP</p>
        </div>
      </section>

      {/* =============================
          AI BOX (OPTIONAL)
          Shows personality + connects to Chat page
      ============================== */}
      <section className="about-ai-box neon-outline">
        <h3>Meet Radhika 2.0</h3>
        <p>
          My AI clone can answer questions about my experience, skills, or
          projects — trained on my real resume + portfolio.
        </p>

        <button
          className="ai-learn-btn"
          onClick={() => (window.location.href = "/chat")}
        >
          Chat with Radhika 2.0 →
        </button>
      </section>

    </div>
  );
}
