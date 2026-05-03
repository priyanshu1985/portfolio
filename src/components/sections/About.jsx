import React from 'react';
import { Reveal } from '../animations/Reveal';
import { GraduationCap, MapPin, Briefcase, Info } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-rhythm-2">
      <div className="container-inset grid grid-cols-1 lg:grid-cols-12 gap-16">
        
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Engineering products with <br />
                <span className="text-neutral-500">efficiency and ownership.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                I am a final-year Software Engineering student dedicated to mastering the full-stack ecosystem. My approach combines technical rigor with a product-minded perspective, ensuring that every line of code serves a business objective and a user need.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Architectural Focus</h4>
                  <p className="text-neutral-500 text-sm">Scalable backends, REST/GraphQL APIs, and microservices integration.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Interface Design</h4>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">UX Engineering</h4>
                  <p className="text-neutral-500 text-sm">Responsive design systems, performance optimization, and accessibility.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: Data Matrix */}
        <div className="lg:col-span-5">
          <Reveal delay={0.4}>
            <div className="panel-inset space-y-8 bg-black/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-background border border-border-subtle text-teal-accent">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Education</div>
                    <div className="text-sm font-bold text-neutral-200">B.Tech in Software Engineering</div>
                    <div className="text-xs text-neutral-500">Graduating May 2025 • GPA 8.5</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-background border border-border-subtle text-teal-accent">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Availability</div>
                    <div className="text-sm font-bold text-neutral-200">Open to Internships / FTE</div>
                    <div className="text-xs text-neutral-500">Immediate availability for remote roles.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-background border border-border-subtle text-teal-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Location</div>
                    <div className="text-sm font-bold text-neutral-200">India</div>
                    <div className="text-xs text-neutral-500">Available for relocation.</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors">
                  Download Technical Resume
                </button>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default About;
