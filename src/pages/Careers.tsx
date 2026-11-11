
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Clapperboard,
  Video,
  Mail,
  CheckCircle2,
  Sparkles,
  Users,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

const opportunities = [
  {
    title: 'Content Creator Intern',
    category: 'Creative',
    description:
      'Create engaging digital content, develop creative ideas and help brands connect with their audiences.',
    icon: Sparkles,
    skills: ['Creative thinking', 'Content creation', 'Social media'],
  },
  {
    title: 'Video Editor Intern',
    category: 'Media',
    description:
      'Turn raw footage into engaging visual stories for social media, campaigns and digital platforms.',
    icon: Clapperboard,
    skills: ['Basic CapCut editing', 'Visual storytelling', 'Creativity'],
  },
  {
    title: 'Videographer Intern',
    category: 'Media',
    description:
      'Capture high-quality photographs and videos for brand campaigns, creative projects and digital content.',
    icon: Camera,
    skills: ['Camera or iPhone', 'Creative eye', 'Attention to detail'],
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: 'Learn by Doing',
    description: 'Gain practical experience by contributing to real creative projects.',
  },
  {
    icon: Users,
    title: 'Collaborate',
    description: 'Work alongside a team across technology, media and creative disciplines.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Skills',
    description: 'Develop your abilities, build confidence and strengthen your portfolio.',
  },
];

export const Careers: React.FC = () => {
  const applyLink = (role: string) =>
    `mailto:careers@digibu.in?subject=${encodeURIComponent(
      `Application for ${role} - DIGIBU`
    )}`;

  return (
    <div className="min-h-screen bg-[#080609] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-[#7900E8]/15 blur-[130px]" />
          <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[#FFD500]/5 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD500]/30 bg-[#FFD500]/5 text-[#FFD500] text-xs font-semibold tracking-[0.18em] uppercase">
              <BriefcaseBusiness className="w-4 h-4" />
              Careers at DIGIBU
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
              Your Next Chapter
              <br />
              <span className="text-[#FFD500]">Starts Here.</span>
            </h1>

            <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg text-[#B8B3C0] leading-relaxed">
              Bring your ideas, creativity and ambition to DIGIBU.
              Explore opportunities to learn, create and grow with us.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#openings"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#FFD500] text-black font-bold hover:bg-yellow-300 transition-colors"
              >
                Explore Opportunities
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:careers@digibu.in"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 text-white font-semibold hover:border-[#FFD500]/60 hover:text-[#FFD500] transition-colors"
              >
                Contact Recruitment
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 bg-[#0D0A10] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-[#FFD500] text-xs font-bold tracking-[0.2em] uppercase">
              Opportunities
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
              Find Your <span className="text-[#FFD500]">Place.</span>
            </h2>
            <p className="mt-5 text-[#B8B3C0] leading-relaxed">
              Explore the opportunities featured in our recruitment announcements
              and take the first step towards working with DIGIBU.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {opportunities.map((job, index) => {
              const Icon = job.icon;

              return (
                <motion.article
                  key={job.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group flex flex-col p-7 rounded-2xl bg-[#15111A] border border-white/10 hover:border-[#FFD500]/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#FFD500]/10 border border-[#FFD500]/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#FFD500]" />
                    </div>

                    <span className="text-xs font-semibold tracking-wide uppercase text-[#FFD500] bg-[#FFD500]/10 px-3 py-1.5 rounded-full">
                      Internship
                    </span>
                  </div>

                  <p className="mt-7 text-xs uppercase tracking-[0.16em] text-[#B8B3C0]">
                    {job.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold group-hover:text-[#FFD500] transition-colors">
                    {job.title}
                  </h3>

                  <p className="mt-4 text-sm text-[#B8B3C0] leading-relaxed flex-grow">
                    {job.description}
                  </p>

                  <div className="mt-7 pt-6 border-t border-white/10">
                    <p className="text-xs font-semibold text-white mb-4">
                      Skills and qualities
                    </p>

                    <div className="space-y-3">
                      {job.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-sm text-[#B8B3C0]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FFD500] shrink-0" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={applyLink(job.title)}
                    className="mt-7 flex items-center justify-between w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm font-semibold hover:bg-[#FFD500] hover:text-black hover:border-[#FFD500] transition-colors"
                  >
                    Apply for this role
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-[#8F8997]">
            Please contact our recruitment team to confirm current vacancy
            availability before applying.
          </p>
        </div>
      </section>

      {/* Why DIGIBU */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#FFD500] text-xs font-bold tracking-[0.2em] uppercase">
              Life at DIGIBU
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
              More Than Just a <span className="text-[#FFD500]">Role.</span>
            </h2>
            <p className="mt-5 text-[#B8B3C0] leading-relaxed">
              An opportunity to explore ideas, contribute to meaningful work
              and develop your professional skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl border border-white/10 bg-[#120D17]"
                >
                  <Icon className="w-8 h-8 text-[#FFD500]" />
                  <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-[#B8B3C0] leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#FFD500]/25 bg-[#151019] px-7 py-16 sm:px-14 text-center">
            <div className="absolute w-72 h-72 rounded-full bg-[#7900E8]/20 blur-[100px] -top-40 left-1/2 -translate-x-1/2" />

            <div className="relative">
              <Video className="w-10 h-10 text-[#FFD500] mx-auto" />

              <h2 className="mt-6 text-3xl sm:text-5xl font-bold">
                Have Something <span className="text-[#FFD500]">to Offer?</span>
              </h2>

              <p className="mt-5 max-w-xl mx-auto text-[#B8B3C0] leading-relaxed">
                Share your resume and portfolio with us. We'd love to hear
                about your interests and what you can bring to the team.
              </p>

              <a
                href="mailto:careers@digibu.in?subject=Career%20Enquiry%20-%20DIGIBU"
                className="mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#FFD500] text-black font-bold hover:bg-yellow-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                careers@digibu.in
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
