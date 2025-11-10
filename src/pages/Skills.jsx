// -------------------------------------------------------------
// Skills.jsx — Horizontal Skill Cards with Icons (Expanded Version)
// -------------------------------------------------------------

import React from "react";
import "./Skills.css";

// ✅ ICON IMPORTS
import {
  FaBrain, FaMagic, FaRobot, FaDatabase,
  FaPython, FaReact, FaAws, FaDocker, FaJava, FaCode
} from "react-icons/fa";

import {
  SiScikitlearn, SiTensorflow, SiMongodb, SiPostgresql,
  SiFastapi, SiTailwindcss, SiPytorch, SiCplusplus, SiGithubactions,
  SiKubernetes, SiJenkins, SiLangchain
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="skills-page">
      <h1 className="skills-title">Skills & Expertise</h1>
      <p className="skills-sub">
        A blend of AI engineering, LLMs, ML, full-stack development, and cloud.
      </p>

      <div className="skills-grid">

        {/* ✅ Column 1 — Generative AI / LLMs */}
        <div className="skills-card">
          <h2>GenAI • LLMs • RAG</h2>

          <div className="skill-row">
            <SiLangchain className="skill-icon" />
            <span>LangChain / RAG Pipelines</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaBrain className="skill-icon" />
            <span>Embeddings / Vector Search</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaRobot className="skill-icon" />
            <span>LLMs (GPT • Claude • Gemini)</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaMagic className="skill-icon" />
            <span>Prompt Engineering</span>
            <div className="bar"></div>
          </div>
        </div>

        {/* ✅ Column 2 — Machine Learning */}
        <div className="skills-card">
          <h2>Machine Learning</h2>

          <div className="skill-row">
            <SiTensorflow className="skill-icon" />
            <span>XGBoost • LightGBM</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <SiScikitlearn className="skill-icon" />
            <span>Scikit-learn</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <SiPytorch className="skill-icon" />
            <span>Feature Engineering</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaBrain className="skill-icon" />
            <span>Time-Series Forecasting</span>
            <div className="bar"></div>
          </div>
        </div>

        {/* ✅ Column 3 — Frontend */}
        <div className="skills-card">
          <h2>Frontend Development</h2>

          <div className="skill-row">
            <FaReact className="skill-icon" />
            <span>React.js • Next.js</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <SiTailwindcss className="skill-icon" />
            <span>Tailwind CSS • UI Design</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaCode className="skill-icon" />
            <span>JavaScript (ES6+)</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaJava className="skill-icon" />
            <span>Java (OOP / DSA)</span>
            <div className="bar"></div>
          </div>
        </div>

        {/* ✅ Column 4 — Backend + Cloud */}
        <div className="skills-card">
          <h2>Backend & Cloud</h2>

          <div className="skill-row">
            <FaPython className="skill-icon" />
            <span>Python • FastAPI • Flask</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaDocker className="skill-icon" />
            <span>Docker • Microservices</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaAws className="skill-icon" />
            <span>AWS (Lambda, S3, Bedrock)</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <SiMongodb className="skill-icon" />
            <span>MongoDB • PostgreSQL</span>
            <div className="bar"></div>
          </div>
        </div>

        {/* ✅ Column 5 — DevOps & CI/CD */}
        <div className="skills-card">
          <h2>CI/CD • DevOps</h2>

          <div className="skill-row">
            <SiGithubactions className="skill-icon" />
            <span>GitHub Actions CI/CD</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <SiJenkins className="skill-icon" />
            <span>Jenkins Pipelines</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <SiKubernetes className="skill-icon" />
            <span>Kubernetes • Containers</span>
            <div className="bar"></div>
          </div>

          <div className="skill-row">
            <FaAws className="skill-icon" />
            <span>Cloud Deployments</span>
            <div className="bar"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
