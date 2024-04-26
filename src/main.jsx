import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import App from "./pages/App.jsx";
import NewPage from "./pages/NewPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
