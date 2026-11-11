import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'max-w-3xl mb-12 lg:mb-16',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18002B] border border-[#7900E8]/40 text-[#FFD500] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD500] animate-ping" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD500] via-[#FFAA00] to-[#FFD500]">
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#B8B3C0] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
