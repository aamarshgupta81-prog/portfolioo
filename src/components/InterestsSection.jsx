import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PenTool, Gamepad2 } from 'lucide-react';
import { portfolioData } from '../data/mock';

const interestIcons = [PenTool, Gamepad2];

export default function InterestsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-medium text-[#E8B430] uppercase tracking-widest mb-3 block">Beyond Work</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Interests
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.interests.map((interest, i) => {
            const Icon = interestIcons[i % interestIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-[#1a1c1e] border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8B430]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="w-full sm:w-[200px] h-[160px] sm:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={interest.image}
                      alt={interest.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-center flex-1">
                    <div className="w-10 h-10 rounded-xl bg-[#E8B430]/10 flex items-center justify-center mb-4 group-hover:bg-[#E8B430]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#E8B430]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {interest.name}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{interest.details}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
