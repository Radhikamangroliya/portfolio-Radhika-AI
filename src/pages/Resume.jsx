// -------------------------------------------------------------
// Resume.jsx — One-Page Resume Template + PDF Viewer
// -------------------------------------------------------------

import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-page">

      {/* Title */}
      <h1 className="resume-title">Resume</h1>
      <p className="resume-sub">Radhika Mangroliya · AI Engineer · Full-Stack Developer</p>

      {/* ✅ One-Page Resume Template Card */}
      <div className="resume-card">

        <div className="resume-card-left">
          <h2>Radhika Mangroliya</h2>
          <p className="role">AI Engineer • Full-Stack Developer</p>

          <ul className="contact-list">
            <li>📍 Chicago, USA</li>
            <li>📧 radhika@example.com</li>
            <li>🔗 linkedin.com/in/radhika</li>
            <li>💼 github.com/radhikamangroliya</li>
          </ul>

          <h3 className="section-title">Skills</h3>
          <p>Python · React · FastAPI · Machine Learning · Data Engineering · Cloud (AWS) · SQL</p>

          <h3 className="section-title">Highlights</h3>
          <ul className="highlight-list">
            <li>✅ Built AI chat assistant for personal portfolio</li>
            <li>✅ Developed fast, scalable ML pipelines</li>
            <li>✅ Designed full-stack web apps using React + FastAPI</li>
          </ul>
        </div>

        <div className="resume-card-right">
          <h3 className="section-title">Experience</h3>

          <div className="exp-block">
            <h4>AI / Data Intern — BlueSAP</h4>
            <p className="exp-date">2023 – 2024</p>
            <p>Built predictive ML models, automated data workflows, deployed APIs.</p>
          </div>

          <div className="exp-block">
            <h4>Software Developer — Tech Solutions</h4>
            <p className="exp-date">2022 – 2023</p>
            <p>Shipped 15+ production features, improved backend service performance.</p>
          </div>
        </div>
      </div>

      {/* ✅ Buttons */}
      <div className="resume-buttons">
        <a href="/resume.pdf" target="_blank" className="btn view">View PDF</a>
        <a href="/resume.pdf" download className="btn download">Download PDF</a>
      </div>

      {/* ✅ PDF viewer below (optional) */}
      <iframe
        src="/resume.pdf"
        className="resume-viewer"
        title="Resume PDF"
      ></iframe>

    </div>
  );
}
