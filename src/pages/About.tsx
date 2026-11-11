import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Compass,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Code2,
  TrendingUp,
  Palette,
  Video,
  Users,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { COMPANY } from '../config/company';
import { DIVISIONS } from '../config/services';

export const About: React.FC = () => {
  const divisionIcons: Record<string, React.ReactNode> = {
    it: <Code2 className="w-6 h-6 text-[#FFD500]" />,
    digital: <TrendingUp className="w-6 h-6 text-[#9B30FF]" />,
    creative: <Palette className="w-6 h-6 text-[#FFD500]" />,
    media: <Video className="w-6 h-6 text-[#9B30FF]" />,
    staffing: <Users className="w-6 h-6 text-[#FFD500]" />,
  };

  return (
    <div className="relative">
      {/* PAGE HERO */}
      <PageHero
        badge="Company Overview"
        title="Driving Business Growth Through"
        titleHighlight="Technology and Creativity."
        description="DIGIBU Technologies Private Limited is a multi-service technology and business solutions company committed to helping businesses grow through innovation, technology, creativity, digital marketing, media production and talent solutions."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      >
        <Button to="/services" variant="primary" showArrow>
          Explore Five Divisions
        </Button>
        <Button to="/contact" variant="outline">
          Connect With Us
        </Button>
      </PageHero>

      {/* SECTION: COMPANY OVERVIEW & OBJECTIVE */}
      <section className="py-20 lg:py-28 relative bg-[#080609]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box / Editorial Feature */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1B0730] to-[#0D0417] border border-[#7900E8]/40 shadow-2xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[#FFD500]/20 text-[#FFD500] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-mono tracking-widest text-[#FFD500] mb-2">
                  Our Corporate Objective
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
                  Purpose-Driven Growth
                </h3>
                <blockquote className="text-base sm:text-lg text-[#B8B3C0] leading-relaxed italic border-l-2 border-[#FFD500] pl-4 my-6">
                  "{COMPANY.objective}"
                </blockquote>
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#FFD500]">
                  <span>DIGIBU TECHNOLOGIES PRIVATE LIMITED</span>
                </div>
              </div>
            </div>

            {/* Content Columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18002B] border border-[#7900E8]/40 text-[#FFD500] text-xs font-semibold tracking-wider uppercase">
                <span>Who We Are</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display leading-tight">
                An Integrated Portfolio of Technology, Marketing, Creative, Media and Staffing Solutions.
              </h2>

              <p className="text-base sm:text-lg text-[#B8B3C0] leading-relaxed">
                Modern enterprises often struggle with the overhead of coordinating multiple independent vendors — web agencies, marketing freelancers, creative design studios, videographers, and staffing recruiters. This fragmented model leads to misaligned brand messaging, project delays, and redundant costs.
              </p>

              <p className="text-base sm:text-lg text-[#B8B3C0] leading-relaxed">
                DIGIBU Technologies Private Limited solves this challenge by organizing its multi-disciplinary capabilities into five specialised divisions. Each division operates with focused domain excellence, while seamlessly collaborating to deliver complete solutions through one coordinated team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#120822] border border-[#7900E8]/20 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FFD500] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Single Partner Accountability</h4>
                    <p className="text-xs text-[#B8B3C0]">Unified governance and clear communication across all business initiatives.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#120822] border border-[#7900E8]/20 flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[#FFD500] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Coordinated Execution</h4>
                    <p className="text-xs text-[#B8B3C0]">Engineers, designers, marketers and media creators working in unison.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR FIVE DIVISIONS ARCHITECTURE */}
      <section className="py-20 lg:py-28 relative bg-[#0C0614] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The DIGIBU Structure"
            title="Five Specialised Divisions."
            titleHighlight="One Team."
            subtitle="The company is organised into five specialised divisions. Each division focuses on a defined service area, while the divisions collaborate to deliver complete solutions."
          />

          <div className="space-y-6">
            {DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="group p-6 sm:p-8 rounded-3xl bg-[#140A24] border border-[#7900E8]/30 hover:border-[#FFD500]/40 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3.5 rounded-2xl bg-[#18002B] border border-[#7900E8]/40 shrink-0">
                    {divisionIcons[div.id]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs font-bold text-[#FFD500] px-2 py-0.5 rounded bg-[#18002B]">
                        {div.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-[#FFD500] transition-colors">
                        {div.name}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-[#FFD500]/80 mb-2">
                      {div.subheadline}
                    </p>
                    <p className="text-sm text-[#B8B3C0] max-w-2xl leading-relaxed">
                      {div.purpose}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                  <Link
                    to={div.route}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FFD500] px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span>View Division</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: OUR APPROACH */}
      <section className="py-20 lg:py-28 relative bg-[#080609] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Governance"
            title="Our Integrated"
            titleHighlight="Approach."
            subtitle="How we ensure reliable quality and measurable results across every client partnership."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#18002B] text-[#FFD500] flex items-center justify-center font-mono font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Holistic Discovery
              </h3>
              <p className="text-sm text-[#B8B3C0] leading-relaxed">
                We begin by understanding the foundational business model, target audience, competitive landscape, and operational constraints before recommending any technology stack or marketing campaign.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#18002B] text-[#FFD500] flex items-center justify-center font-mono font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Collaborative Specialisation
              </h3>
              <p className="text-sm text-[#B8B3C0] leading-relaxed">
                Rather than relying on generalists, our five divisions contribute distinct domain mastery. Designers build the interface, developers write clean code, marketers execute the launch, and media specialists produce cinematic assets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#18002B] text-[#FFD500] flex items-center justify-center font-mono font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Sustainable Scalability
              </h3>
              <p className="text-sm text-[#B8B3C0] leading-relaxed">
                We deliver documented codebases, maintainable brand guidelines, and actionable analytics. Our solutions are built to serve your business not just today, but throughout your next phase of evolution.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 text-center">
            <Button to="/process" variant="primary" size="lg" showArrow>
              See Our 9-Step Engagement Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
