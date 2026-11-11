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
  Sparkles,
  Layers,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { DIVISIONS } from '../config/services';

export const Services: React.FC = () => {
  const divisionIcons: Record<string, React.ReactNode> = {
    it: <Code2 className="w-8 h-8 text-[#FFD500]" />,
    digital: <TrendingUp className="w-8 h-8 text-[#9B30FF]" />,
    creative: <Palette className="w-8 h-8 text-[#FFD500]" />,
    media: <Video className="w-8 h-8 text-[#9B30FF]" />,
    staffing: <Users className="w-8 h-8 text-[#FFD500]" />,
  };

  return (
    <div className="relative">
      {/* PAGE HERO */}
      <PageHero
        badge="Enterprise Capabilities"
        title="Comprehensive Capabilities Across"
        titleHighlight="Five Specialised Divisions."
        description="From software engineering and digital marketing to brand identity, media production and workforce staffing, DIGIBU delivers complete business solutions under one coordinated roof."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      >
        <Button to="/solutions" variant="primary" showArrow>
          View Integrated Packages
        </Button>
        <Button to="/contact" variant="secondary">
          Request Custom Proposal
        </Button>
      </PageHero>

      {/* QUICK JUMP NAVIGATION */}
      <section className="py-6 border-b border-[#7900E8]/20 bg-[#0E0617] sticky top-[68px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4 py-1">
            <span className="text-xs uppercase font-mono font-bold text-[#FFD500] shrink-0">
              Jump To Division:
            </span>
            <div className="flex items-center gap-3 shrink-0">
              {DIVISIONS.map((div) => (
                <a
                  key={div.id}
                  href={`#${div.id}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#18002B] hover:bg-[#FFD500] hover:text-[#080609] border border-[#7900E8]/40 transition-colors shrink-0"
                >
                  <span className="text-[#FFD500] group-hover:text-[#080609] mr-1.5 font-mono">
                    {div.number}
                  </span>
                  <span>{div.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIVE DIVISION SECTIONS */}
      <div className="space-y-24 py-20 lg:py-28">
        {DIVISIONS.map((div, idx) => (
          <section
            key={div.id}
            id={div.id}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36`}
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#140A24] to-[#0D0518] border border-[#7900E8]/40 shadow-2xl relative overflow-hidden">
              {/* Background ambient glow */}
              <div
                className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 ${
                  idx % 2 === 0 ? 'bg-[#FFD500]' : 'bg-[#7900E8]'
                }`}
              />

              {/* Division Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-[#18002B] border border-[#7900E8]/50 shrink-0">
                    {divisionIcons[div.id]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs font-bold text-[#FFD500] px-2.5 py-0.5 rounded-full bg-[#18002B] border border-[#7900E8]/40">
                        DIVISION {div.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#B8B3C0]">
                        {div.coreFocus}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-2">
                      {div.name}
                    </h2>
                    <p className="text-base sm:text-lg font-medium text-[#FFD500]">
                      {div.headline}
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button to={div.route} variant="primary" showArrow>
                    Full {div.name} Page
                  </Button>
                </div>
              </div>

              {/* Purpose Bar */}
              <div className="py-6 border-b border-white/5 relative z-10">
                <p className="text-sm sm:text-base text-[#B8B3C0] leading-relaxed max-w-4xl">
                  <span className="text-white font-semibold">Division Purpose: </span>
                  {div.purpose}
                </p>
              </div>

              {/* Service Categories Grid */}
              <div className="pt-8 relative z-10">
                <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-[#FFD500] mb-6">
                  Services Offered Under {div.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {div.categories.map((cat, catIdx) => (
                    <div
                      key={catIdx}
                      className="p-5 rounded-2xl bg-[#18002B]/60 border border-[#7900E8]/30 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD500]" />
                          <span>{cat.title}</span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#B8B3C0]">
                          {cat.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <span className="text-[#FFD500] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Clients & Link */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#B8B3C0] relative z-10">
                <div>
                  <span className="text-white font-semibold">Typical Clients: </span>
                  <span>{div.typicalClients.slice(0, 4).join(', ')} and more.</span>
                </div>
                <Link
                  to={div.route}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FFD500] hover:underline"
                >
                  <span>Explore Delivery Process & Case Inquiries</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CROSS-PROMOTION BANNER: INTEGRATED SOLUTIONS */}
      <section className="py-20 bg-[#0B0514] border-t border-[#7900E8]/30 relative text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18002B] border border-[#FFD500]/40 text-[#FFD500] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connected Business Bundles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Looking for an All-in-One Growth Solution?
          </h2>

          <p className="text-base sm:text-lg text-[#B8B3C0] max-w-2xl mx-auto mb-8">
            Explore our pre-configured integrated packages that bundle website development, branding, digital marketing, promotional videos, and recruitment under one predictable contract.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/solutions" variant="primary" size="lg" showArrow>
              Explore 7 Integrated Solutions
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
