import React from 'react';
import { Reveal } from '../animations/Reveal';
import { GraduationCap, MapPin, Briefcase, Info } from 'lucide-react';
import resume from '../../assets/PriyanshuMankeResumeSE.pdf';

const About = () => {
  return (
    <section id="about" className="section-rhythm-2">
      <div className="container-inset grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Professional Brief */}
        <div className="lg:col-span-7 space-y-10">
          <Reveal>
            <div className="flex items-center gap-3 text-label">
              <Info size={14} />
              Professional Brief
            </div>
          </Reveal>
          
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight pb-2">
                Engineering products with <br />
                <span className="text-muted-foreground">efficiency and ownership.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                I am a Third-year Software Engineering student dedicated to mastering the full-stack ecosystem. My approach combines technical rigor with a product-minded perspective, ensuring that every line of code serves a business objective and a user need.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h4 className="text-foreground font-bold text-sm uppercase tracking-widest">Architectural Focus</h4>
                  <p className="text-muted-foreground text-sm">Scalable backends, REST/GraphQL APIs, and microservices integration.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-foreground font-bold text-sm uppercase tracking-widest">UX Engineering</h4>
                  <p className="text-muted-foreground text-sm">Responsive design systems, performance optimization, and accessibility.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: Data Matrix */}
        <div className="lg:col-span-5">
          <Reveal delay={0.4}>
            <div className="panel-inset space-y-10 bg-surface-med border-border shadow-2xl shadow-foreground/5 card-hover">
              <div className="space-y-8">
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3.5 rounded-2xl bg-muted border border-border text-primary group-hover/item:scale-110 transition-transform">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <div className="text-label mb-1">Education</div>
                    <div className="text-base font-black text-foreground">BE in AI & Data Science</div>
                    <div className="text-base text-description">Ajeenkya D Y Patil School of Engineering • 2027</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3.5 rounded-2xl bg-muted border border-border text-primary group-hover/item:scale-110 transition-transform">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <div className="text-label mb-1">Current Role</div>
                    <div className="text-base font-black text-foreground">Full Stack Developer Intern</div>
                    <div className="text-base text-description">Actively building production products.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3.5 rounded-2xl bg-muted border border-border text-primary group-hover/item:scale-110 transition-transform">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="text-label mb-1">Base Location</div>
                    <div className="text-base font-black text-foreground">India</div>
                    <div className="text-base text-description">Open to Remote & On-site roles.</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <a 
                  href={resume} 
                  download="PriyanshuManke_Resume.pdf"
                  className="btn-hiring-primary w-full py-4 text-base"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default About;
