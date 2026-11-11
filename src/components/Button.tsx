import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  showArrow?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  showArrow = false,
  isLoading = false,
  icon,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD500] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#FFD500] hover:bg-[#FFDE33] text-[#080609] font-semibold shadow-[0_0_20px_rgba(255,213,0,0.25)] hover:shadow-[0_0_30px_rgba(255,213,0,0.45)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-[#18002B]/80 hover:bg-[#250545] text-white border border-[#7900E8]/50 hover:border-[#7900E8] shadow-[0_4px_20px_rgba(121,0,232,0.2)] hover:shadow-[0_4px_30px_rgba(121,0,232,0.4)] hover:-translate-y-0.5 active:translate-y-0',
    glow:
      'bg-gradient-to-r from-[#5700A8] to-[#7900E8] text-white font-medium hover:brightness-110 shadow-[0_0_25px_rgba(121,0,232,0.5)] hover:shadow-[0_0_40px_rgba(121,0,232,0.7)] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/50 active:translate-y-0',
    ghost:
      'bg-transparent hover:bg-[#7900E8]/10 text-[#B8B3C0] hover:text-white active:translate-y-0',
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  const innerContent = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        icon && <span className="inline-flex shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {showArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {innerContent}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {innerContent}
    </button>
  );
};
