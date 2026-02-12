import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '../data/mock';

function ExperienceCard({ exp, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Timeline connector */}
      {index < portfolioData.experience.length - 1 && (
        <div className="absolute left-[23px] top-[60px] bottom-[-24px] w-[2px] bg-gradient-to-b from-[#E8B430]/40 to-transparent hidden md:block" />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center pt-1">
          <div className="w-[12px] h-[12px] rounded-full bg-[#E8B430] ring-4 ring-[#E8B430]/20 flex-shrink-0" />
        </div>

        {/* Card */}
        <div className="flex-1 bg-[#1a1c1e] border border-white/10 rounded-2xl p-6 hover:border-[#E8B430]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-5">
            {/* Company image */}
            <div className="w-full sm:w-[140px] h-[100px] sm:h-[100px] rounded-xl bg-white flex-shrink-0 overflow-hidden border border-white/5">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white mb-1 leading-snug">{exp.role}</h3>
              
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-3.5 h-3.5 text-[#E8B430]" />
                <span className="text-sm font-medium text-[#E8B430]">{exp.company}</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                <div className="flex items-center gap-1.5 text-xs text-[#a1a1aa]">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#a1a1aa]">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-sm text-[#a1a1aa] leading-relaxed">{exp.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-medium text-[#E8B430] uppercase tracking-widest mb-3 block">Career Path</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Professional Experience
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {portfolioData.experience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
