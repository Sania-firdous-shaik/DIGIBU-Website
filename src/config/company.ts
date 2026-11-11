export interface CompanyConfig {
  name: string;
  tagline: string;
  shortTagline: string;
  positioning: string;
  description: string;
  objective: string;
  pillars: string[];
  contact: {
    email: string;
    isEmailConfigured: boolean;
    phone: string;
    isPhoneConfigured: boolean;
    address: string;
    hours: string;
    statusNote: string;
  };
  socials: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
  };
  copyrightYear: number;
}

const envEmail = import.meta.env.VITE_CONTACT_EMAIL as string | undefined;
const envPhone = import.meta.env.VITE_CONTACT_PHONE as string | undefined;
const envAddress = import.meta.env.VITE_CONTACT_ADDRESS as string | undefined;

export const COMPANY: CompanyConfig = {
  name: 'DIGIBU Technologies Private Limited',
  tagline: 'Your Next Digital Evolution.',
  shortTagline: 'Technology • Digital Growth • Creative • Media • Staffing',
  positioning: 'An integrated portfolio of technology, marketing, creative, media and staffing solutions.',
  description:
    'DIGIBU Technologies Private Limited is a multi-service technology and business solutions company committed to helping businesses grow through innovation, technology, creativity, digital marketing, media production and talent solutions.',
  objective:
    'To provide reliable, innovative and integrated business services under one brand, helping organisations establish their presence, improve operations and achieve sustainable growth.',
  pillars: [
    'Technology Solutions',
    'Digital Growth',
    'Creative & Branding',
    'Media Production',
    'Staffing & Workforce',
  ],
  contact: {
    email: envEmail || 'Submit via Project Enquiry Form (Email Configured on Request)',
    isEmailConfigured: Boolean(envEmail),
    phone: envPhone || 'Direct Line Provided upon Verified Project Consultation',
    isPhoneConfigured: Boolean(envPhone),
    address:
      envAddress ||
      'DIGIBU Technologies Private Limited, Corporate Entity Registered in India',
    hours: 'Monday – Friday, 9:00 AM – 6:00 PM IST',
    statusNote:
      'Official direct telephone, corporate email, and registered office details are provided upon verified project consultation or direct enquiry.',
  },
  socials: {
    linkedin: undefined,
    instagram: undefined,
    twitter: undefined,
  },
  copyrightYear: 2026,
};
