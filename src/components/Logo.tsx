import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'navbar' | 'hero' | 'footer' | 'emblem';
  className?: string;
  linkToHome?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'navbar',
  className = '',
  linkToHome = true,
}) => {
  const content = (() => {
    switch (variant) {
      case 'emblem':
        return (
          <img
            src="/assets/digibu_emblem.png"
            alt="DIGIBU Emblem"
            className={`h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 ${className}`}
          />
        );
      case 'hero':
        return (
          <div className="flex flex-col items-center">
            <img
              src="/assets/digibu_logo_large.png"
              alt="DIGIBU Technologies Private Limited"
              className={`h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-[0_0_35px_rgba(121,0,232,0.5)] ${className}`}
            />
            <div className="mt-2 text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#B8B3C0] uppercase">
              Technologies Private Limited
            </div>
          </div>
        );
      case 'footer':
        return (
          <div className="space-y-2">
            <img
              src="/assets/digibu_logo_navbar.png"
              alt="DIGIBU Technologies Private Limited"
              className={`h-9 w-auto object-contain ${className}`}
            />
            <div className="text-[11px] font-medium tracking-[0.25em] text-[#B8B3C0]/80 uppercase">
              Technologies Private Limited
            </div>
          </div>
        );
      case 'navbar':
      default:
        return (
          <div className="flex items-center gap-3 group">
            <img
              src="/assets/digibu_logo_navbar.png"
              alt="DIGIBU Technologies"
              className={`h-8 sm:h-9 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,213,0,0.4)] ${className}`}
            />
          </div>
        );
    }
  })();

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD500] rounded-lg"
        aria-label="DIGIBU Technologies - Home"
      >
        {content}
      </Link>
    );
  }

  return <div className="inline-flex items-center">{content}</div>;
};
