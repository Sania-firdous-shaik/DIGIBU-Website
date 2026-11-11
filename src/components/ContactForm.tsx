import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MessageSquare,
  Building,
  User,
  Sparkles,
} from 'lucide-react';
import { Button } from './Button';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  honeypot: string; // Spam protection
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  general?: string;
}

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'DIGIBU IT',
    message: '',
    preferredContact: 'email',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [responseDetails, setResponseDetails] = useState<{
    referenceId?: string;
    message?: string;
  }>({});

  // Auto-populate service or package if present in query parameters
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const packageParam = searchParams.get('package');

    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
    if (packageParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? prev.message
          : `Interested in discussing the ${packageParam}. Please provide scope details and quotation.`,
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneRegex = /^[0-9+()\-.\s]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number (at least 7 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service or division.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a project description (at least 10 characters).';
    }

    // Bot honeypot check
    if (formData.honeypot) {
      newErrors.general = 'Spam submission detected.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          preferredContact: formData.preferredContact,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionSuccess(true);
        setResponseDetails({
          referenceId: data.referenceId,
          message: data.message,
        });
      } else {
        setErrors({
          general: data.message || 'Submission failed. Please verify your entries.',
          ...data.errors,
        });
      }
    } catch (err) {
      setErrors({
        general:
          'Unable to connect to the server at this time. Please check your connection or contact our team directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: 'DIGIBU IT',
      message: '',
      preferredContact: 'email',
      honeypot: '',
    });
    setSubmissionSuccess(false);
    setResponseDetails({});
  };

  if (submissionSuccess) {
    return (
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#1C0A33] via-[#120822] to-[#0A0512] border border-[#FFD500]/50 shadow-2xl text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#FFD500]/20 text-[#FFD500] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs uppercase font-bold tracking-wider text-[#FFD500] px-3 py-1 rounded-full bg-[#18002B] border border-[#7900E8]/40 mb-3 inline-block">
          Enquiry Transmitted Successfully
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-2 mb-4">
          Thank You for Connecting with DIGIBU
        </h3>

        <p className="text-base text-[#B8B3C0] max-w-lg mx-auto mb-6 leading-relaxed">
          {responseDetails.message}
        </p>

        {responseDetails.referenceId && (
          <div className="p-4 rounded-xl bg-black/40 border border-[#7900E8]/40 max-w-sm mx-auto mb-8 font-mono text-sm text-[#FFD500]">
            <span className="text-xs text-[#B8B3C0] block mb-1">Enquiry Reference ID:</span>
            {responseDetails.referenceId}
          </div>
        )}

        <div className="flex justify-center">
          <Button variant="secondary" size="md" onClick={resetForm}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#160B26] to-[#0D0618] border border-[#7900E8]/30 shadow-2xl relative"
    >
      {/* Honeypot field for spam prevention */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_hp"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* General Error Banner */}
      {errors.general && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3C0] mb-2">
            Full Name <span className="text-[#FFD500]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#B8B3C0]/60 absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Kumar"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full bg-[#120822] border rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#B8B3C0]/40 focus:outline-none transition-all ${
                errors.fullName
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                  : 'border-[#7900E8]/30 focus:border-[#FFD500] focus:ring-1 focus:ring-[#FFD500]'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3C0] mb-2">
            Work Email Address <span className="text-[#FFD500]">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#B8B3C0]/60 absolute left-3.5 top-3.5" />
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full bg-[#120822] border rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#B8B3C0]/40 focus:outline-none transition-all ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                  : 'border-[#7900E8]/30 focus:border-[#FFD500] focus:ring-1 focus:ring-[#FFD500]'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3C0] mb-2">
            Phone / Mobile Number <span className="text-[#FFD500]">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#B8B3C0]/60 absolute left-3.5 top-3.5" />
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full bg-[#120822] border rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#B8B3C0]/40 focus:outline-none transition-all ${
                errors.phone
                  ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                  : 'border-[#7900E8]/30 focus:border-[#FFD500] focus:ring-1 focus:ring-[#FFD500]'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3C0] mb-2">
            Company / Organisation <span className="text-[#B8B3C0]/50 lowercase">(optional)</span>
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-[#B8B3C0]/60 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="e.g. Acme Innovations"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-[#120822] border border-[#7900E8]/30 focus:border-[#FFD500] focus:ring-1 focus:ring-[#FFD500] rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-[#B8B3C0]/40 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Service Dropdown */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3C0] mb-2">
          Service Interested In <span className="text-[#FFD500]">*</span>
        </label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={`w-full bg-[#120822] border rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all cursor-pointer ${
            errors.service
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-[#7900E8]/30 focus:border-[#FFD500] focus:ring-1 focus:ring-[#FFD500]'
          }`}
        >
          <option value="DIGIBU IT">01 — DIGIBU IT (Websites, Software & Mobile Apps)</option>
          <option value="DIGIBU Digital">02 — DIGIBU Digital (SEO, Paid Ads & Growth)</option>
          <option value="DIGIBU Creative">03 — DIGIBU Creative (Brand Identity & Design)</option>
          <option value="DIGIBU Media">04 — DIGIBU Media (Photography, Video & Podcasts)</option>
          <option value="DIGIBU Staffing">05 — DIGIBU Staffing (Recruitment & Workforce)</option>
          <option value="Integrated Solutions">Integrated Business Packages (Multi-Division)</option>
          <option value="Other">Other / General Consultation</option>
        </select>
        {errors.service && (
          <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3C0] mb-2">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'email', label: 'Email', icon: <Mail className="w-3.5 h-3.5" /> },
            { id: 'phone', label: 'Phone Call', icon: <Phone className="w-3.5 h-3.5" /> },
            { id: 'whatsapp', label: 'WhatsApp', icon: <MessageSquare className="w-3.5 h-3.5" /> },
          ].map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  preferredContact: method.id as 'email' | 'phone' | 'whatsapp',
                })
              }
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all border ${
                formData.preferredContact === method.id
                  ? 'bg-[#18002B] border-[#FFD500] text-[#FFD500] shadow-sm'
                  : 'bg-[#120822] border-[#7900E8]/20 text-[#B8B3C0] hover:text-white hover:border-[#7900E8]/40'
              }`}
            >
              {method.icon}
              <span>{method.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Project Description / Message */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3C0] mb-2">
          Project Requirements / Details <span className="text-[#FFD500]">*</span>
        </label>
        <textarea
          rows={4}
          required
          placeholder="Briefly describe your business objectives, timeline, required deliverables, and any specific questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full bg-[#120822] border rounded-xl p-3.5 text-sm text-white placeholder-[#B8B3C0]/40 focus:outline-none transition-all ${
            errors.message
              ? 'border-red-500 ring-1 ring-red-500'
              : 'border-[#7900E8]/30 focus:border-[#FFD500] focus:ring-1 focus:ring-[#FFD500]'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        showArrow={!isSubmitting}
        className="w-full"
      >
        Transmit Project Enquiry
      </Button>

      <p className="mt-4 text-center text-xs text-[#B8B3C0]/60">
        Your enquiry is securely recorded and delivered directly to the DIGIBU coordination team.
      </p>
    </form>
  );
};
