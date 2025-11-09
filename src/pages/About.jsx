import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <p className="about-subtitle">
        A builder at heart — I use AI, data, and code to create powerful,
        human-centered digital experiences.
      </p>

      {/* WHO I AM CARD */}
      <div className="about-card">
        <h2 className="section-heading">Who I Am</h2>

          <p>I’m <strong>Radhika Mangroliya</strong>, an AI Engineer and full-stack developer who loves turning complex ideas into intelligent, real-world solutions.
          </p>

          <p>A focused and enthusiastic builder, I work at the intersection of <strong> AI, machine learning, automation, and product engineering</strong>.
            My passion for this field comes from deeply understanding core concepts
            and applying them across real projects — from RAG systems and LLM apps
            to cloud-based automation and full-stack web experiences.
          </p>

          <p>
            I thrive when solving meaningful problems, designing clean user
            experiences, and building systems that are smart, scalable, and impactful.
          </p>


        {/* RESUME BUTTONS */}
        <div className="resume-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view"
          >
            View Resume
          </a>

          <a href="/resume.pdf" download className="btn-download">
            Download Resume
          </a>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>20+ Projects</h3>
          <p>AI • ML • Data • Full-Stack</p>
        </div>

        <div className="stat-card">
          <h3>5+ Years</h3>
          <p>Hands-on development experience</p>
        </div>

        <div className="stat-card">
          <h3>5+ AI Apps</h3>
          <p>RAG • CV • LLM • NLP</p>
        </div>
      </div>

      {/* LET'S CONNECT */}
      <div className="connect-section">
        <h2 className="section-heading">Let’s Connect</h2>

        <p className="connect-text">
          I'm always interested in discussing AI, technology, and new opportunities.
        </p>

        <div className="connect-links">
          <a
            href="https://github.com/Radhikamangroliya"
            target="_blank"
            className="connect-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/radhika-mangroliya-87aa75214/"
            target="_blank"
            className="connect-btn"
          >
            LinkedIn
          </a>

          <a href="mailto:radhikamangroliya0@gmail.com" className="connect-btn">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
