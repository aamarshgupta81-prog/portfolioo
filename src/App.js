import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import QualificationsSection from "./components/QualificationsSection";
import ActivitiesSection from "./components/ActivitiesSection";
import InterestsSection from "./components/InterestsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#111113] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <QualificationsSection />
      <ActivitiesSection />
      <InterestsSection />
      <Footer />
    </div>
  );
}

export default App;
