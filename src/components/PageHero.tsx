import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  badge?: string;
  divisionNumber?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  breadcrumbs?: { label: string; to?: string }[];
  accentColor?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  divisionNumber,
  title,
  titleHighlight,
  description,
  breadcrumbs = [{ label: 'Home', to: '/' }],
  accentColor = '#FFD500',
  children,
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#7900E8]/20">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      {/* Atmospheric lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle, ${
            accentColor === '#FFD500' ? '#FFD50033' : '#7900E844'
          } 0%, #18002B00 70%)`,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs sm:text-sm text-[#B8B3C0] mb-6"
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#B8B3C0]/50" />}
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-[#FFD500] transition-colors font-medium"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-4xl">
          {/* Top Pill / Division Number */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {divisionNumber && (
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#FFD500] text-[#080609] font-bold">
                DIVISION {divisionNumber}
              </span>
            )}
            {badge && (
              <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40 text-[#FFD500]">
                {badge}
              </span>
            )}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] mb-6">
            {title}{' '}
            {titleHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD500] via-[#FFAA00] to-[#FFD500]">
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#B8B3C0] leading-relaxed max-w-3xl">
            {description}
          </p>

          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
};
