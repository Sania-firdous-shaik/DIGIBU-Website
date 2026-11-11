import React from 'react';
import {
  Mail,
  Phone,
  Clock,
  Building,
  ShieldCheck,
  Info,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { COMPANY } from '../config/company';

export const Contact: React.FC = () => {
  return (
    <div className="relative">
      {/* PAGE HERO */}
      <PageHero
        badge="Direct Consultation"
        title="Let's Build Something That"
        titleHighlight="Moves Your Business Forward."
        description="Whether you require individual services from one division or an integrated multi-division solution, share your project details below and our leadership team will respond with a tailored proposal."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* CONTACT CONTENT SECTION */}
      <section className="py-20 lg:py-28 bg-[#080609] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Company & Direct Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40 mb-3 inline-block">
                  Direct Coordination
                </span>
                <h2 className="text-3xl font-bold text-white font-display">
                  Connect Directly With Our Strategic Leads
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#B8B3C0] leading-relaxed">
                  DIGIBU Technologies Private Limited provides dedicated account directors for all five divisions, ensuring immediate response times and clear project oversight.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#18002B] text-[#FFD500] border border-[#7900E8]/40 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#FFD500] uppercase mb-1">
                      Email Inquiries
                    </h4>
                    {COMPANY.contact.isEmailConfigured ? (
                      <a
                        href={`mailto:${COMPANY.contact.email}`}
                        className="text-sm sm:text-base font-semibold text-white hover:text-[#FFD500] transition-colors"
                      >
                        {COMPANY.contact.email}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-white/90">
                        {COMPANY.contact.email}
                      </div>
                    )}
                    <p className="text-xs text-[#B8B3C0] mt-0.5">
                      {COMPANY.contact.isEmailConfigured
                        ? 'Proposal inquiries and general business correspondence.'
                        : 'Submit your requirements via the secure form on this page.'}
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#18002B] text-[#FFD500] border border-[#7900E8]/40 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#FFD500] uppercase mb-1">
                      Direct Telephone Line
                    </h4>
                    <div className="text-sm font-semibold text-white">
                      {COMPANY.contact.phone}
                    </div>
                    <p className="text-xs text-[#B8B3C0] mt-0.5">
                      Direct telephone consultation available following preliminary requirement review.
                    </p>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="p-5 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#18002B] text-[#FFD500] border border-[#7900E8]/40 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#FFD500] uppercase mb-1">
                      Operating Hours
                    </h4>
                    <div className="text-sm sm:text-base font-semibold text-white">
                      {COMPANY.contact.hours}
                    </div>
                    <p className="text-xs text-[#B8B3C0] mt-0.5">
                      Consultation teams active across Indian and international business hours.
                    </p>
                  </div>
                </div>

                {/* Entity & Location Card */}
                <div className="p-5 rounded-2xl bg-[#120822] border border-[#7900E8]/30 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#18002B] text-[#FFD500] border border-[#7900E8]/40 shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#FFD500] uppercase mb-1">
                      Corporate Entity
                    </h4>
                    <div className="text-sm font-semibold text-white">
                      {COMPANY.name}
                    </div>
                    <p className="text-xs text-[#B8B3C0] mt-1">
                      {COMPANY.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Engagement Assurance */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#18002B] to-[#240342] border border-[#7900E8]/40 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFD500] uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Response Commitment</span>
                </div>
                <p className="text-xs text-[#B8B3C0] leading-relaxed">
                  We review incoming enquiries promptly and schedule an initial discovery call within 24 to 48 business hours with the relevant division leads.
                </p>
              </div>

              {/* Configuration Notice for User */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#B8B3C0]/80 flex items-start gap-3">
                <Info className="w-4 h-4 text-[#FFD500] shrink-0 mt-0.5" />
                <span>
                  <strong>Administrator Note:</strong> Official corporate email, direct telephone desk, and office coordinates can be configured via environment variables (<code className="text-[#FFD500]">VITE_CONTACT_EMAIL</code>, <code className="text-[#FFD500]">VITE_CONTACT_PHONE</code>, <code className="text-[#FFD500]">VITE_CONTACT_ADDRESS</code>).
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
