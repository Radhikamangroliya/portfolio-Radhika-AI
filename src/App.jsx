// -------------------------------------------------------------
// App.jsx — Root of Radhika's AI Portfolio
// -------------------------------------------------------------

import React from "react";

// Global styles
import "./styles/global.css";
import "./styles/theme.css";
import "./styles/animations.css";

// Routing system (includes navbar, footer, ChatDock)
import AppRouter from "./router.jsx";

export default function App() {
  return <AppRouter />;
}
