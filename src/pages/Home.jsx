import React from 'react';
import Navbar from '../components/common/Navbar';
import { Hero } from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="bg-background min-h-screen text-white scroll-smooth selection:bg-teal-accent/30 selection:text-white">
      <Navbar />
      
      <main className="relative">
        {/* The Entrance */}
        <Hero />
        
        {/* The Narrative */}
        <About />

        {/* The Technical Arsenal */}
        <Skills />

        {/* The Visual Centerpiece */}
        <Projects />

        {/* The Trajectory */}
        <Experience />

        {/* The Closing */}
        <Contact />
      </main>
    </div>
  );
};

export default Home;
