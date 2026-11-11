import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Layers,
  Sparkles,
  Workflow,
  Briefcase,
  Coins,
  Send,
} from 'lucide-react';
import { Division } from '../config/services';
import { PageHero } from './PageHero';
import { Button } from './Button';
import { ContactForm } from './ContactForm';

interface DivisionPageTemplateProps {
  division: Division;
  icon: React.ReactNode;
}

export const DivisionPageTemplate: React.FC<DivisionPageTemplateProps> = ({
  division,
  icon,
}) => {
  return (
    <div className="relative">
      {/* PAGE HERO */}
      <PageHero
        badge={division.subheadline}
        divisionNumber={division.number}
        title={division.name}
        titleHighlight={`— ${division.headline}`}
        description={division.purpose}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: division.name },
        ]}
        accentColor={division.accentColor}
      >
        <Button
          to={`/contact?service=${encodeURIComponent(division.name)}`}
          variant="primary"
          showArrow
        >
          Enquire for {division.name}
        </Button>
        <Button to="/solutions" variant="outline">
          Explore Integrated Packages
        </Button>
      </PageHero>

      {/* CORE FOCUS OVERVIEW BANNER */}
      <section className="py-12 bg-[#0E0617] border-b border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#140A24] border border-[#7900E8]/30 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#18002B] border border-[#7900E8]/40 text-[#FFD500] shrink-0">
                {icon}
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#FFD500] uppercase mb-1">
                  Core Mandate
                </div>
                <p className="text-sm text-white font-medium">{division.coreFocus}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#140A24] border border-[#7900E8]/30 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#18002B] border border-[#7900E8]/40 text-[#FFD500] shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#FFD500] uppercase mb-1">
                  Typical Clients
                </div>
                <p className="text-xs text-[#B8B3C0]">
                  {division.typicalClients.slice(0, 3).join(', ')} & more.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#140A24] border border-[#7900E8]/30 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#18002B] border border-[#7900E8]/40 text-[#FFD500] shrink-0">
                <Coins className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#FFD500] uppercase mb-1">
                  Engagement Models
                </div>
                <p className="text-xs text-[#B8B3C0]">
                  {division.revenueModels.slice(0, 2).join(', ')}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL SERVICES OFFERED GRID */}
      <section className="py-20 lg:py-28 bg-[#080609]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40 mb-3 inline-block">
              Comprehensive Service Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Services Offered Under {division.name}
            </h2>
            <p className="mt-3 text-[#B8B3C0] text-base">
              Detailed breakdown of specialized offerings delivered by our dedicated {division.shortName} team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.categories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#120822] border border-[#7900E8]/30 hover:border-[#FFD500]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#FFD500] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#FFD500]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B3C0]">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD500] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER THE SERVICE */}
      <section className="py-20 lg:py-28 bg-[#0B0514] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40 mb-3 inline-block">
              Operational Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              How We Deliver {division.name}
            </h2>
            <p className="mt-3 text-[#B8B3C0] text-base">
              A structured step-by-step methodology ensuring transparent communication, quality control, and timely milestone completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {division.deliveryProcess.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#140A24] border border-[#7900E8]/30 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#18002B] text-[#FFD500] border border-[#7900E8]/40 flex items-center justify-center font-mono font-bold text-sm mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS & REVENUE MODELS */}
      <section className="py-16 bg-[#080609] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Typical Clients */}
            <div className="p-8 rounded-2xl bg-[#120822] border border-[#7900E8]/30">
              <h3 className="text-xl font-bold text-white font-display mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#FFD500]" />
                <span>Typical Clients Served</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {division.typicalClients.map((client, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#18002B] text-white border border-[#7900E8]/40"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Revenue Models */}
            <div className="p-8 rounded-2xl bg-[#120822] border border-[#7900E8]/30">
              <h3 className="text-xl font-bold text-white font-display mb-4 flex items-center gap-2">
                <Coins className="w-5 h-5 text-[#FFD500]" />
                <span>Standard Revenue & Engagement Models</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#B8B3C0]">
                {division.revenueModels.map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD500] shrink-0" />
                    <span>{model}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Regulatory / Operational Note if present */}
          {division.importantNote && (
            <div className="mt-8 p-6 rounded-2xl bg-[#1B0A26] border border-[#7900E8]/50 flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-[#FFD500] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">
                  Important Engagement Note
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                  {division.importantNote}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section className="py-20 lg:py-28 bg-[#0D0518] border-t border-[#7900E8]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40 mb-3 inline-block">
              Direct Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Discuss Your {division.name} Project
            </h2>
            <p className="mt-2 text-[#B8B3C0] text-sm sm:text-base">
              Submit your specific requirements and receive a detailed scope and formal quotation.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};
