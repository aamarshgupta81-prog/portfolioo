import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download, ArrowDown, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/mock';

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#E8B430]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B5E20]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
              <span className="text-sm font-medium text-[#2E7D32]">Available for opportunities</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {personal.name}
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-[#E8B430] mb-6">
              {personal.title}
            </h2>

            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mb-6 max-w-[520px]">
              {personal.bio}
            </p>

            <div className="flex items-center gap-2 text-sm text-[#a1a1aa] mb-8">
              <MapPin className="w-4 h-4 text-[#E8B430]" />
              <span>{personal.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8B430] text-[#111113] font-semibold text-sm rounded-xl hover:bg-[#D4A017] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(232,180,48,0.3)]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold text-sm rounded-xl border-2 border-[#3f3f3f] hover:border-[#E8B430] hover:text-[#E8B430] hover:bg-[#E8B430]/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right - Photo Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-2xl border border-[#E8B430]/20 rotate-3" />
              <div className="absolute -inset-6 rounded-2xl border border-[#1B5E20]/15 -rotate-2" />
              
              <div className="w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] lg:w-[380px] lg:h-[480px] rounded-2xl bg-[#1a1c1e] border border-white/10 overflow-hidden relative">
                {/* Placeholder with initials */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1c1e] to-[#111113]">
                  <div className="w-32 h-32 rounded-full bg-[#E8B430]/10 border-2 border-[#E8B430]/30 flex items-center justify-center mb-4">
                    <span className="text-5xl font-bold text-[#E8B430]" style={{ fontFamily: "'Playfair Display', serif" }}>AG</span>
                  </div>
                  <span className="text-sm text-[#a1a1aa]">Sustainability Professional</span>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#E8B430]/40 rounded-tr-lg" />
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20">
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#E8B430]/40 rounded-bl-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16 lg:mt-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <a href="#experience" className="flex flex-col items-center gap-2 text-[#a1a1aa] hover:text-[#E8B430] transition-colors">
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
