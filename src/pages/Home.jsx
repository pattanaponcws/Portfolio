import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contacts";

const HomePage = () => {
  return (
    <div className=" min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}
      {/* Background Effect */}
      <StarBackground />
      {/* NavBar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Contact />

      {/* Footer */}
    </div>
  );
};

export default HomePage;
