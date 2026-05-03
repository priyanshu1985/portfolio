import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Terminal, Cpu, Database } from 'lucide-react';
import { Reveal } from '../animations/Reveal';

export function Hero() {
  return (
    <section id="home" className="section-rhythm-1 min-h-[90vh] flex items-center">
      <div className="container-inset grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Headline & Strategy */}
        <div className="space-y-10">
          <div className="space-y-4">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-accent/10 border border-teal-accent/20 text-teal-accent text-[10px] uppercase tracking-widest font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-accent animate-pulse" />
                Open for Summer Internships 2025
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tighter">
                Software Engineering <br />
                <span className="text-neutral-500">at Scale.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-neutral-400 max-w-lg font-medium leading-relaxed">
                Building scalable full-stack products with <span className="text-white">React, Node.js, and modern backend systems.</span> Focused on performance, ownership, and engineering excellence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.6}>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-hiring-primary">
                View Projects <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/priyanshu1985" target="_blank" rel="noopener noreferrer" className="btn-hiring-secondary">
                <Github size={18} /> GitHub
              </a>
            </div>
          </Reveal>

          {/* Proof Points */}
          <Reveal delay={0.8}>
            <div className="pt-10 flex gap-8 border-t border-border-subtle">
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Status</div>
                <div className="text-sm font-semibold text-neutral-300">Final Year B.Tech</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">GPA</div>
                <div className="text-sm font-semibold text-neutral-300">8.5 / 10.0</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Location</div>
                <div className="text-sm font-semibold text-neutral-300">Remote / India</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Technical Proof Panel */}
        <div className="hidden lg:block relative">
          <Reveal delay={0.5}>
            <div className="panel-inset relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-accent/5 blur-3xl rounded-full" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-black border border-border-subtle text-teal-accent">
                    <Terminal size={24} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Engineering Stack</div>
                    <div className="text-xs font-mono text-neutral-400">v1.4.0-stable</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-border-subtle hover:border-teal-accent/20 transition-colors">
                    <Cpu size={20} className="text-neutral-500" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-neutral-300 uppercase tracking-widest">Frontend Mastery</div>
                      <div className="h-1 bg-neutral-900 rounded-full mt-2 overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ delay: 1, duration: 1.5 }} className="h-full bg-teal-accent" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-black/50 border border-border-subtle hover:border-teal-accent/20 transition-colors">
                    <Database size={20} className="text-neutral-500" />
                    <div className="flex-1">
                      <div className="text-xs font-bold text-neutral-300 uppercase tracking-widest">Backend Infrastructure</div>
                      <div className="h-1 bg-neutral-900 rounded-full mt-2 overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ delay: 1.2, duration: 1.5 }} className="h-full bg-neutral-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/50 border border-border-subtle">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-bold">Repositories</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-border-subtle">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-[8px] uppercase tracking-widest text-neutral-600 font-bold">Commits</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 blur-2xl rounded-full animate-pulse" />
        </div>

      </div>
    </section>
  );
}
