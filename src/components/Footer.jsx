import React from 'react';
import { Leaf, Mail, Phone, Linkedin, MapPin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/mock';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#1a1c1e] border-t border-white/10 mt-12">
      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#E8B430]/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[#E8B430]" />
              </div>
              <span className="font-semibold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                {personal.name}
              </span>
            </div>
            <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-[380px] mb-6">
              Sustainability Professional focused on green building design, renewable energy systems, and environmental impact assessment.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
              <MapPin className="w-4 h-4 text-[#E8B430]" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {['Experience', 'Projects', 'Skills', 'Qualifications'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-[#a1a1aa] hover:text-[#E8B430] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#E8B430] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#26282a] flex items-center justify-center group-hover:bg-[#E8B430]/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personal.email}</span>
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#E8B430] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#26282a] flex items-center justify-center group-hover:bg-[#E8B430]/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{personal.phone}</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#E8B430] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#26282a] flex items-center justify-center group-hover:bg-[#E8B430]/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a1a1aa]">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#a1a1aa] hover:text-[#E8B430] transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-[#26282a] flex items-center justify-center group-hover:bg-[#E8B430] group-hover:text-[#111113] transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
