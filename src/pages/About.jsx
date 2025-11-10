import React from "react";
import "./About.css";
import about3D from "../assets/about-3d.png";   // ✅ Correct path

export default function About() {
  return (
    <div className="about-container">

      <h1 className="about-title">About Me</h1>
      <p className="about-sub">
        A builder at heart — I use AI, data, and code to create powerful, human-centered digital experiences.
      </p>

      {/* ============ TWO COLUMN SECTION ============ */}
      <section className="about-section">

        {/* -------- LEFT TEXT -------- */}
        <div className="about-left">
          <h2 className="section-title">Who I Am</h2>

          <p className="about-text">
            I’m <strong>Radhika Mangroliya</strong>, an AI/ML engineer and full-stack developer
            who loves turning ideas into real, scalable applications.
          </p>

          <p className="about-text">
            Passionate about <strong>AI, automation, UX, and cloud engineering</strong> — I enjoy
            building intelligent systems that solve business problems.
          </p>

          <p className="about-text">
            Whether it's <strong>RAG systems</strong>, deploying apps with <strong>CI/CD</strong>, or 
            designing clean front-end experiences — I thrive where creativity meets engineering.
          </p>

          <p className="about-text">
            My mission: <strong>use AI to make digital experiences smarter, faster, and more personal.</strong>
          </p>

          {/* ✅ Resume Button */}
          <a href="/resume.pdf" target="_blank" className="resume-button">
            Download Resume →
          </a>
        </div>

        {/* -------- RIGHT IMAGE -------- */}
        <div className="about-right">
          <img src={about3D} alt="Radhika 3D Illustration" className="about-3d-img" />
        </div>

      </section>

      {/* ✅ Stats Row */}
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

    </div>
  );
}
