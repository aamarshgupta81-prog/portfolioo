import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Clock, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mock';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (project.comingSoon) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-[#1a1c1e] border border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[340px] group hover:border-[#E8B430]/30 transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-[#E8B430]/10 flex items-center justify-center mb-4 group-hover:bg-[#E8B430]/20 transition-colors">
          <Clock className="w-5 h-5 text-[#E8B430]" />
        </div>
        <h3 className="text-base font-semibold text-white mb-2 text-center">{project.title}</h3>
        <p className="text-sm text-[#a1a1aa] text-center mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag) => (
            <Badge key={tag} className="bg-white/5 text-[#a1a1aa] border-white/10 text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <span className="mt-4 text-xs font-medium text-[#E8B430]/60 uppercase tracking-wider">Coming Soon</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-[#1a1c1e] border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8B430]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col"
    >
      {/* Image */}
      <div className="w-full h-[200px] bg-white/5 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain bg-[#f5f5f5]"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#111113]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-[#E8B430]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-3.5 h-3.5 text-[#E8B430]" />
          <span className="text-xs font-medium text-[#E8B430] uppercase tracking-wider">Project</span>
        </div>
        <h3 className="text-base font-semibold text-white mb-2 leading-snug">{project.title}</h3>
        <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} className="bg-[#E8B430]/10 text-[#E8B430] border-[#E8B430]/20 text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-sm font-medium text-[#E8B430] uppercase tracking-widest mb-3 block">Portfolio</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-[#a1a1aa] max-w-[560px]">
            A collection of sustainability and renewable energy projects showcasing design, analysis, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
