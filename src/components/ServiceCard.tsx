import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  TrendingUp,
  Palette,
  Video,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Division } from '../config/services';

interface ServiceCardProps {
  division: Division;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ division, featured = false }) => {
  const divisionIcons: Record<string, React.ReactNode> = {
    it: <Code2 className="w-7 h-7 text-[#FFD500]" />,
    digital: <TrendingUp className="w-7 h-7 text-[#9B30FF]" />,
    creative: <Palette className="w-7 h-7 text-[#FFD500]" />,
    media: <Video className="w-7 h-7 text-[#9B30FF]" />,
    staffing: <Users className="w-7 h-7 text-[#FFD500]" />,
  };

  const isYellowAccent = division.id === 'it' || division.id === 'creative' || division.id === 'staffing';

  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 flex flex-col justify-between overflow-hidden border ${
        featured
          ? 'bg-gradient-to-br from-[#1C0834] via-[#12091F] to-[#0A0510] border-[#7900E8]/50 shadow-xl shadow-[#7900E8]/10'
          : 'bg-[#12091F]/80 hover:bg-[#180A2C] border-[#7900E8]/20 hover:border-[#7900E8]/60 shadow-lg'
      } hover:-translate-y-1.5`}
    >
      {/* Corner Glow on Hover */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${
          isYellowAccent ? 'bg-[#FFD500]' : 'bg-[#7900E8]'
        }`}
      />

      <div>
        {/* Top Header: Division Number & Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-sm sm:text-base font-bold text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40">
            {division.number}
          </span>
          <div className="p-3 rounded-xl bg-[#18002B] border border-[#7900E8]/40 group-hover:border-[#FFD500]/40 transition-colors">
            {divisionIcons[division.id]}
          </div>
        </div>

        {/* Division Title & Tagline */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white font-display group-hover:text-[#FFD500] transition-colors mb-2">
            {division.name}
          </h3>
          <p className="text-sm font-semibold text-[#B8B3C0]">
            {division.subheadline}
          </p>
        </div>

        {/* Purpose / Core Focus */}
        <p className="text-sm text-[#B8B3C0]/90 leading-relaxed mb-6">
          {division.purpose}
        </p>

        {/* Key Offerings Preview */}
        <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#B8B3C0]/60 mb-2">
            Core Solutions:
          </div>
          {division.categories.slice(0, 3).map((cat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#B8B3C0]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD500] shrink-0" />
              <span className="truncate">{cat.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <Link
          to={division.route}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#FFD500] transition-colors"
        >
          <span>Discover {division.name}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <span className="text-xs text-[#B8B3C0]/60 font-mono">
          {division.categories.length} categories
        </span>
      </div>
    </div>
  );
};
