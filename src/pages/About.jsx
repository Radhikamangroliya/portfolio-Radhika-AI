// -------------------------------------------------------------------
// About.jsx — Personal Bio + Stats + Contact Section
// -------------------------------------------------------------------

import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">

      <h1 className="about-title">About Me</h1>
      <p className="about-sub">
        A builder at heart — I use AI, data, and code to create powerful,
        human-centered digital experiences.
      </p>

      {/* WHO I AM */}
      <section className="about-card">
        <h2 className="section-title">Who I Am</h2>

        <p className="about-text">
          I’m <strong>Radhika Mangroliya</strong>, an AI/ML engineer and full-stack developer
          who loves turning ideas into real, scalable applications.
        </p>

        <p className="about-text">
          Passionate about the intersection of <strong>AI, automation, UX, and
          cloud engineering</strong> — I enjoy building intelligent systems that
          solve real business problems.
        </p>

        <p className="about-text">
          Whether it's <strong>building RAG systems</strong>, deploying apps with
          <strong> CI/CD</strong>, or designing clean front-end experiences,
          I thrive where creativity meets engineering.
        </p>

        <p className="about-text">
          My mission: <strong>use AI to make digital experiences smarter,
          faster, and more personal.</strong>
        </p>

        {/* ✅ Resume View/Download */}
        <a href="/resume.pdf" target="_blank" className="resume-button">
          View / Download Resume →
        </a>
      </section>

      {/* Stats row */}
      <div className="stats-row">
        <div className="stat-box">
          <h3>20+ Projects</h3>
          <p>AI • ML • Full-Stack</p>
        </div>

        <div className="stat-box">
          <h3>5+ Years</h3>
          <p>Hands-on development</p>
        </div>

        <div className="stat-box">
          <h3>5+ AI Apps</h3>
          <p>RAG • CV • LLM • NLP</p>
        </div>
      </div>

      {/* ================= CONTACT CARD ================= */}
      <div className="about-card contact-card">
        <h2 className="section-title">Let’s Connect</h2>

        <p className="about-text small">
          I’m always open to discussing AI, technology, collaboration, or new opportunities.
        </p>

        <div className="contact-buttons">
          <a className="blue-btn" href="mailto:radhikamangroliya0@gmail.com">
            Email →
          </a>

          <a className="blue-btn" href="https://www.linkedin.com/in/radhika-mangroliya-87aa75214/" target="_blank">
            LinkedIn →
          </a>

          <a className="blue-btn" href="https://github.com/Radhikamangroliya" target="_blank">
            GitHub →
          </a>
        </div>
      </div>


    </div>
  );
}
