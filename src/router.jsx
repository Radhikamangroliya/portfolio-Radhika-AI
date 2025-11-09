// -------------------------------------------------------------
// router.jsx — All pages + layout + ChatDock
// -------------------------------------------------------------

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- Pages ---
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Skills from "./pages/Skills.jsx";
import ChatFull from "./pages/ChatFull.jsx";

// --- Layout components ---
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ChatDock from "./components/ChatDock.jsx";

// Scroll to top on every route change
function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/chat" element={<ChatFull />} />
      </Routes>

      <Footer />

      {/* ✅ ChatDock MUST be inside BrowserRouter to use useNavigate */}
      <ChatDock />
    </BrowserRouter>
  );
}
