// -----------------------------------------------------------------------------
// ExperienceTimeline.jsx
// Beautiful neon vertical timeline showing Experience + Education.
// Fully human-written, recruiter-friendly, clean & modern UI.
// -----------------------------------------------------------------------------

import React from "react";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline({ items = [] }) {
  return (
    <div className="timeline-container">

      {items.map((exp, idx) => (
        <div key={idx} className="timeline-item">

          {/* LEFT SIDE — YEAR */}
          <div className="timeline-year">{exp.year}</div>

          {/* MIDDLE — VERTICAL LINE + DOT */}
          <div className="timeline-line">
            <span className="timeline-dot"></span>
          </div>

          {/* RIGHT SIDE — CONTENT */}
          <div className="timeline-content box-glow">

            <h3 className="timeline-role">{exp.role}</h3>
            <h4 className="timeline-company">{exp.company}</h4>

            {/* RESPONSIBILITIES */}
            <ul className="timeline-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {/* TECH STACK TAGS */}
            <div className="timeline-tags">
              {exp.tech.map((t, i) => (
                <span key={i} className="timeline-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
