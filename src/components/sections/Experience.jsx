import React from 'react';
import { Reveal } from '../animations/Reveal';
import { Briefcase, Calendar, Star, Award, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'TechFlow Systems',
      period: 'Jan 2024 - Present',
      bullets: [
        'Architected a microservices-based analytics dashboard using Node.js and MongoDB.',
        'Optimized database query performance by 40% through strategic indexing and schema refactoring.',
        'Collaborated with senior engineers to implement CI/CD pipelines using GitHub Actions.'
      ],
      impact: 'Improving data throughput for 1k+ concurrent users.'
    },
    {
      title: 'Web Development Lead',
      company: 'Developer Student Club',
      period: 'Aug 2022 - Sept 2023',
      bullets: [
        'Mentored a team of 15+ junior developers in building responsive React applications.',
        'Spearheaded the development of the official campus portal, serving 5k+ students.',
        'Standardized the community code-review process to improve overall project quality.'
      ],
      impact: 'Shipped 3 production-level internal tools.'
    }
  ];

  const milestones = [
    { label: 'Global Rank', value: 'Top 5%', desc: 'Hacktoberfest 2023 Contributor', icon: Award },
    { label: 'Academic', value: '8.5/10', desc: 'B.Tech Software Engineering', icon: Star },
    { label: 'Community', value: '500+', desc: 'Developers Mentored', icon: Zap },
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
                <Briefcase size={14} />
                Trajectory
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Career & <br />
                <span className="text-neutral-500">Execution.</span>
              </h2>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="relative space-y-16">
            {experiences.map((exp, i) => (
              <Reveal key={exp.title} delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                  {/* Date Rail */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 text-xs font-bold text-teal-accent uppercase tracking-[0.2em] mb-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="text-lg font-bold text-white">{exp.company}</div>
                  </div>

                  {/* Impact Card */}
                  <div className="md:col-span-9 panel-inset p-8 md:p-10 bg-black/40 hover:border-teal-accent/20 transition-all duration-500">
                    <h3 className="text-2xl font-bold tracking-tight mb-6">{exp.title}</h3>
                    <ul className="space-y-4 mb-8">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-4 text-neutral-400 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-accent flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-border-subtle flex items-center gap-3">
                      <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Key Impact:</div>
                      <div className="text-xs font-medium text-neutral-200 italic">{exp.impact}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Milestones Section */}
      <section className="section-rhythm-3">
        <div className="container-inset">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((ms, i) => (
              <Reveal key={ms.label} delay={0.2 + (i * 0.1)}>
                <div className="p-8 rounded-3xl border border-border-subtle bg-black hover:border-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-background-alt border border-border-subtle text-teal-accent">
                      <ms.icon size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{ms.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">{ms.label}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                    {ms.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
