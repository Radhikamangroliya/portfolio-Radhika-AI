// -------------------------------------------------------------
// Resume.jsx — View + Download Radhika's Resume
// -------------------------------------------------------------

import React from "react";
import "./Resume.css";

export default function Resume() {
  const resumeFile = "/resume.pdf"; // ✅ located in public folder

  return (
    <div className="resume-wrapper">
      <h1 className="resume-title">Resume</h1>

      <div className="resume-buttons">
        <a href={resumeFile} target="_blank" className="resume-btn view">
          View Resume
        </a>

        <a href={resumeFile} download className="resume-btn download">
          Download PDF
        </a>
      </div>

      <iframe
        src={resumeFile}
        className="resume-iframe"
        title="Radhika Resume"
      ></iframe>
    </div>
  );
}
