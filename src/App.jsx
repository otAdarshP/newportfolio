
import Footer from "./components/Footer";
import HeroSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Contribution from "./components/Contribution";


function App() {
  // 🔹 Centralize darkMode state here so all components share it
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* Apply global background + text depending on theme */}
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#010714] text-white" : "bg-white text-black"}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HeroSection darkMode={darkMode} />} />
            <Route path="/projects" element={<Project darkMode={darkMode} />} />
            <Route path="/skills" element={<Skills darkMode={darkMode} />} />
            <Route path="/blog" element={<Contribution darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </div>
        
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
