export interface BusinessPackage {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  includedServices: string[];
  involvedDivisions: string[];
  idealFor: string;
  featured?: boolean;
}

export const BUSINESS_PACKAGES: BusinessPackage[] = [
  {
    id: 'business-launch',
    number: '01',
    title: 'Business Launch Package',
    tagline: 'The complete launchpad for ambitious new ventures and brand relaunches.',
    description:
      'Everything required to establish your brand, build your online presence, and kickstart customer acquisition from day one.',
    includedServices: [
      'Custom Corporate Website Development',
      'Original Brand Logo & Visual Assets',
      'Official Company Profile Document',
      'Full Digital Marketing Setup & Profiles',
    ],
    involvedDivisions: ['DIGIBU IT', 'DIGIBU Creative', 'DIGIBU Digital'],
    idealFor: 'Startups, new ventures, and companies looking to establish an immediate credible market presence.',
    featured: true,
  },
  {
    id: 'digital-growth',
    number: '02',
    title: 'Digital Growth Package',
    tagline: 'Accelerate online visibility and transform audience attention into verified leads.',
    description:
      'A holistic organic and performance marketing engine designed to scale your reach and maximize customer acquisition.',
    includedServices: [
      'Social Media Management (Meta & LinkedIn)',
      'Search Engine Optimisation (SEO & Local SEO)',
      'Targeted Paid Advertising (Google & Social Ads)',
      'High-Intent Lead Generation Campaigns',
    ],
    involvedDivisions: ['DIGIBU Digital', 'DIGIBU Creative'],
    idealFor: 'Businesses aiming to scale revenue, attract inbound inquiries, and build industry authority.',
    featured: true,
  },
  {
    id: 'corporate-branding',
    number: '03',
    title: 'Corporate Branding Package',
    tagline: 'Craft an authoritative, unforgettable brand identity across all touchpoints.',
    description:
      'Elevate your market perception with cohesive corporate design, executive presentations, and cinematic promotional media.',
    includedServices: [
      'Full Logo & Visual Identity Design',
      'Comprehensive Brand Guidelines Book',
      'Corporate Brochure & Stationery Suite',
      'Executive Pitch & Sales Presentations',
      'Branded Promotional Corporate Video',
    ],
    involvedDivisions: ['DIGIBU Creative', 'DIGIBU Media'],
    idealFor: 'Enterprises, growing mid-market companies, and organizations upgrading their corporate stature.',
    featured: false,
  },
  {
    id: 'real-estate-promotion',
    number: '04',
    title: 'Real Estate Promotion Package',
    tagline: 'High-converting digital showcase and lead generation for premium properties.',
    description:
      'Engineered specifically for developers and builders to showcase luxury projects, capture qualified buyers, and accelerate sales.',
    includedServices: [
      'High-Conversion Project Showcase Website',
      'Cinematic Property & Architectural Reels',
      'Promotional Video Production & Walkthroughs',
      'Targeted Real Estate Buyer Lead Generation',
    ],
    involvedDivisions: ['DIGIBU Media', 'DIGIBU IT', 'DIGIBU Digital'],
    idealFor: 'Real estate developers, property firms, interior architecture studios, and luxury hospitality.',
    featured: true,
  },
  {
    id: 'it-development',
    number: '05',
    title: 'IT Development Package',
    tagline: 'Robust enterprise digital infrastructure and custom software solutions.',
    description:
      'End-to-end technology implementation combining web, mobile apps, and operational software with dedicated support.',
    includedServices: [
      'Full-Stack Responsive Web Application',
      'Native / Cross-Platform Mobile Application',
      'Custom CRM & Operational Software Integration',
      'Ongoing Technical Maintenance & Support',
    ],
    involvedDivisions: ['DIGIBU IT'],
    idealFor: 'Enterprises needing reliable custom digital platforms, mobile access, and workflow automation.',
    featured: false,
  },
  {
    id: 'recruitment-support',
    number: '06',
    title: 'Recruitment Support Package',
    tagline: 'Streamlined talent acquisition to hire the right professionals faster.',
    description:
      'Strategic sourcing and thorough screening to connect your organisation with qualified IT and non-IT talent without operational overhead.',
    includedServices: [
      'Multi-Platform Job Posting & Distribution',
      'Targeted Candidate Sourcing & Headhunting',
      'Multi-Stage Resume & Capability Screening',
      'End-to-End Interview Coordination & Updates',
    ],
    involvedDivisions: ['DIGIBU Staffing'],
    idealFor: 'Fast-scaling companies, tech teams with specialized hiring needs, and corporate HR departments.',
    featured: false,
  },
  {
    id: 'content-to-marketing',
    number: '07',
    title: 'Content-to-Marketing Package',
    tagline: 'From studio production directly into high-performing advertising channels.',
    description:
      'A seamless closed-loop pipeline where premium photography and video content is produced and directly deployed into paid campaigns.',
    includedServices: [
      'Professional Photography & Video Production (DIGIBU Media)',
      'Short-Form Video Editing & Motion Graphics',
      'Strategic Social Media Publishing & Calendaring',
      'Performance Advertising & Paid Amplification (DIGIBU Digital)',
    ],
    involvedDivisions: ['DIGIBU Media', 'DIGIBU Digital'],
    idealFor: 'D2C brands, restaurants, lifestyle companies, and modern businesses wanting unified creative and marketing.',
    featured: false,
  },
];

export interface EngagementStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export const ENGAGEMENT_PROCESS: EngagementStep[] = [
  {
    number: '01',
    title: 'Initial Enquiry',
    description: 'Receive the client’s enquiry and understand the broad business requirements and overarching goals.',
    deliverable: 'Initial consultation brief & scope assessment',
  },
  {
    number: '02',
    title: 'Discovery Meeting',
    description: 'Deep-dive session to discuss business goals, target audience, current situation, expectations, and constraints.',
    deliverable: 'Requirements analysis & discovery findings',
  },
  {
    number: '03',
    title: 'Requirement Confirmation',
    description: 'Document the exact scope of services, specific deliverables, project boundaries, and agreed success measures.',
    deliverable: 'Formal scope of work & service specification',
  },
  {
    number: '04',
    title: 'Proposal & Quotation',
    description: 'Submit transparent scope, competitive pricing structure, estimated project timeline, payment terms, and validity.',
    deliverable: 'Detailed commercial proposal & project plan',
  },
  {
    number: '05',
    title: 'Approval & Onboarding',
    description: 'Obtain written sign-off, receive agreed advance payment, and gather required content, credentials, and assets.',
    deliverable: 'Service agreement & client onboarding setup',
  },
  {
    number: '06',
    title: 'Planning & Execution',
    description: 'Assign dedicated specialised division teams, establish milestone schedules, and begin proactive execution.',
    deliverable: 'Active development / production with milestone checkpoints',
  },
  {
    number: '07',
    title: 'Review & Approval',
    description: 'Share deliverable milestones, staging previews, or draft layouts to collect consolidated client feedback.',
    deliverable: 'Client review notes & fine-tuned revisions',
  },
  {
    number: '08',
    title: 'Final Delivery',
    description: 'Hand over approved deliverables in agreed production formats, deploy systems, and provide handover documentation.',
    deliverable: 'Live launch, master files & source asset delivery',
  },
  {
    number: '09',
    title: 'Support & Follow-up',
    description: 'Provide included technical support, performance maintenance, or recurring services and discuss future growth initiatives.',
    deliverable: 'Ongoing AMC, performance reviews & growth roadmaps',
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Five Specialised Divisions',
    description: 'Deep domain expertise across IT, digital growth, branding, media production and workforce recruitment.',
  },
  {
    title: 'Integrated Business Solutions',
    description: 'Eliminate the friction of managing multiple vendors by coordinating your tech, marketing, media and hiring together.',
  },
  {
    title: 'Technology-Driven Approach',
    description: 'Modern software engineering standards, data-informed marketing, and state-of-the-art creative workflows.',
  },
  {
    title: 'Creative & Professional Execution',
    description: 'Meticulous attention to design hierarchy, editorial typography, audio-visual fidelity, and brand alignment.',
  },
  {
    title: 'Coordinated Service Delivery',
    description: 'Single point of governance ensuring smooth handoffs between developers, marketers, designers and media producers.',
  },
  {
    title: 'Tailored Business Engagements',
    description: 'Flexible engagement models from scoped milestone projects to recurring monthly retainers and staffing coordination.',
  },
];
