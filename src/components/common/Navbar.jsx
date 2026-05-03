import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-center py-6 px-6`}
    >
      <nav className={`
        flex items-center px-6 py-2 rounded-full border transition-all duration-500
        ${isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-white/5 shadow-2xl py-3' 
          : 'bg-transparent border-transparent'}
      `}>
        <div className={`mr-8 flex items-center gap-2 transition-all duration-500 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-x-4'}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-teal-accent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">PM</span>
        </div>

        <ul className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`
                    relative z-10 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}
                  `}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
