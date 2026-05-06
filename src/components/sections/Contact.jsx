import React from 'react';
import { Mail, Github, Linkedin, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';
import { Reveal } from '../animations/Reveal';
import resume from '../../assets/PriyanshuMankeResumeSE.pdf';

const Contact = () => {
  return (
    <section id="contact" className="section-rhythm-1">
      <div className="container-inset">
        
        {/* Contact Panel */}
        <div className="panel-inset bg-surface-med border-border shadow-2xl shadow-foreground/5 relative overflow-hidden text-center py-20 px-10 space-y-12">
          {/* Decorative Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="space-y-6 relative z-10">
            <Reveal>
              <div className="flex items-center justify-center gap-3 text-label">
                <MessageSquare size={14} />
                Get in Touch
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-3xl mx-auto text-foreground">
                Ready to contribute to your <br />
                <span className="text-muted-foreground">engineering team.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-description text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                I am actively seeking internship and full-time roles where I can apply my full-stack skills and learn from world-class engineers.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.6}>
            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mankepriyanshu19@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hiring-primary h-16 px-12 text-lg shadow-xl shadow-primary/20"
              >
                Send Message <ArrowRight size={22} />
              </a>

              {/* Social Grid */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border w-full max-w-lg">
                <a href="https://github.com/priyanshu1985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-label font-black hover:text-primary transition-colors">
                  <Github size={20} /> GITHUB
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-manke-pm19/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-label font-black hover:text-primary transition-colors">
                  <Linkedin size={20} /> LINKEDIN
                </a>
                 <a 
                  href={resume} 
                  download="PriyanshuManke_Resume.pdf"
                  className="flex items-center gap-2 text-label font-black hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} /> RESUME
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Minimal Quiet Footer */}
        <div className="pt-16 pb-8 flex flex-col md:flex-row items-center justify-between gap-8 text-label opacity-60">
          <div className="font-bold">© 2025 Priyanshu Manke</div>
          <div className="flex gap-10 font-bold">
            <span>Built with React + Node</span>
            <span className="text-primary italic">V1.0.0-Stable</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
