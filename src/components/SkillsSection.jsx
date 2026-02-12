import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Monitor, Users } from 'lucide-react';
import { portfolioData } from '../data/mock';

const categoryConfig = [
  { key: 'technical', label: 'Technical Skills', icon: Wrench, color: '#E8B430' },
  { key: 'software', label: 'Software & Tools', icon: Monitor, color: '#2E7D32' },
  { key: 'soft', label: 'Soft Skills', icon: Users, color: '#B87333' },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[#1a1c1e]/40 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-medium text-[#E8B430] uppercase tracking-widest mb-3 block">Expertise</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills & Competencies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryConfig.map((cat, catIndex) => {
            const Icon = cat.icon;
            const skills = portfolioData.skills[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                className="bg-[#1a1c1e] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: cat.color }}
                />

                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.label}</h3>
                </div>

                <div className="flex flex-col gap-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: cat.color }}
                      />
                      <span className="text-sm text-[#dadada]">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
