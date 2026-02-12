import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, GraduationCap, BookOpen, FileCheck, Clock } from 'lucide-react';
import { portfolioData } from '../data/mock';

export default function QualificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { qualifications } = portfolioData;

  const subsections = [
    {
      title: 'Professional Certifications',
      icon: Award,
      color: '#E8B430',
      items: qualifications.certifications.map((c) => ({
        primary: c.name,
        secondary: c.issuer,
        year: c.year,
        pending: c.status === 'pending',
      })),
    },
    {
      title: 'Formal Education',
      icon: GraduationCap,
      color: '#2E7D32',
      items: qualifications.education.map((e) => ({
        primary: e.degree,
        secondary: e.institution,
        year: e.year,
      })),
    },
    {
      title: 'Courses',
      icon: BookOpen,
      color: '#E8B430',
      items: qualifications.courses.map((c) => ({
        primary: c.name,
        secondary: c.provider,
        year: c.year,
      })),
    },
    {
      title: 'Other Certificates',
      icon: FileCheck,
      color: '#B87333',
      items: qualifications.otherCertificates.map((c) => ({
        primary: c.name,
        secondary: c.issuer,
        year: c.year,
      })),
    },
  ];

  return (
    <section id="qualifications" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-medium text-[#E8B430] uppercase tracking-widest mb-3 block">Background</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Qualifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subsections.map((sub, subIndex) => {
            const Icon = sub.icon;
            return (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: subIndex * 0.12 }}
                className="bg-[#1a1c1e] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: sub.color }}
                />

                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${sub.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: sub.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{sub.title}</h3>
                </div>

                <div className="flex flex-col gap-4">
                  {sub.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ background: sub.color }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-medium text-white">{item.primary}</span>
                          {item.pending && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#E8B430]/10 text-[#E8B430] text-xs font-medium">
                              <Clock className="w-3 h-3" />
                              Pending
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#a1a1aa] mt-0.5">
                          <span>{item.secondary}</span>
                          <span className="text-white/20">·</span>
                          <span>{item.year}</span>
                        </div>
                      </div>
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
