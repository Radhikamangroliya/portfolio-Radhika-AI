// --------------------------------------------------------------------
// Projects.jsx
// This page showcases your AI, ML, GenAI, and full-stack projects.
// Structure: grid cards → each card uses ProjectCard component.
// HUMAN-WRITTEN ✨
// --------------------------------------------------------------------

import React from "react";
import ProjectCard from "../components/ProjectCard.jsx"; 
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-wrapper">
      
      {/* --------------------------
          PAGE HEADER
      --------------------------- */}
      <section className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          A collection of AI, GenAI, ML, and full-stack products I’ve built —
          from multi-agent systems to cloud-deployed RAG apps.
        </p>
      </section>

      {/* --------------------------
          PROJECT GRID
      --------------------------- */}
      <div className="projects-grid">

        {/* ✅ NEW PROJECT — Multi-Agent MARS */}
        <ProjectCard
          title="MARS — Multi-Agent Recommender System"
          description="Intelligent multi-agent chatbot for personalized movie recommendations and factual Q&A. Uses specialized agents, Gemini LLMs, FAISS vector search, and semantic embeddings with Gradio UI, deployed on GCP Cloud Run."
          tags={[
            "Python", "Multi-Agent Systems", "LLMs", "Gemini",
            "FAISS", "Vector DBs", "Gradio", "Google ADK", "Docker", "GCP"
          ]}
          link="#"
        />

        {/* ✅ UPDATED FULL VERSION — CareerFit AI */}
        <ProjectCard
          title="CareerFit AI — Resume & Job Match Assistant"
          description="End-to-end AI resume matcher using TF-IDF + XGBoost for skill scoring, LLM resume rewriting via AWS Bedrock (Claude), and full-stack deployment with React, Lambda, and S3. Improved ATS keyword coverage by 30%."
          tags={[
            "XGBoost", "TF-IDF", "Claude", "AWS Bedrock",
            "React.js", "Lambda", "S3", "Python", "Pandas"
          ]}
          link="#"
        />

        {/* ✅ NEW — LLM Post-Training + RL Pipeline */}
        <ProjectCard
          title="LLM Post-Training & Reinforcement Learning Pipeline"
          description="Built workflow orchestration using ChatGPT API, Zapier, and FastAPI for project automation. Integrated Claude + Gemini for RL-style feedback loops, reducing documentation workload by 35%."
          tags={[
            "ChatGPT API", "Claude", "Gemini",
            "RLHF Concepts", "FastAPI", "Zapier", "Python"
          ]}
          link="#"
        />

        {/* ✅ NEW — BioHealth AI (Easy GenAI + Biology) */}
        <ProjectCard
          title="BioHealth AI — Medical Report & Symptom Analyzer"
          description="Created a GenAI healthcare assistant to interpret symptoms, simplify medical reports, and provide health guidance using biomedical embeddings + LLMs. Includes secure PDF parsing and a clean React UI."
          tags={[
            "GenAI", "Biomedical NLP", "Embeddings",
            "LLMs", "Python", "Streamlit", "Healthcare AI"
          ]}
          link="#"
        />

        {/* ✅ Existing Project 1 – SkinTwin AI */}
        <ProjectCard
          title="SkinTwin AI — Personalized Skincare Assistant"
          description="AI-powered skincare analyzer using CV + NLP. Recommends routines based on skin conditions."
          tags={["Python", "TensorFlow", "FastAPI", "React"]}
          link="#"
        />

        {/* ✅ Existing Project 2 – Gas Station Growth AI */}
        <ProjectCard
          title="Gas-Station Growth AI"
          description="Business intelligence system with payroll, sales forecasting, and real-time dashboards."
          tags={["Python", "Flask", "SQL", "Azure"]}
          link="#"
        />

        {/* ✅ Existing Project 3 – Azure CI/CD Web App */}
        <ProjectCard
          title="Azure CI/CD Web App Deployment"
          description="End-to-end DevOps pipeline deploying a Flask app using Terraform + GitHub Actions."
          tags={["Azure", "Terraform", "CI/CD", "Flask"]}
          link="#"
        />

        {/* ✅ Existing Project 4 – Resume Job Matcher (Short Version) */}
        <ProjectCard
          title="CareerFit Lite — RAG Resume Matcher"
          description="React + Flask + Gemini RAG system to compare resumes with job descriptions and visualize gaps."
          tags={["LangChain", "Flask", "Gemini", "React"]}
          link="#"
        />

        {/* ✅ Existing Project 5 – Book Library API */}
        <ProjectCard
          title="Book Library API"
          description="CRUD + authentication API using .NET Core, EF, SQL Server, and Swagger."
          tags={[".NET", "EF Core", "SQL", "Azure"]}
          link="#"
        />

        {/* ✅ Existing Project 6 – WhatsApp Analyzer */}
        <ProjectCard
          title="WhatsApp Chat Analyzer"
          description="Sentiment analyzer using NLP (VADER + NLTK) with Streamlit dashboards."
          tags={["Python", "NLP", "Streamlit", "Visualization"]}
          link="#"
        />

      </div>
    </div>
  );
}
