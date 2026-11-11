import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY } from '../config/company';
import { DIVISIONS } from '../config/services';
import { BUSINESS_PACKAGES } from '../config/packages';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#080609] border-t border-[#7900E8]/20 text-white overflow-hidden pt-16 pb-12">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5700A8]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm font-medium text-[#FFD500]">
              {COMPANY.tagline}
            </p>
            <p className="text-xs uppercase tracking-wider text-[#B8B3C0] font-semibold">
              {COMPANY.shortTagline}
            </p>
            <p className="text-sm text-[#B8B3C0] leading-relaxed max-w-sm pt-2">
              {COMPANY.description}
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-full bg-[#18002B] text-[#FFD500] border border-[#7900E8]/40">
                5 Coordinated Divisions • 1 Growth Partner
              </span>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B8B3C0]">
              <li>
                <Link to="/" className="hover:text-[#FFD500] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FFD500] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#FFD500] transition-colors">
                  Integrated Solutions
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#FFD500] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFD500] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#FFD500] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (Col 7-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Five Divisions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B8B3C0]">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link
                    to={div.route}
                    className="hover:text-[#FFD500] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-xs font-mono text-[#FFD500] group-hover:underline">
                      {div.number}
                    </span>
                    <span>{div.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Inquiries (Col 9-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Solutions & Connect
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B3C0]">
              {BUSINESS_PACKAGES.slice(0, 5).map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    to="/solutions"
                    className="hover:text-[#FFD500] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{pkg.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFD500]" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3 p-3.5 rounded-xl bg-[#12091F] border border-[#7900E8]/30 space-y-2 text-xs text-[#B8B3C0]">
              <div className="flex items-start gap-2 text-white font-medium">
                <Mail className="w-3.5 h-3.5 text-[#FFD500] mt-0.5 shrink-0" />
                {COMPANY.contact.isEmailConfigured ? (
                  <a
                    href={`mailto:${COMPANY.contact.email}`}
                    className="hover:text-[#FFD500] transition-colors"
                  >
                    {COMPANY.contact.email}
                  </a>
                ) : (
                  <Link to="/contact" className="hover:text-[#FFD500] text-xs transition-colors">
                    Submit via Project Enquiry Form
                  </Link>
                )}
              </div>
              <div className="flex items-start gap-2 text-white font-medium">
                <Phone className="w-3.5 h-3.5 text-[#FFD500] mt-0.5 shrink-0" />
                <span className="text-xs">{COMPANY.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-[#B8B3C0]/80">
                <Clock className="w-3 h-3 text-[#FFD500] mt-0.5 shrink-0" />
                <span>{COMPANY.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8B3C0]/70 gap-4">
          <div>
            © {COMPANY.copyrightYear} {COMPANY.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-[#FFD500] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/process" className="hover:text-[#FFD500] transition-colors">
              Engagement Terms
            </Link>
            <Link to="/contact" className="hover:text-[#FFD500] transition-colors">
              Direct Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
