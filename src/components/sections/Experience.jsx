import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../animations/Reveal';
import { Briefcase, Calendar, Star, Award, Zap, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Early Stage Product Startup',
      period: 'Sept 2025 - Present',
      bullets: [
        'Developing and maintaining a MERN-based full-stack application using React.js, Node.js, and MongoDB.',
        'Implemented stateless JWT authentication with role-based access control, reducing unauthorized access incidents.',
        'Optimized Supabase schema design and indexing strategies, reducing average API response time by 66%.',
        'Architected modular backend following MVC pattern and REST principles for improved maintainability.'
      ],
      impact: 'Improving session validation latency by 25%.'
    }
  ];

  const milestones = [
    { label: 'Recognition', value: 'SIH 2025', desc: 'Smart India Hackathon Grand Finale Selection', icon: Award },
    { label: 'Academic', value: 'BE AI & DS', desc: 'Ajeenkya D Y Patil School of Engineering', icon: Star },
    { label: 'Innovation', value: '1st Prize', desc: 'Won first prize in Alcohol Sensor project competition', icon: Zap },
  ];

  return (
    <div className="space-y-0">
      {/* Experience Section */}
      <section id="experience" className="section-rhythm-2">
        <div className="container-inset space-y-20">
          
          {/* Header */}
          <div className="max-w-2xl space-y-4">
            <Reveal>
              <div className="flex items-center gap-3 text-label">
                <Briefcase size={14} className="text-primary" />
                Trajectory
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
                Execution & <br />
                <span className="text-muted-foreground">Impact.</span>
              </h2>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="relative space-y-16 before:absolute before:left-[11px] md:before:left-[calc(25%-5.5rem)] before:top-0 before:bottom-0 before:w-[1px] before:bg-border/60">
            {experiences.map((exp, i) => (
              <Reveal key={exp.title} delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative group/exp">
                  {/* Date Rail */}
                  <div className="md:col-span-3">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-4"
                    >
                      <div className="w-3 h-3 rounded-full bg-background border-2 border-primary z-10 group-hover/exp:scale-125 transition-transform" />
                      {exp.period}
                    </motion.div>
                    <div className="text-2xl font-black text-foreground pl-6 md:pl-0 tracking-tighter">{exp.company}</div>
                  </div>

                   {/* Impact Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="md:col-span-9 panel-inset bg-surface-med/50 backdrop-blur-sm border-border shadow-2xl shadow-foreground/5 p-10 transition-all duration-700 hover:border-primary/20"
                  >
                    <h3 className="text-3xl font-black tracking-tighter mb-8 text-foreground">{exp.title}</h3>
                    <ul className="space-y-6 mb-12">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-5 text-description text-sm leading-relaxed group/item">
                          <ChevronRight size={14} className="mt-1 text-primary/40 group-hover/item:text-primary transition-colors" />
                          <span className="group-hover/item:text-foreground transition-colors">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row sm:items-center gap-6">
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10 w-fit">
                        Core Result
                      </div>
                      <div className="text-sm font-bold text-foreground italic border-l-2 border-primary/30 pl-6 leading-relaxed">
                        {exp.impact}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Milestones Section */}
      <section className="section-rhythm-3">
        <div className="container-inset">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {milestones.map((ms, i) => (
              <Reveal key={ms.label} delay={0.1 * i}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-10 rounded-3xl border border-border bg-surface-med/40 backdrop-blur-sm shadow-sm transition-all duration-700 group hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className="flex flex-col gap-8">
                    <div className="p-4 rounded-2xl bg-muted border border-border text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 w-fit">
                      <ms.icon size={26} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-foreground tracking-tighter mb-2">{ms.value}</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{ms.label}</div>
                    </div>
                  </div>
                  <div className="mt-8 text-sm text-description group-hover:text-foreground transition-colors leading-relaxed font-medium">
                    {ms.desc}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
