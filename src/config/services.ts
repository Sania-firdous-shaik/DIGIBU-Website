export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface Division {
  id: string;
  number: string;
  name: string;
  shortName: string;
  slug: string;
  route: string;
  headline: string;
  subheadline: string;
  purpose: string;
  coreFocus: string;
  accentColor: string;
  categories: ServiceCategory[];
  deliveryProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  typicalClients: string[];
  revenueModels: string[];
  importantNote?: string;
}

export const DIVISIONS: Division[] = [
  {
    id: 'it',
    number: '01',
    name: 'DIGIBU IT',
    shortName: 'IT & Software',
    slug: 'it',
    route: '/services/it',
    headline: 'Technology That Moves Businesses Forward.',
    subheadline: 'Software, Website and Application Development',
    purpose:
      'Provide technology solutions that help businesses establish their digital presence, automate operations and improve productivity.',
    coreFocus: 'Websites, software, mobile applications and IT consulting.',
    accentColor: '#FFD500',
    categories: [
      {
        title: 'Website Design and Development',
        items: [
          'Corporate and business websites',
          'E-commerce websites and online stores',
          'Portfolio and personal branding websites',
          'High-conversion landing pages',
          'Website redesign and modernization',
          'WordPress and modern CMS development',
          'Website maintenance and technical support',
          'Domain and web-hosting assistance',
        ],
      },
      {
        title: 'Software Development',
        items: [
          'Custom business software solutions',
          'CRM (Customer Relationship Management) platforms',
          'ERP (Enterprise Resource Planning) solutions',
          'Inventory and stock management systems',
          'Billing, invoicing and financial software',
          'Employee and HR management platforms',
          'Attendance and automated payroll software',
          'Project and task management systems',
        ],
      },
      {
        title: 'Mobile Application Development',
        items: [
          'Native Android mobile applications',
          'Native iOS mobile applications',
          'Cross-platform applications (React Native / Flutter)',
          'E-commerce and mobile shopping applications',
          'Business operations and management applications',
          'Appointment and booking applications',
          'Customer service and helpdesk support applications',
        ],
      },
      {
        title: 'UI/UX Design',
        items: [
          'Website and mobile application interface design',
          'Dashboard, analytics and admin panel design',
          'Wireframes and clickable interactive prototypes',
          'User experience research and usability audits',
          'User journeys, workflow design and usability improvements',
        ],
      },
      {
        title: 'IT Consulting and Technical Support',
        items: [
          'IT infrastructure and architecture consulting',
          'Digital transformation consulting',
          'Business process automation',
          'API integrations and third-party software connections',
          'Database management and data architecture',
          'Software troubleshooting and performance optimization',
          'Cloud deployment (AWS, GCP, Azure) and maintenance',
          'Annual Technical Maintenance (AMC)',
        ],
      },
    ],
    deliveryProcess: [
      {
        step: '01',
        title: 'Discovery & Requirement Discussion',
        description: 'Understand the business, users, objectives and required technical features.',
      },
      {
        step: '02',
        title: 'Scope & Proposal',
        description: 'Define deliverables, timeline, responsibilities, technology approach and charges.',
      },
      {
        step: '03',
        title: 'Planning & Design',
        description: 'Prepare the sitemap, workflows, wireframes or system architecture.',
      },
      {
        step: '04',
        title: 'Development',
        description: 'Build the agreed website, software or application in planned stages.',
      },
      {
        step: '05',
        title: 'Testing & Client Review',
        description: 'Check functionality, usability, compatibility and resolve agreed issues.',
      },
      {
        step: '06',
        title: 'Launch & Handover',
        description: 'Deploy the solution and provide access, documentation and basic guidance.',
      },
      {
        step: '07',
        title: 'Ongoing Support',
        description: 'Provide maintenance or an annual maintenance contract (AMC) where agreed.',
      },
    ],
    typicalClients: [
      'Startups & Emerging Tech Companies',
      'Small and Medium Businesses (SMBs)',
      'Educational Institutions & EdTech',
      'Retail & E-commerce Businesses',
      'Real Estate Companies',
      'Established Corporate Organisations',
    ],
    revenueModels: [
      'Website and software development projects',
      'Mobile application development projects',
      'Monthly maintenance packages',
      'Annual maintenance contracts (AMC)',
      'IT consulting and advisory fees',
    ],
  },
  {
    id: 'digital',
    number: '02',
    name: 'DIGIBU Digital',
    shortName: 'Digital Growth',
    slug: 'digital',
    route: '/services/digital',
    headline: 'Turn Digital Presence Into Business Growth.',
    subheadline: 'Digital Marketing, SEO and Online Business Growth',
    purpose:
      'Help businesses increase online visibility, attract potential customers, generate enquiries and improve sales through digital marketing.',
    coreFocus: 'Digital marketing, SEO, social media, advertising and lead generation.',
    accentColor: '#7900E8',
    categories: [
      {
        title: 'Social Media Management',
        items: [
          'Instagram, Facebook and LinkedIn business account management',
          'Social media strategy and monthly content calendar preparation',
          'Post scheduling and publishing workflows',
          'Caption and hashtag research tailored to audience',
          'Audience engagement and community management',
          'Monthly performance and growth reports',
        ],
      },
      {
        title: 'Search Engine Optimisation (SEO)',
        items: [
          'Comprehensive website SEO audits and keyword research',
          'On-page and off-page SEO optimization',
          'Technical SEO recommendations and schema markup',
          'Local SEO and Google Business Profile management',
          'Competitor SEO analysis',
          'Website organic traffic and keyword performance tracking',
        ],
      },
      {
        title: 'Online Advertising & Paid Campaigns',
        items: [
          'Google Search Ads, Display Ads and YouTube advertising',
          'Facebook, Instagram and Meta advertising campaigns',
          'LinkedIn B2B targeted advertising',
          'Lead generation, remarketing and retargeting campaigns',
          'Advertising performance monitoring, budget optimization and ROI tracking',
        ],
      },
      {
        title: 'Lead Generation',
        items: [
          'Potential customer research and target audience identification',
          'B2B and B2C lead generation and contact research',
          'Campaign planning, landing page and enquiry form planning',
          'CRM integration, lead qualification and pipeline tracking',
        ],
      },
      {
        title: 'Content Marketing',
        items: [
          'Website content planning and strategic editorial calendars',
          'SEO blog writing and thought-leadership articles',
          'Social media content, promotional captions and copywriting',
          'Product and service descriptions; email newsletter content',
          'Business promotional campaigns and content assets',
        ],
      },
      {
        title: 'WhatsApp & Email Marketing',
        items: [
          'WhatsApp Business profile setup and automated customer enquiry workflows',
          'WhatsApp broadcast campaign planning and execution',
          'Email marketing campaigns and template design',
          'Newsletter management and automated follow-up sequences',
          'Customer communication templates and campaign performance reports',
        ],
      },
    ],
    deliveryProcess: [
      {
        step: '01',
        title: 'Business & Audience Review',
        description: 'Understand the offer, target customers, locations and business goals.',
      },
      {
        step: '02',
        title: 'Marketing Audit & Strategy',
        description: 'Review existing channels, competitors and growth opportunities.',
      },
      {
        step: '03',
        title: 'Campaign Plan',
        description: 'Agree content themes, platforms, keywords, advertising plan and schedule.',
      },
      {
        step: '04',
        title: 'Content & Campaign Setup',
        description: 'Prepare posts, copy, tracking, landing pages and campaign settings.',
      },
      {
        step: '05',
        title: 'Publishing & Execution',
        description: 'Publish content and launch approved marketing campaigns.',
      },
      {
        step: '06',
        title: 'Monitoring & Optimisation',
        description: 'Review engagement, traffic, enquiries and campaign performance.',
      },
      {
        step: '07',
        title: 'Monthly Reporting & Next Steps',
        description: 'Share analytical results and recommend performance improvements.',
      },
    ],
    typicalClients: [
      'Real Estate Companies & Developers',
      'Interior Design & Architecture Firms',
      'Restaurants & Hospitality Brands',
      'Retail Businesses & E-commerce',
      'Educational Institutions',
      'Healthcare Providers & Clinics',
      'Startups & Professional Service Providers',
    ],
    revenueModels: [
      'Monthly digital marketing packages',
      'SEO retainers',
      'Advertising management fees',
      'Lead generation packages',
      'Individual marketing campaigns',
    ],
    importantNote:
      'Advertising platform budgets (Meta, Google, LinkedIn) are separate from DIGIBU’s professional service charges. Marketing communications strictly follow applicable consent, privacy and opt-out requirements.',
  },
  {
    id: 'creative',
    number: '03',
    name: 'DIGIBU Creative',
    shortName: 'Creative & Branding',
    slug: 'creative',
    route: '/services/creative',
    headline: 'Make Your Brand Impossible to Ignore.',
    subheadline: 'Branding, Graphic Design and Visual Communication',
    purpose:
      'Create professional brand identities and visual materials that help businesses build recognition, communicate effectively and establish a strong market presence.',
    coreFocus: 'Brand identity, graphic design and business presentations.',
    accentColor: '#FFD500',
    categories: [
      {
        title: 'Brand Identity and Logo Design',
        items: [
          'Business logo design from scratch',
          'Logo redesign and brand modernization',
          'Curated brand colour palette and typography selection',
          'Brand identity development, positioning and visual direction',
          'Comprehensive corporate identity design and brand guidelines',
        ],
      },
      {
        title: 'Corporate Graphic Design',
        items: [
          'Business cards, letterheads and envelopes',
          'Company profiles and corporate brochures',
          'Business proposals and pitch documents',
          'Product catalogues and spec sheets',
          'Annual report layouts and investor documentation',
          'Corporate stationery and branded collateral',
        ],
      },
      {
        title: 'Social Media Graphic Design',
        items: [
          'Instagram posts, stories and swipeable carousel designs',
          'Facebook promotional creatives and banners',
          'LinkedIn thought-leadership post designs',
          'YouTube thumbnails and video covers',
          'Festival, milestone and event creatives',
          'Custom reusable social media design templates',
        ],
      },
      {
        title: 'Marketing & Advertising Design',
        items: [
          'Flyers, pamphlets, posters and promotional banners',
          'Print and digital product advertising creatives',
          'Event invitations, exhibition and expo stall graphics',
          'Outdoor advertising artwork (billboards, hoardings)',
          'Digital campaign creatives and marketing presentation materials',
        ],
      },
      {
        title: 'Packaging & Product Design',
        items: [
          'Product packaging concepts and 3D structural layouts',
          'Product labels, tamper-evident seals and stickers',
          'Photorealistic product mockups',
          'Merchandise artwork and branding for product collections',
        ],
      },
      {
        title: 'Presentation & Digital Design',
        items: [
          'Corporate PowerPoint and Keynote presentations',
          'Business pitch decks and startup investor decks',
          'Investor, sales and executive presentations',
          'Company introduction presentations',
          'Website, mobile application screen and dashboard visual assets',
        ],
      },
    ],
    deliveryProcess: [
      {
        step: '01',
        title: 'Brief Collection',
        description: 'Understand the business, audience, purpose, format and required deliverables.',
      },
      {
        step: '02',
        title: 'Creative Direction',
        description: 'Agree on the visual style, moodboards, references, colours and design approach.',
      },
      {
        step: '03',
        title: 'Initial Concepts',
        description: 'Prepare the agreed number of concepts or draft layouts.',
      },
      {
        step: '04',
        title: 'Client Review',
        description: 'Collect consolidated feedback and confirm revisions within the agreed scope.',
      },
      {
        step: '05',
        title: 'Final Artwork',
        description: 'Complete approved designs and prepare print or digital-ready files.',
      },
      {
        step: '06',
        title: 'Handover',
        description: 'Deliver agreed high-resolution file formats and master brand assets.',
      },
    ],
    typicalClients: [
      'Startups & Emerging Ventures',
      'Entrepreneurs & Founders',
      'Manufacturers & Industrial Brands',
      'Retail Businesses & D2C Brands',
      'Real Estate Companies',
      'Interior Designers & Architects',
      'Restaurants & Cafes',
      'Corporate Organisations',
    ],
    revenueModels: [
      'Logo design packages',
      'Complete branding packages',
      'Monthly graphic design retainers',
      'Presentation design projects',
      'Corporate profile design and marketing creative assignments',
    ],
  },
  {
    id: 'media',
    number: '04',
    name: 'DIGIBU Media',
    shortName: 'Media Production',
    slug: 'media',
    route: '/services/media',
    headline: 'Stories That Deserve to Be Seen.',
    subheadline: 'Photography, Videography, Podcast Production and Video Content',
    purpose:
      'Create engaging visual and audio content that helps businesses promote their products, services, projects and brand identity.',
    coreFocus: 'Photography, videography, podcast production, video shooting and editing.',
    accentColor: '#7900E8',
    categories: [
      {
        title: 'Podcast Production',
        items: [
          'Podcast studio setup and multi-track audio recording',
          'Audio and multi-camera video podcast shooting',
          'Professional podcast editing, audio leveling and mixing',
          'Full-length YouTube podcast episodes',
          'Viral podcast reels, shorts and teaser clips',
        ],
      },
      {
        title: 'Professional Photography',
        items: [
          'High-end product photography for e-commerce and catalog',
          'Corporate headshots and team photography',
          'Corporate events and summit photography',
          'Food, menu and restaurant photography',
          'Architecture, villa and commercial interior photography',
          'Personal and executive portfolio photography',
        ],
      },
      {
        title: 'Videography & Video Shooting',
        items: [
          'Corporate brand films and culture videos',
          'Event, conference and summit videography',
          'Real estate, architectural and interior videography',
          'Promotional video shoots and social content shoots',
          'Executive interviews, customer testimonials and case studies',
        ],
      },
      {
        title: 'Business & Promotional Video Production',
        items: [
          'Instagram Reels and YouTube Shorts production',
          'High-impact business promotional videos and brand advertisements',
          'Product demonstrations, feature overviews and unboxings',
          'Service promotion, brand awareness and e-commerce videos',
          'Company culture, employee introductions and milestone celebration films',
        ],
      },
      {
        title: 'Real Estate & Project Media',
        items: [
          'Interior design project walkthroughs and showcase videos',
          'Luxury property, villa and apartment cinematic walkthroughs',
          'Construction progress documentation and site visit videos',
          'Before-and-after interior transformations and commercial space promotions',
        ],
      },
      {
        title: 'Post-Production & Editing',
        items: [
          'Professional corporate, promotional, and YouTube video editing',
          'Short-form vertical video editing, resizing and multi-platform formatting',
          'Cinematic colour correction, grading and look development',
          'Audio cleaning, noise removal and sound design enhancement',
          'Dynamic subtitles, captions, motion graphics and visual effects (VFX)',
          'Animated logos, intro/outro animations, explainers and 2D motion design',
        ],
      },
      {
        title: 'Production Support',
        items: [
          'Video shoot planning, concept, script and storyboard preparation',
          'Cinema camera, lighting and audio gear arrangements',
          'Voice-over coordination and multilingual localization',
          'On-site technical video production and photography direction',
        ],
      },
    ],
    deliveryProcess: [
      {
        step: '01',
        title: 'Creative Brief',
        description: 'Identify the purpose, audience, platforms, locations and content requirements.',
      },
      {
        step: '02',
        title: 'Pre-Production',
        description: 'Plan the concept, script, storyboard, shot list, schedule and production arrangements.',
      },
      {
        step: '03',
        title: 'Shoot or Recording',
        description: 'Carry out the agreed photography, cinematic video shoot or podcast recording.',
      },
      {
        step: '04',
        title: 'Editing & Post-Production',
        description: 'Edit footage/audio, apply colour and sound work, add graphics and captions.',
      },
      {
        step: '05',
        title: 'Review & Revisions',
        description: 'Share a preview and complete revisions within the agreed scope.',
      },
      {
        step: '06',
        title: 'Final Delivery',
        description: 'Export approved files in the agreed formats and required aspect ratios.',
      },
      {
        step: '07',
        title: 'Content Repurposing',
        description: 'Where included, prepare shorter clips or platform-specific micro-content.',
      },
    ],
    typicalClients: [
      'Corporate Companies & Enterprises',
      'High-growth Startups',
      'Real Estate Developers & Brokerages',
      'Interior Designers & Architects',
      'Construction Companies',
      'Restaurants & F&B Brands',
      'Retail Brands & Consumer Goods',
      'Educational Institutions',
      'Content Creators & Thought Leaders',
    ],
    revenueModels: [
      'Per-video editing charges',
      'Monthly short-form reels packages',
      'Podcast studio and episode packages',
      'Corporate video production projects',
      'Professional photography assignments',
      'Promotional campaign packages and complete video shoots',
    ],
  },
  {
    id: 'staffing',
    number: '05',
    name: 'DIGIBU Staffing',
    shortName: 'Staffing & Talent',
    slug: 'staffing',
    route: '/services/staffing',
    headline: 'Connecting Talent With Opportunity.',
    subheadline: 'Recruitment, Talent Sourcing and Workforce Solutions',
    purpose:
      'Connect businesses with suitable candidates through recruitment support, talent acquisition and workforce management solutions.',
    coreFocus: 'Recruitment, talent sourcing and workforce solutions.',
    accentColor: '#FFD500',
    categories: [
      {
        title: 'IT Recruitment',
        items: [
          'Software developers (Frontend, Backend, Full-Stack)',
          'UI/UX designers and product designers',
          'Mobile application developers (iOS, Android, Cross-platform)',
          'Data analysts, BI specialists and data engineers',
          'Cloud architects and DevOps professionals',
          'Cybersecurity specialists, IT support and system administrators',
        ],
      },
      {
        title: 'Non-IT Recruitment',
        items: [
          'Sales, business development and account executives',
          'Human resources (HR generalists, recruiters, HRBP)',
          'Finance, accounting, auditing and billing specialists',
          'Customer support and client success representatives',
          'Operations, administration and office management',
          'Data entry, back-office, receptionist and front-office roles',
        ],
      },
      {
        title: 'Talent Sourcing & Candidate Screening',
        items: [
          'Job requirement analysis and multi-platform candidate sourcing',
          'Rigorous resume screening and initial candidate interviews',
          'Technical interview and skill assessment coordination',
          'Salary expectation, notice period and culture-fit screening',
          'Interview scheduling, candidate communication and pipeline management',
          'Curated talent database management',
        ],
      },
      {
        title: 'Staffing Solutions',
        items: [
          'Permanent employee recruitment (lateral and senior hiring)',
          'Temporary and contract-based staffing coordination',
          'Remote workforce recruitment and dedicated offshore IT resources',
          'Bulk hiring and campus drive recruitment support',
          'Executive search and specialist niche hiring',
        ],
      },
      {
        title: 'Recruitment Process Outsourcing (RPO)',
        items: [
          'End-to-end recruitment support and strategic recruitment planning',
          'Job description (JD) preparation and talent pipeline management',
          'Comprehensive interview coordination and recruitment progress reporting',
          'Hiring process improvement and candidate experience enhancement',
        ],
      },
      {
        title: 'HR & Workforce Support',
        items: [
          'Employee onboarding coordination and recruitment documentation assistance',
          'Candidate database maintenance and workforce planning support',
          'Employee skill mapping and recruitment performance reports',
          'Employer branding support and recruitment process consulting',
        ],
      },
    ],
    deliveryProcess: [
      {
        step: '01',
        title: 'Hiring Discussion',
        description: 'Understand the role, skills, experience, location, salary range and hiring timeline.',
      },
      {
        step: '02',
        title: 'Recruitment Plan',
        description: 'Confirm the sourcing strategy, screening criteria and service arrangement.',
      },
      {
        step: '03',
        title: 'Candidate Sourcing',
        description: 'Identify potential candidates through suitable recruitment channels.',
      },
      {
        step: '04',
        title: 'Screening & Shortlisting',
        description: 'Review resumes and conduct agreed initial candidate screening.',
      },
      {
        step: '05',
        title: 'Interview Coordination',
        description: 'Arrange client interviews and coordinate candidate communication.',
      },
      {
        step: '06',
        title: 'Selection & Offer Coordination',
        description: 'Support the agreed selection and offer process.',
      },
      {
        step: '07',
        title: 'Closure & Reporting',
        description: 'Confirm the hiring outcome and provide agreed recruitment updates.',
      },
    ],
    typicalClients: [
      'Technology & Software Product Companies',
      'High-growth Tech Startups',
      'Manufacturing & Engineering Companies',
      'Corporate Enterprises & Conglomerates',
      'BPOs & Call Centers',
      'Educational Institutions & EdTech',
      'Fast-growing SMBs',
    ],
    revenueModels: [
      'Per-candidate placement fees',
      'Recruitment service agreements',
      'Monthly recruitment retainers',
      'RPO contracts',
      'Staffing coordination fees',
    ],
    importantNote:
      'Recruitment and candidate placement are different from directly employing and supplying contract workers. DIGIBU provides recruitment support, talent sourcing and hiring coordination in full compliance with applicable Indian labour regulations.',
  },
];
