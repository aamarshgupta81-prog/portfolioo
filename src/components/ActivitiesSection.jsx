import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TreePine, Megaphone, Sprout, Presentation } from 'lucide-react';
import { portfolioData } from '../data/mock';

const activityIcons = [Sprout, TreePine, Megaphone, Presentation];

export default function ActivitiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[#1a1c1e]/40 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-medium text-[#E8B430] uppercase tracking-widest mb-3 block">Involvement</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Co-Curricular & Extra-Curricular
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.activities.map((activity, i) => {
            const Icon = activityIcons[i % activityIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#1a1c1e] border border-white/10 rounded-2xl p-6 hover:border-[#2E7D32]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 flex items-center justify-center mb-4 group-hover:bg-[#2E7D32]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#2E7D32]" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{activity.title}</h3>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">{activity.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
