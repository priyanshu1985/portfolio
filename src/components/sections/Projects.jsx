import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../animations/Reveal';
import { Github, ExternalLink, ArrowRight, Code2, Layers } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects = () => {
  // Set ElectIQ as the featured project (id: 1)
  const featuredProject = projects.find(p => p.id === 1) || projects[0];
  // Other projects as secondary
  const secondaryProjects = projects.filter(p => p.id !== featuredProject.id);

  const featuredDetails = {
    problem: "Developing production-grade platforms requires strict adherence to security, accessibility, and clean code standards often overlooked in rapid development.",
    solution: "Built ElectIQ with 100% evaluation scores by implementing robust security protocols, semantic HTML, and comprehensive unit testing.",
    impact: "Achieved perfect scores in accessibility and security audits, ensuring a platform ready for professional-scale deployment.",
    stack: featuredProject.tags
  };

  return (
    <section id="projects" className="section-rhythm-1">
      <div className="container-inset space-y-24">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-label">
              <Layers size={14} className="text-primary" />
              Engineering Portfolio
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
              Production Grade <br />
              <span className="text-muted-foreground">Logic.</span>
            </h2>
          </Reveal>
        </div>

        {/* Featured Case Study */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 group">
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-border bg-surface-low min-h-[400px] shadow-2xl shadow-foreground/5 transition-all duration-700 group-hover:border-primary/20"
            >
              <motion.img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover grayscale brightness-90 dark:brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Featured Deployment
                </span>
              </div>
            </motion.div>

            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                  <div className="w-4 h-[1px] bg-primary" />
                  Technical Analysis
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">{featuredProject.title}</h3>
                
                <div className="space-y-6 pt-4">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">The Challenge</div>
                    <p className="text-description text-sm leading-relaxed">{featuredDetails.problem}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">The Implementation</div>
                    <p className="text-description text-sm leading-relaxed">{featuredDetails.solution}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[11px] uppercase tracking-widest text-primary font-black">Performance Audit</div>
                    <p className="text-foreground text-sm font-bold leading-relaxed italic border-l-2 border-primary/30 pl-4">{featuredDetails.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-lg bg-surface-high border border-border text-[10px] font-black text-muted-foreground uppercase tracking-widest hover:text-primary hover:border-primary/40 transition-all">
                     {tag}
                   </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4">
                <motion.a 
                  whileHover={{ scale: 1.05, x: 5 }}
                  href={featuredProject.link} 
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all group/link"
                >
                  <Github size={16} /> 
                  <span className="border-b-2 border-transparent group-hover/link:border-primary pb-0.5">Source Repository</span>
                </motion.a>
                {featuredProject.live && featuredProject.live !== "#" && (
                  <motion.a 
                    whileHover={{ scale: 1.05, x: 5 }}
                    href={featuredProject.live} 
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all group/link"
                  >
                    <ExternalLink size={16} /> 
                    <span className="border-b-2 border-transparent group-hover/link:border-primary pb-0.5">Live Environment</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12">
          {secondaryProjects.map((project, i) => (
            <Reveal key={project.title} delay={0.1 * i}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="panel-inset bg-surface-med border-border p-8 group relative overflow-hidden transition-all duration-700 hover:border-primary/20"
              >
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-muted border border-border text-primary group-hover:scale-110 transition-transform duration-500">
                      <Code2 size={22} />
                    </div>
                    <div className="flex items-center gap-3">
                       <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link} 
                        className="p-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-xl border border-transparent hover:border-border transition-all"
                       >
                         <Github size={18} />
                       </motion.a>
                       {project.live && project.live !== "#" && (
                         <motion.a 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.live} 
                          className="p-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-xl border border-transparent hover:border-border transition-all"
                         >
                           <ExternalLink size={18} />
                         </motion.a>
                       )}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">{project.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6 border-t border-border/60">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Subtle Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
