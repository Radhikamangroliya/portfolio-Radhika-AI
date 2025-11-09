// --------------------------------------------------------------------
// Experience.jsx
// Timeline of your professional experience + education.
// Each entry includes impact bullets + tech tags.
// Human-written and recruiter-optimized ✅
// --------------------------------------------------------------------

import React from "react";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-wrapper">

      {/* ------------------------------
          PAGE HEADER
      ------------------------------- */}
      <section className="experience-header">
        <h1 className="experience-title">Experience</h1>
        <p className="experience-subtitle">
          My work blends AI, machine learning, automation, and full-stack engineering
          to build real, scalable intelligence into products.
        </p>
      </section>

      {/* ------------------------------
          TIMELINE CONTENT
      ------------------------------- */}
      <ExperienceTimeline
        items={[

          // ✅ Bluesap Solutions Inc — Current Role
          {
            year: "June 2024 – Present",
            role: "AI & Data Automation Engineer",
            company: "Bluesap Solutions Inc, New York, USA",
            bullets: [
              "Designed AI-powered sales intelligence pipelines using Python, Tableau, and SQL to analyze jewelry sales, seasonal demand, and customer behavior — improving forecast accuracy by 20%.",
              "Developed personalized recommendation models using NLP + Generative AI, boosting customer engagement and repeat purchases by 15%.",
              "Automated multi-source data aggregation using AWS Lambda and serverless workflows, reducing manual processing by 70%.",
              "Engineered predictive inventory analytics models that reduced stockouts by 25% and optimized vendor reordering cycles.",
              "Built scalable e-commerce & jewelry management platforms with secure payments, product catalogs, and role-based portals — improving catalog accuracy by 35%.",
              "Automated deployments with CI/CD pipelines (Docker, Jenkins, Kubernetes, AWS Lambda), reducing release cycles by 40% and saving 10+ hours per week.",
              "Collaborated in Agile/Scrum teams to deliver high-impact retail and AI automation solutions."
            ],
            tech: [
              "Python", "NLP", "Generative AI", "Tableau", "SQL", "AWS Lambda",
              "Serverless", "Docker", "Jenkins", "Kubernetes", "CI/CD", "E-commerce"
            ]
          },

          // ✅ Cerebulb — Deep Learning + Computer Vision + Forecasting
          {
            year: "Jan 2021 – Nov 2023",
            role: "Data Science Intern",
            company: "Cerebulb, Gift City, Gandhinagar, India",
            bullets: [
              "Engineered an end-to-end video summarization system using deep learning (Object Detection + Text Summarization), reducing manual review time by 40%.",
              "Implemented CNN-based object detection and LSTM captioning with attention, improving summary accuracy by 15%.",
              "Optimized time-series forecasting models for chemical, cement, and mining datasets — improving predictive accuracy by 8% and achieving density forecasts within 0.7% of optimal.",
              "Built and deployed real-time IoT dashboards (Matplotlib) enabling teams to visualize density/temperature variations, reducing reporting delays by 60% and improving process stability by 15%."
            ],
            tech: [
              "CNN", "LSTM", "Attention Models", "Deep Learning", 
              "Time-Series Forecasting", "IoT Analytics", "Python", "Matplotlib"
            ]
          },

          // ✅ Education — DePaul University (Master’s)
          {
            year: "Jan 2024 – Aug 2025",
            role: "M.S. Computer Science (GPA: 3.5/4)",
            company: "DePaul University, Chicago, IL",
            bullets: [
              "Coursework in AI, Machine Learning, Distributed Systems, Cloud Computing, and Software Engineering.",
              "Completed multiple AI/ML projects including RAG pipelines, multi-agent systems, and cloud-native deployments.",
              "Gained hands-on experience applying theory to real engineering challenges and production-grade AI tools."
            ],
            tech: ["AI", "ML", "Distributed Systems", "Cloud", "Python"]
          },

          // ✅ Education — Gujarat Technological University (Bachelor’s)
          {
            year: "June 2018 – June 2022",
            role: "B.E. Information Technology (GPA: 3.8/4)",
            company: "Gujarat Technological University, India",
            bullets: [
              "Completed foundational training in algorithms, software engineering, databases, networking, and full-stack development.",
              "Built early projects in web dev, automation, and data analysis."
            ],
            tech: ["JavaScript", "Databases", "Algorithms", "Software Engineering"]
          }
        ]}
      />
    </div>
  );
}
