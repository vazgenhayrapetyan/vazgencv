import React from "react";
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/vazgencv" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
