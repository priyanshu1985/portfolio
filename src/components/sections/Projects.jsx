import React from 'react';
import { Reveal } from '../animations/Reveal';
import { Github, ExternalLink, ArrowRight, Code2, Layers } from 'lucide-react';

const Projects = () => {
  const featuredProject = {
    title: 'Nexalytics Platform',
    problem: 'Businesses struggled with fragmented data across multiple MERN applications, leading to slow decision-making.',
    solution: 'Engineered a centralized analytics dashboard with real-time tracking and predictive modeling using D3.js and Socket.io.',
    impact: 'Reduced data latency by 40% and improved reporting speed by 2x for alpha testers.',
    stack: ['React', 'Node.js', 'MongoDB', 'Redis'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1470&auto=format&fit=crop',
    links: { github: '#', demo: '#' }
  };

  const secondaryProjects = [
    {
      title: 'QuantOS',
      desc: 'High-performance trading engine built with a focus on low-latency and secure transaction handling.',
      stack: ['Go', 'Redis', 'Docker'],
      links: { github: '#' }
    },
    {
      title: 'E-Vault',
      desc: 'Encrypted document management system with biometric auth simulations for enterprise security.',
      stack: ['Next.js', 'PostgreSQL', 'AES-256'],
      links: { github: '#' }
    }
  ];

  return (
    <section id="projects" className="section-rhythm-1">
      <div className="container-inset space-y-24">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-label">
              <Layers size={14} />
              Case Studies
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
              Production Grade <br />
              <span className="text-neutral-500">Engineering.</span>
            </h2>
          </Reveal>
        </div>

        {/* Featured Case Study */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 group">
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-border-subtle bg-background-alt">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="text-teal-accent text-xs font-mono font-bold uppercase tracking-widest">Featured Deployment</div>
                <h3 className="text-4xl font-bold tracking-tighter">{featuredProject.title}</h3>
                
                <div className="space-y-6 pt-4">
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">The Problem</div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{featuredProject.problem}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">The Solution</div>
                    <p className="text-neutral-400 text-sm leading-relaxed">{featuredProject.solution}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-widest text-teal-accent/60 font-bold">The Outcome</div>
                    <p className="text-white text-sm font-medium leading-relaxed italic">{featuredProject.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.stack.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface border border-border-subtle text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a href={featuredProject.links.github} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-teal-accent transition-colors">
                  <Github size={16} /> Source
                </a>
                <a href={featuredProject.links.demo} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-teal-accent transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {secondaryProjects.map((project, i) => (
            <Reveal key={project.title} delay={0.6 + (i * 0.2)}>
              <div className="panel-inset hover:border-teal-accent/20 transition-all duration-500 group relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-background border border-border-subtle text-neutral-500 group-hover:text-teal-accent transition-colors">
                      <Code2 size={20} />
                    </div>
                    <a href={project.links.github} className="p-2 text-neutral-600 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold tracking-tight">{project.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{project.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.stack.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Subtle Decorative Gradient */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
