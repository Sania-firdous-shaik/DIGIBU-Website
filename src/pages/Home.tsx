import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  Layers,
  Shield,
  Zap,
  Target,
  Workflow,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { HeroAnimation } from '../components/HeroAnimation';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { InteractivePackageCard } from '../components/InteractivePackageCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { DIVISIONS } from '../config/services';
import { BUSINESS_PACKAGES, VALUE_PROPOSITIONS } from '../config/packages';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Canvas Mesh & Ambient Background */}
        <HeroAnimation />
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

        {/* Moving Brand Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[900px] h-[450px] rounded-full bg-gradient-to-tr from-[#5700A8]/30 via-[#7900E8]/20 to-[#FFD500]/10 blur-[150px] pointer-events-none animate-pulse-slow" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Official DIGIBU Logo Prominently Displayed */}
          <div className="mb-8">
            <Logo variant="hero" linkToHome={false} />
          </div>

          {/* Tagline / Subtitle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18002B]/80 border border-[#7900E8]/50 text-[#FFD500] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg shadow-[#7900E8]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Technology • Creative • Media • Growth • Staffing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white font-display leading-[1.05] max-w-5xl mb-6">
            Your Next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD500] via-[#FFE24A] to-[#FFD500]">
              Digital Evolution.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#B8B3C0] max-w-3xl leading-relaxed mb-10 font-normal">
            Technology, creativity, digital growth and talent solutions — bringing everything your business needs under one roof.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button to="/services" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
              Explore Our Services
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Let's Talk
            </Button>
          </div>

          {/* 5-Division Quick Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-5 gap-3 w-full max-w-4xl text-center">
            {DIVISIONS.map((div) => (
              <Link
                key={div.id}
                to={div.route}
                className="group p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#7900E8]/40 transition-all"
              >
                <div className="text-[11px] font-mono font-bold text-[#FFD500]">
                  {div.number}
                </div>
                <div className="text-xs font-semibold text-white group-hover:text-[#FFD500] transition-colors">
                  {div.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 flex flex-col items-center text-xs text-[#B8B3C0]/60 animate-bounce">
            <span className="mb-1 text-[10px] uppercase tracking-widest">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 text-[#FFD500]" />
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-24 lg:py-32 relative border-t border-[#7900E8]/20 bg-[#080609]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#7900E8]/30 bg-gradient-to-br from-[#18002B] to-[#0A0312] p-8 sm:p-10 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-[#FFD500]/15 border border-[#FFD500]/30 text-[#FFD500] flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase font-mono tracking-widest text-[#FFD500] mb-2">
                  Unified Agency Architecture
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
                  One Unified Partner
                </h3>
                <p className="text-sm sm:text-base text-[#B8B3C0] leading-relaxed mb-6">
                  Say goodbye to the friction of managing fragmented vendors. DIGIBU coordinates your engineering, digital marketing, visual branding, media production, and workforce hiring under a single strategic governance.
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/90">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD500]" />
                    <span>Single point of accountability & communication</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD500]" />
                    <span>Seamless handoffs between tech, design & marketing</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD500]" />
                    <span>Consistent brand identity across all media channels</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18002B] border border-[#7900E8]/40 text-[#FFD500] text-xs font-semibold tracking-wider uppercase mb-4">
                <span>About DIGIBU</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display leading-[1.15] mb-6">
                More Than Services.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD500] via-[#FFAA00] to-[#FFD500]">
                  One Complete Growth Partner.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#B8B3C0] leading-relaxed mb-6">
                DIGIBU Technologies Private Limited helps businesses grow through technology, creativity, digital marketing, media production and talent solutions. Our five specialised divisions work together to provide coordinated solutions for modern business needs.
              </p>

              <p className="text-base sm:text-lg text-[#B8B3C0] leading-relaxed mb-8">
                Whether you need a custom web application, an aggressive lead-generation engine, cinematic brand videography, or specialised workforce staffing, DIGIBU delivers cohesive execution that drives sustainable growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button to="/about" variant="primary" showArrow>
                  Learn About Our Company
                </Button>
                <Button to="/solutions" variant="outline">
                  View Integrated Packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FIVE DIVISIONS */}
      <section className="py-24 lg:py-32 relative bg-[#0B0612] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Specialised Competencies"
            title="Five Divisions."
            titleHighlight="One Vision."
            subtitle="Explore our five core divisions designed to execute specialised mandates independently or collaborate seamlessly as a unified growth engine."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {DIVISIONS.map((division, idx) => (
              <ServiceCard
                key={division.id}
                division={division}
                featured={idx === 0 || idx === 1}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg" showArrow>
              Explore Full Service Directory
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATED BUSINESS SOLUTIONS */}
      <section className="py-24 lg:py-32 relative bg-[#080609] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pre-Configured Bundles"
            title="Everything Your Business Needs."
            titleHighlight="Connected."
            subtitle="Our cross-division packages integrate technology, creative design, digital marketing, media production, and recruitment to solve complex business mandates under a single engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BUSINESS_PACKAGES.map((pkg) => (
              <InteractivePackageCard
                key={pkg.id}
                pkg={pkg}
                fullWidth={pkg.id === 'content-to-marketing'}
              />
            ))}
          </div>

          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#18002B] via-[#2D034E] to-[#18002B] border border-[#7900E8]/40 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">
                Need a Custom Combination for Your Business?
              </h3>
              <p className="text-sm text-[#B8B3C0]">
                We tailor integrated scopes across our five divisions to fit your specific milestones and budget.
              </p>
            </div>
            <Button to="/contact?service=Integrated%20Solutions" variant="primary" showArrow className="shrink-0">
              Discuss Your Requirements
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY DIGIBU? */}
      <section className="py-24 lg:py-32 relative bg-[#0A0512] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Genuine Value"
            title="One Partner."
            titleHighlight="Multiple Possibilities."
            subtitle="Built on structured processes, domain expertise, and coordinated execution across every phase of digital evolution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {VALUE_PROPOSITIONS.map((prop, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#120822] border border-[#7900E8]/30 hover:border-[#FFD500]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#18002B] text-[#FFD500] border border-[#7900E8]/40 flex items-center justify-center font-mono font-bold text-base mb-5 group-hover:scale-105 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[#FFD500] transition-colors">
                  {prop.title}
                </h3>
                <p className="text-sm text-[#B8B3C0] leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK */}
      <section className="py-24 lg:py-32 relative bg-[#080609] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Standard Engagement Process"
            title="How We"
            titleHighlight="Work."
            subtitle="A transparent, 9-stage client journey ensuring rigorous quality, clear milestones, and accountable delivery from initial enquiry to final support."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-24 lg:py-32 relative bg-gradient-to-b from-[#080609] via-[#16042A] to-[#080609] border-t border-[#7900E8]/30 overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7900E8]/20 blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18002B] border border-[#FFD500]/40 text-[#FFD500] text-xs font-semibold tracking-wider uppercase mb-6 shadow-md">
            <span>Begin Your Digital Evolution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.1] mb-6">
            Let's Build Something That Moves Your Business Forward.
          </h2>

          <p className="text-base sm:text-xl text-[#B8B3C0] max-w-2xl mx-auto mb-10 leading-relaxed">
            Have a project in mind? Let's discuss how DIGIBU can help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Start a Project
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
