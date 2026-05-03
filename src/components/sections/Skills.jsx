import React from 'react';
import { Reveal } from '../animations/Reveal';
import { Layout, Server, Database, Settings, ShieldCheck } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Interface Systems',
      icon: Layout,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'State Management']
    },
    {
      category: 'Backend Architecture',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Auth Systems', 'Middleware']
    },
    {
      category: 'Database & Storage',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Data Modeling', 'Query Optimization']
    },
    {
      category: 'Infra & Tooling',
      icon: Settings,
      skills: ['Docker', 'AWS (S3/EC2)', 'Git / GitHub', 'CI/CD Pipelines', 'Postman', 'Unit Testing']
    }
  ];

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
              <span className="text-neutral-500">production engineering.</span>
            </h2>
          </Reveal>
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={0.2 + (i * 0.1)}>
              <div className="panel-inset h-full flex flex-col p-8 bg-black/40 hover:border-teal-accent/20 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-background border border-border-subtle text-neutral-500 group-hover:text-teal-accent transition-colors">
                    <group.icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-200">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 rounded-lg bg-black/50 border border-border-subtle text-[11px] font-medium text-neutral-500 hover:text-white hover:border-white/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
