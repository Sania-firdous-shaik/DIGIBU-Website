import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { InteractivePackageCard } from '../components/InteractivePackageCard';
import { BUSINESS_PACKAGES } from '../config/packages';

export const Solutions: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredPackages =
    selectedFilter === 'all'
      ? BUSINESS_PACKAGES
      : BUSINESS_PACKAGES.filter((pkg) =>
          pkg.involvedDivisions.some((d) => d.toLowerCase().includes(selectedFilter.toLowerCase()))
        );

  return (
    <div className="relative">
      {/* PAGE HERO */}
      <PageHero
        badge="Cross-Disciplinary Synergies"
        title="Everything Your Business Needs."
        titleHighlight="Connected."
        description="Our five specialised divisions collaborate to deliver unified business solutions. Choose from our pre-configured growth packages or let us design a bespoke multi-service engagement."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Integrated Solutions' },
        ]}
      >
        <Button to="/contact?service=Integrated%20Solutions" variant="primary" showArrow>
          Request Custom Package
        </Button>
        <Button to="/process" variant="outline">
          How Delivery Works
        </Button>
      </PageHero>

      {/* SYNERGY EXPLANATION */}
      <section className="py-16 bg-[#0E0617] border-b border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#140A24] border border-[#7900E8]/30 space-y-2">
              <div className="text-xs uppercase font-mono font-bold text-[#FFD500]">
                01 • Zero Vendor Overhead
              </div>
              <h3 className="text-lg font-bold text-white">One Master Agreement</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Coordinate your web engineering, advertising campaigns, executive branding, and team hiring under a single consolidated contract.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#140A24] border border-[#7900E8]/30 space-y-2">
              <div className="text-xs uppercase font-mono font-bold text-[#FFD500]">
                02 • Flawless Alignment
              </div>
              <h3 className="text-lg font-bold text-white">Synchronized Delivery</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Brand designers build visual identity while developers code the platform, and media teams capture assets tailored for the advertising pipeline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#140A24] border border-[#7900E8]/30 space-y-2">
              <div className="text-xs uppercase font-mono font-bold text-[#FFD500]">
                03 • Cost Efficiency
              </div>
              <h3 className="text-lg font-bold text-white">Bundled Value</h3>
              <p className="text-xs sm:text-sm text-[#B8B3C0] leading-relaxed">
                Integrated packages eliminate markup duplication and save weeks of onboarding and cross-agency meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & 7 PACKAGES GRID */}
      <section className="py-20 lg:py-28 bg-[#080609]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40 mb-3 inline-block">
                Seven Core Bundles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Strategic Business Packages
              </h2>
            </div>

            {/* Division Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Packages' },
                { id: 'it', label: 'DIGIBU IT' },
                { id: 'digital', label: 'DIGIBU Digital' },
                { id: 'creative', label: 'DIGIBU Creative' },
                { id: 'media', label: 'DIGIBU Media' },
                { id: 'staffing', label: 'DIGIBU Staffing' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all ${
                    selectedFilter === filter.id
                      ? 'bg-[#FFD500] text-[#080609] shadow-md'
                      : 'bg-[#18002B] text-[#B8B3C0] hover:text-white border border-[#7900E8]/30'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPackages.map((pkg) => (
              <InteractivePackageCard
                key={pkg.id}
                pkg={pkg}
                fullWidth={selectedFilter === 'all' && pkg.id === 'content-to-marketing'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIVISION COLLABORATION MATRIX TABLE */}
      <section className="py-20 bg-[#0C0614] border-t border-[#7900E8]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Synergy Matrix"
            title="Cross-Division"
            titleHighlight="Collaboration."
            subtitle="See how our five divisions intersect to create end-to-end deliverables across our 7 integrated packages."
          />

          <div className="overflow-x-auto rounded-2xl border border-[#7900E8]/30 bg-[#120822]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#18002B] text-xs uppercase font-mono text-[#FFD500] border-b border-[#7900E8]/40">
                <tr>
                  <th className="py-4 px-6">Package Name</th>
                  <th className="py-4 px-4 text-center">IT</th>
                  <th className="py-4 px-4 text-center">Digital</th>
                  <th className="py-4 px-4 text-center">Creative</th>
                  <th className="py-4 px-4 text-center">Media</th>
                  <th className="py-4 px-4 text-center">Staffing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#B8B3C0]">
                {BUSINESS_PACKAGES.map((pkg) => {
                  const hasIT = pkg.involvedDivisions.some((d) => d.includes('IT'));
                  const hasDigital = pkg.involvedDivisions.some((d) => d.includes('Digital'));
                  const hasCreative = pkg.involvedDivisions.some((d) => d.includes('Creative'));
                  const hasMedia = pkg.involvedDivisions.some((d) => d.includes('Media'));
                  const hasStaffing = pkg.involvedDivisions.some((d) => d.includes('Staffing'));

                  return (
                    <tr key={pkg.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#FFD500]">{pkg.number}</span>
                          <span>{pkg.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {hasIT ? (
                          <div className="inline-flex p-1 rounded-full bg-[#FFD500]/20 text-[#FFD500]">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {hasDigital ? (
                          <div className="inline-flex p-1 rounded-full bg-[#7900E8]/30 text-[#9B30FF]">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {hasCreative ? (
                          <div className="inline-flex p-1 rounded-full bg-[#FFD500]/20 text-[#FFD500]">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {hasMedia ? (
                          <div className="inline-flex p-1 rounded-full bg-[#7900E8]/30 text-[#9B30FF]">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {hasStaffing ? (
                          <div className="inline-flex p-1 rounded-full bg-[#FFD500]/20 text-[#FFD500]">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#080609] border-t border-[#7900E8]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
            Customise Your Integrated Solution
          </h2>
          <p className="text-base text-[#B8B3C0] max-w-xl mx-auto mb-8">
            Tell us about your organization's goals, and our leadership team will assemble the exact division resources you require.
          </p>
          <Button to="/contact?service=Integrated%20Solutions" variant="primary" size="lg" showArrow>
            Discuss Your Custom Requirements
          </Button>
        </div>
      </section>
    </div>
  );
};
