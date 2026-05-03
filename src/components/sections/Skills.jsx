import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../animations/Reveal';
import { skillGroups } from '../../data/skills';
import { Layout, Server, Database, Settings, ShieldCheck, Code, Globe, Terminal } from 'lucide-react';

const Skills = () => {
  // Map category names to icons
  const iconMap = {
    'Frontend Development': Layout,
    'Backend Development': Server,
    'Databases & Cloud': Database,
    'Tools & Automation': Settings,
    'Core Engineering': Code,
    'Languages': Globe
  };

  return (
    <section id="skills" className="section-rhythm-3">
      <div className="container-inset space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Reveal>
            <div className="flex items-center gap-3 text-label">
              <ShieldCheck size={14} />
              Technical Arsenal
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              A stack built for <br />
              <span className="text-muted-foreground">production engineering.</span>
            </h2>
          </Reveal>
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.category] || Code;
            return (
              <Reveal key={group.category} delay={0.1 * i}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="panel-inset h-full flex flex-col p-8 bg-surface-med border-border shadow-md group"
                >
                  <div className="flex items-center gap-5 mb-10">
                    <div className="p-4 rounded-2xl bg-muted border border-border text-primary group-hover:scale-110 transition-transform duration-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-black tracking-tight text-foreground">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {group.skills.map((skill, idx) => (
                      <motion.span 
                        key={skill} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (i * 0.1) + (idx * 0.05), ease: [0.16, 1, 0.3, 1] }}
                        className="px-4 py-2 rounded-xl bg-surface-high border border-border text-[11px] font-black text-muted-foreground uppercase tracking-wider hover:text-primary hover:border-primary/40 hover:bg-muted transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
