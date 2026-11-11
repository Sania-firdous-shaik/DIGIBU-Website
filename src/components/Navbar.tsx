
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Code2,
  TrendingUp,
  Palette,
  Video,
  Users,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { DIVISIONS } from '../config/services';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const divisionIcons: Record<string, React.ReactNode> = {
    it: <Code2 className="w-5 h-5 text-[#FFD500]" />,
    digital: <TrendingUp className="w-5 h-5 text-[#7900E8]" />,
    creative: <Palette className="w-5 h-5 text-[#FFD500]" />,
    media: <Video className="w-5 h-5 text-[#7900E8]" />,
    staffing: <Users className="w-5 h-5 text-[#FFD500]" />,
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-lg ${
      isActive
        ? 'text-[#FFD500] bg-[#FFD500]/10 font-semibold'
        : 'text-[#B8B3C0] hover:text-white hover:bg-white/5'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080609]/90 backdrop-blur-xl border-b border-[#7900E8]/20 shadow-2xl shadow-[#18002B]/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Logo variant="navbar" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>

              {/* Services with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-lg ${
                    location.pathname.startsWith('/services')
                      ? 'text-[#FFD500] bg-[#FFD500]/10 font-semibold'
                      : 'text-[#B8B3C0] hover:text-white hover:bg-white/5'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-[#FFD500]' : ''
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] max-w-[90vw] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-[#12091F]/95 backdrop-blur-2xl border border-[#7900E8]/40 rounded-2xl shadow-2xl shadow-[#080609]/90 p-5 overflow-hidden">
                      {/* Top Header of Mega Menu */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <div>
                          <div className="text-xs uppercase tracking-wider font-semibold text-[#FFD500]">
                            Five Specialised Divisions
                          </div>
                          <div className="text-sm text-[#B8B3C0]">
                            One unified partner for digital transformation
                          </div>
                        </div>

                        <Link
                          to="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#FFD500] transition-colors py-1 px-3 rounded-lg bg-white/5 hover:bg-white/10"
                        >
                          <span>All Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* 2-Column Grid */}
                      <div className="grid grid-cols-12 gap-4">
                        {/* 5 Divisions List */}
                        <div className="col-span-8 space-y-1.5">
                          {DIVISIONS.map((division) => (
                            <Link
                              key={division.id}
                              to={division.route}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-[#7900E8]/30"
                            >
                              <div className="p-2 rounded-lg bg-[#18002B] border border-[#7900E8]/30 group-hover:border-[#FFD500]/50 transition-colors shrink-0">
                                {divisionIcons[division.id]}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono font-bold text-[#FFD500]">
                                    {division.number}
                                  </span>
                                  <span className="text-sm font-semibold text-white group-hover:text-[#FFD500] transition-colors">
                                    {division.name}
                                  </span>
                                </div>

                                <p className="text-xs text-[#B8B3C0] line-clamp-1 mt-0.5">
                                  {division.coreFocus}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Side Highlight Card: Integrated Solutions */}
                        <div className="col-span-4 flex flex-col justify-between p-4 rounded-xl bg-gradient-to-br from-[#18002B] to-[#250045] border border-[#7900E8]/40">
                          <div>
                            <div className="w-8 h-8 rounded-lg bg-[#7900E8]/30 flex items-center justify-center text-[#FFD500] mb-3">
                              <Sparkles className="w-4 h-4" />
                            </div>

                            <h4 className="text-sm font-bold text-white mb-1">
                              Integrated Solutions
                            </h4>

                            <p className="text-xs text-[#B8B3C0] leading-relaxed mb-4">
                              Pre-configured business growth packages uniting technology, marketing, branding and media.
                            </p>
                          </div>

                          <Link
                            to="/solutions"
                            className="inline-flex items-center justify-between text-xs font-semibold text-[#FFD500] hover:text-white transition-colors pt-2 border-t border-white/10"
                          >
                            <span>Explore 7 Packages</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/solutions" className={navLinkClass}>
                Solutions
              </NavLink>

              <NavLink to="/process" className={navLinkClass}>
                Our Process
              </NavLink>

              {/* Careers */}
              <NavLink to="/careers" className={navLinkClass}>
                Careers
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* Desktop Let's Talk CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button to="/contact" variant="primary" size="sm" showArrow>
                Let's Talk
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#18002B] text-white hover:text-[#FFD500] border border-[#7900E8]/40 focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#080609]/95 backdrop-blur-2xl pt-24 pb-8 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-lg font-semibold py-2 px-3 rounded-lg text-white hover:bg-white/5 hover:text-[#FFD500]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-lg font-semibold py-2 px-3 rounded-lg text-white hover:bg-white/5 hover:text-[#FFD500]"
            >
              About DIGIBU
            </Link>

            {/* Mobile Divisions Accordion / List */}
            <div className="pt-2 pb-2">
              <div className="text-xs uppercase font-bold tracking-wider text-[#FFD500] px-3 mb-2">
                Our Five Divisions
              </div>

              <div className="space-y-1 pl-2">
                <Link
                  to="/services"
                  className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold text-white bg-white/5"
                >
                  <Layers className="w-4 h-4 text-[#FFD500]" />
                  <span>All Services Overview</span>
                </Link>

                {DIVISIONS.map((div) => (
                  <Link
                    key={div.id}
                    to={div.route}
                    className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-[#B8B3C0] hover:text-white hover:bg-white/5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#FFD500]">
                        {div.number}
                      </span>
                      <span>{div.name}</span>
                    </span>

                    <ArrowRight className="w-3.5 h-3.5 text-white/40" />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/solutions"
              className="text-lg font-semibold py-2 px-3 rounded-lg text-white hover:bg-white/5 hover:text-[#FFD500]"
            >
              Integrated Solutions
            </Link>

            <Link
              to="/process"
              className="text-lg font-semibold py-2 px-3 rounded-lg text-white hover:bg-white/5 hover:text-[#FFD500]"
            >
              Our Process
            </Link>

            {/* Careers */}
            <Link
              to="/careers"
              className="text-lg font-semibold py-2 px-3 rounded-lg text-white hover:bg-white/5 hover:text-[#FFD500]"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="text-lg font-semibold py-2 px-3 rounded-lg text-white hover:bg-white/5 hover:text-[#FFD500]"
            >
              Contact Us
            </Link>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                showArrow
                className="w-full"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
