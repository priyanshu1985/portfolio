import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../animations/Reveal';
import { Counter } from '../common/Counter';
import { Github, FileText, ArrowRight, Terminal, Cpu, Database, ShieldCheck, Activity } from 'lucide-react';
import resume from '../../assets/PriyanshuMankeResumeSE.pdf';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Premium Technical Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(188,75,33,0.02),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" 
        />
      </div>

      <div className="container-inset relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Content: The Engineering Identity */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-12"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-primary">
              <div className="h-px w-8 bg-primary/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Systems & Full-Stack Architecture</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground">
              Building <br />
              <span className="text-muted-foreground">Production</span> <br />
              Infrastructure.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              Software Engineering student specializing in high-performance backends and secure frontends. Focused on <span className="text-foreground">scalability</span>, <span className="text-foreground">clean architecture</span>, and <span className="text-foreground">operational excellence</span>.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="btn-hiring-primary h-14 px-8 group">
              Browse Repository
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={resume} 
              download="PriyanshuManke_Resume.pdf"
              className="btn-hiring-secondary h-14 px-8"
            >
              <FileText size={18} />
              Technical Resume
            </a>
          </motion.div>

          {/* High-Signal Proof Row */}
          <motion.div variants={itemVariants} className="pt-10 flex flex-wrap items-center gap-12 border-t border-border/60 w-fit">
            <div className="space-y-1">
              <div className="text-foreground font-black text-2xl tracking-tighter">
                <Counter value={1} /> Internship
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Current Status</div>
            </div>
            <div className="space-y-1">
              <div className="text-foreground font-black text-2xl tracking-tighter">
                <Counter value={15} />+ Projects
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Shipped & Deployed</div>
            </div>
            <div className="space-y-1 text-primary">
              <div className="font-black text-2xl tracking-tighter flex items-center gap-2">
                <ShieldCheck size={20} /> 100%
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-primary/60">Quality Audit</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content: The Engineering Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="panel-inset bg-surface-med/40 backdrop-blur-xl border-border/60 shadow-2xl shadow-primary/5 p-1 relative z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Animated "Scan Line" */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-primary/10 z-20 pointer-events-none"
            />

            <div className="relative p-8 space-y-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Terminal size={22} />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-tighter">dev_ops.sys</div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                </div>
              </div>

              {/* Operational Logic Bars */}
              <div className="space-y-6">
                <div className="space-y-3">
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black text-foreground uppercase tracking-widest flex items-center gap-2">
                        <Cpu size={14} className="text-primary" /> Architecture Maturity
                      </div>
                      <span className="text-[10px] font-mono text-primary font-bold">STABLE</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: "94%" }} 
                        transition={{ delay: 1.2, duration: 2, ease: [0.16, 1, 0.3, 1] }} 
                        className="h-full bg-primary" 
                      />
                    </div>
                </div>

                <div className="space-y-3">
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black text-foreground uppercase tracking-widest flex items-center gap-2">
                        <Database size={14} className="text-primary" /> Data Integrity
                      </div>
                      <span className="text-[10px] font-mono text-primary font-bold">98.2%</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: "98.2%" }} 
                        transition={{ delay: 1.4, duration: 2, ease: [0.16, 1, 0.3, 1] }} 
                        className="h-full bg-primary/40" 
                      />
                    </div>
                </div>
              </div>

              {/* Tech Stack Matrix */}
              <div className="pt-8 border-t border-border/60">
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-5">Core Tech Stack</div>
                <div className="grid grid-cols-2 gap-4">
                  {['React / Next.js', 'Node / Express', 'MongoDB / SQL', 'GCP / Firebase'].map(tech => (
                    <div key={tech} className="px-4 py-3 rounded-xl bg-surface-high border border-border text-[10px] font-black text-foreground flex items-center gap-3 hover:border-primary/30 hover:bg-muted transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Glows */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/5 blur-3xl rounded-full opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/5 blur-3xl rounded-full opacity-50" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.5em] rotate-90 mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
