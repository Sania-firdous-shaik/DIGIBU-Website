import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ENGAGEMENT_PROCESS } from '../config/packages';

export const Process: React.FC = () => {
  return (
    <div className="relative">
      {/* PAGE HERO */}
      <PageHero
        badge="Engagement Framework"
        title="Predictable, Transparent,"
        titleHighlight="Client-First Process."
        description="Every DIGIBU partnership follows a structured 9-stage engagement roadmap designed to ensure strategic alignment, rigorous execution, and accountable milestones from discovery to long-term support."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Our Process' },
        ]}
      >
        <Button to="/contact" variant="primary" showArrow>
          Initiate Stage 01: Enquiry
        </Button>
        <Button to="/solutions" variant="outline">
          Explore Packages
        </Button>
      </PageHero>

      {/* 9-STEP INTERACTIVE TIMELINE SECTION */}
      <section className="py-20 lg:py-28 bg-[#080609]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The 9 Engagement Milestones"
            title="From Consultation to"
            titleHighlight="Final Handover."
            subtitle="Click on any milestone below to inspect the objectives, deliverables, and expectations at every phase of the project lifecycle."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* SECTION: BUSINESS & REVENUE MODELS */}
      <section className="py-20 bg-[#0C0614] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flexible Engagements"
            title="Commercial &"
            titleHighlight="Revenue Models."
            subtitle="Structured commercial arrangements tailored to project size, operational requirements, and client timelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FFD500]">MODEL 01</span>
              <h3 className="text-lg font-bold text-white">Project-Based Services</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                One-time charges for scoped websites, software applications, brand identity systems, video shoots, and executive presentations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FFD500]">MODEL 02</span>
              <h3 className="text-lg font-bold text-white">Monthly Retainer Packages</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Recurring monthly charges for ongoing digital marketing management, social media publishing, continuous SEO, and regular IT support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FFD500]">MODEL 03</span>
              <h3 className="text-lg font-bold text-white">Annual Maintenance Contracts (AMC)</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Long-term agreements covering security audits, platform maintenance, software bug resolutions, and IT infrastructure upkeep.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FFD500]">MODEL 04</span>
              <h3 className="text-lg font-bold text-white">Recruitment & Placement Fees</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Success-based placement charges and staffing agreements for sourcing, screening, and coordinating technical or non-technical talent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FFD500]">MODEL 05</span>
              <h3 className="text-lg font-bold text-white">RPO & Staffing Retainers</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Dedicated talent acquisition pipelines and recruitment process outsourcing contracts for high-volume hiring and scaling teams.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FFD500]">MODEL 06</span>
              <h3 className="text-lg font-bold text-white">Consulting & Advisory Services</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Professional advisory fees for IT infrastructure architecture, digital transformation roadmaps, and corporate brand positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SERVICE ENGAGEMENT STANDARDS */}
      <section className="py-20 bg-[#080609] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Governance"
            title="Service Engagement"
            titleHighlight="Principles."
            subtitle="Clear policies and commitments that protect project timelines, quality, and mutual investment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
              <FileCheck className="w-5 h-5 text-[#FFD500] shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Written Scope & Clear Deliverables
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                  Every assignment begins with a written proposal or quotation confirming exact deliverables, milestones, estimated timelines, fees, and payment schedule.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-[#FFD500] shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Transparent Third-Party Expenses
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                  Third-party costs such as advertising media budgets, domain registrations, hosting servers, stock footage, or venue rentals are itemized separately without hidden markups.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#FFD500] shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Defined Revision & Production Quotas
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                  The number of concepts, revision rounds, shoot hours, deliverable formats, and post-launch support periods are established upfront before work begins.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-[#FFD500] shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Statutory & Privacy Compliance
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                  All digital marketing, creative works, and recruitment activities comply strictly with applicable data privacy, consent, and labour regulatory frameworks.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Ready to Start? Submit Your Project Enquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
