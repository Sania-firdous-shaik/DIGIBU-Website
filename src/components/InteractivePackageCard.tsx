import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { BusinessPackage } from '../config/packages';

interface InteractivePackageCardProps {
  pkg: BusinessPackage;
  fullWidth?: boolean;
}

export const InteractivePackageCard: React.FC<InteractivePackageCardProps> = ({
  pkg,
  fullWidth = false,
}) => {
  if (fullWidth) {
    return (
      <div className="lg:col-span-3 group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#1D0835] via-[#140825] to-[#1D0835] border border-[#7900E8]/50 hover:border-[#FFD500]/50 shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Number, Title, Description */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40">
                PACKAGE {pkg.number}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {pkg.involvedDivisions.map((div, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 text-[#B8B3C0] border border-white/10"
                  >
                    {div}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display group-hover:text-[#FFD500] transition-colors">
              {pkg.title}
            </h3>

            <p className="text-sm font-semibold text-[#FFD500]/90">
              {pkg.tagline}
            </p>

            <p className="text-sm text-[#B8B3C0] leading-relaxed">
              {pkg.description}
            </p>
          </div>

          {/* Middle Column: Included Services */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-black/30 border border-white/5">
            <div className="text-xs uppercase font-semibold text-[#FFD500] tracking-wider mb-3">
              Included Services Pipeline:
            </div>
            <div className="space-y-2.5">
              {pkg.includedServices.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                  <div className="p-0.5 rounded-full bg-[#FFD500]/20 text-[#FFD500] mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Ideal For & Action CTA */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#B8B3C0]">
              <span className="font-semibold text-white block mb-1">Recommended For:</span>
              <span>{pkg.idealFor}</span>
            </div>

            <Link
              to={`/contact?service=Integrated%20Solutions&package=${encodeURIComponent(pkg.title)}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-300 bg-[#FFD500] hover:bg-[#FFDE33] text-[#080609] shadow-lg shadow-[#FFD500]/20 hover:scale-[1.02]"
            >
              <span>Discuss Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
        pkg.featured
          ? 'bg-gradient-to-b from-[#1C0A33] to-[#110720] border-[#7900E8]/60 shadow-xl shadow-[#7900E8]/15 ring-1 ring-[#FFD500]/20'
          : 'bg-[#12091F]/90 hover:bg-[#190C2C] border-[#7900E8]/20 hover:border-[#7900E8]/50 shadow-md'
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD500] text-[#080609] text-xs font-bold tracking-wide shadow-md">
          <Sparkles className="w-3 h-3" />
          <span>POPULAR SOLUTION</span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold text-[#FFD500]">
            PACKAGE {pkg.number}
          </span>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {pkg.involvedDivisions.map((div, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#18002B] text-[#B8B3C0] border border-[#7900E8]/30"
              >
                {div}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-[#FFD500] transition-colors mb-2">
          {pkg.title}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-[#FFD500]/90 mb-3">
          {pkg.tagline}
        </p>

        <p className="text-sm text-[#B8B3C0] leading-relaxed mb-6">
          {pkg.description}
        </p>

        {/* Deliverables List */}
        <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
          <div className="text-xs uppercase font-semibold text-[#B8B3C0]/60 tracking-wider">
            Included Services:
          </div>
          {pkg.includedServices.map((service, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
              <div className="p-0.5 rounded-full bg-[#FFD500]/20 text-[#FFD500] mt-0.5 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{service}</span>
            </div>
          ))}
        </div>

        {/* Ideal For */}
        <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-[#B8B3C0]">
          <span className="font-semibold text-white">Ideal For: </span>
          <span>{pkg.idealFor}</span>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-white/10">
        <Link
          to={`/contact?service=Integrated%20Solutions&package=${encodeURIComponent(pkg.title)}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 bg-[#18002B] hover:bg-[#FFD500] text-white hover:text-[#080609] border border-[#7900E8]/40 hover:border-[#FFD500]"
        >
          <span>Discuss Requirements</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
