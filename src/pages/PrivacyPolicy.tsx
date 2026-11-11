import React from 'react';
import { PageHero } from '../components/PageHero';
import { COMPANY } from '../config/company';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="relative">
      {/* PAGE HERO */}
      <PageHero
        badge="Legal & Transparency"
        title="Privacy"
        titleHighlight="Policy."
        description="DIGIBU Technologies Private Limited respects your privacy and is committed to protecting your personal and business data. This policy outlines how we collect, use, and safeguard information across our website and business interactions."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="py-20 bg-[#080609]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[#B8B3C0] text-sm sm:text-base leading-relaxed">
          <div className="p-6 rounded-2xl bg-[#120822] border border-[#7900E8]/30">
            <span className="text-xs font-mono font-bold text-[#FFD500] uppercase block mb-1">
              Effective Date: January 1, 2026
            </span>
            <p className="text-xs text-[#B8B3C0]">
              Entity: {COMPANY.name} • All rights reserved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-display mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              When you submit a consultation request or communicate with {COMPANY.name}, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Contact Information:</strong> Your full name, work email address, telephone number, and company name.
              </li>
              <li>
                <strong className="text-white">Project Details:</strong> Information regarding the services you require (IT, Digital Marketing, Creative, Media Production, Staffing, or Integrated Packages), budget constraints, and project specifications.
              </li>
              <li>
                <strong className="text-white">Technical Data:</strong> Browser type, IP address, device information, and interaction metrics gathered through standard analytics to optimize website performance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-display mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">
              We process your submitted data strictly for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To evaluate your project requirements and prepare customized proposals or quotations.</li>
              <li>To facilitate discovery discussions with our specialized division leads.</li>
              <li>To deliver agreed services, technical development, marketing campaigns, or staffing coordination.</li>
              <li>To transmit administrative notices, contract updates, and project milestone approvals.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-display mb-4">
              3. Marketing Communications & Opt-Out
            </h2>
            <p>
              In accordance with our strict operating guidelines, marketing communications and campaign planning follow applicable consent, privacy, and opt-out requirements. You may opt out of promotional updates at any time by contacting us directly at{' '}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-[#FFD500] hover:underline">
                {COMPANY.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-display mb-4">
              4. Data Retention & Security
            </h2>
            <p>
              We implement industry-standard technical and organizational security controls to protect your data from unauthorized access, alteration, disclosure, or destruction. We do not sell, rent, or trade your personal information to third-party data brokers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-display mb-4">
              5. Candidate Data (Staffing Division)
            </h2>
            <p>
              Resumes and candidate assessment details submitted to DIGIBU Staffing are retained confidentially and shared with client organizations only upon mutual alignment for specific recruitment mandates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-display mb-4">
              6. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions, wish to review, update, or delete your contact records, please address your request to our data compliance team:
            </p>
            <div className="mt-4 p-5 rounded-xl bg-[#140A24] border border-[#7900E8]/30 font-mono text-xs text-white">
              <div>{COMPANY.name}</div>
              <div>Email: {COMPANY.contact.email}</div>
              <div>Direct Phone: {COMPANY.contact.phone}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
