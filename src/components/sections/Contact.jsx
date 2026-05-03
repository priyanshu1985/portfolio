import React from 'react';
import { Mail, Github, Linkedin, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';
import { Reveal } from '../animations/Reveal';

const Contact = () => {
  return (
    <section id="contact" className="section-rhythm-1">
      <div className="container-inset">
        
        {/* Contact Panel */}
        <div className="panel-inset bg-background-alt border-white/5 relative overflow-hidden text-center py-24 px-10 space-y-10">
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-accent/30 to-transparent" />
          
          <div className="space-y-6 relative z-10">
            <Reveal>
              <div className="flex items-center justify-center gap-3 text-label">
                <MessageSquare size={14} />
                Get in Touch
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto">
                Ready to contribute to your <br />
                <span className="text-neutral-500">engineering team.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto">
                I am actively seeking internship and full-time roles where I can apply my full-stack skills and learn from world-class engineers.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.6}>
            <div className="flex flex-col items-center gap-10">
              <a 
                href="mailto:mankepriyanshu19@gmail.com" 
                className="btn-hiring-primary h-16 px-12 text-lg shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                Send Message <ArrowRight size={20} />
              </a>

              {/* Social Grid */}
              <div className="flex flex-wrap items-center justify-center gap-10 pt-8 border-t border-white/5 w-full max-w-lg">
                <a href="https://github.com/priyanshu1985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-manke-pm19/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors">
                  <ExternalLink size={16} /> Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Minimal Quiet Footer */}
        <div className="pt-24 flex flex-col md:flex-row items-center justify-between gap-8 opacity-20 text-[10px] uppercase tracking-[0.4em] font-mono font-bold">
          <div>© 2025 Priyanshu Manke</div>
          <div className="flex gap-8">
            <span>Built with React + Node</span>
            <span>V0.9.4-Stable</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
