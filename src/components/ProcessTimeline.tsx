import React, { useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ENGAGEMENT_PROCESS } from '../config/packages';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="relative">
      {/* Step Numbers Selector (Desktop horizontal pill navigation) */}
      <div className="hidden lg:grid grid-cols-9 gap-2 mb-10 p-2 rounded-2xl bg-[#12091F] border border-[#7900E8]/30">
        {ENGAGEMENT_PROCESS.map((step, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveStep(idx)}
            className={`py-3 px-2 rounded-xl text-center transition-all duration-300 flex flex-col items-center gap-1 ${
              activeStep === idx
                ? 'bg-gradient-to-b from-[#5700A8] to-[#7900E8] text-white shadow-lg shadow-[#7900E8]/40 scale-105'
                : 'text-[#B8B3C0] hover:text-white hover:bg-white/5'
            }`}
          >
            <span
              className={`font-mono text-xs font-bold ${
                activeStep === idx ? 'text-[#FFD500]' : 'text-[#B8B3C0]'
              }`}
            >
              {step.number}
            </span>
            <span className="text-[11px] font-semibold truncate max-w-full px-1">
              {step.title.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Featured Active Step Detail (Large Showcase Card) */}
      <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#1A0A2E] via-[#120822] to-[#0A0512] border border-[#7900E8]/40 shadow-2xl shadow-[#7900E8]/10 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD500] to-[#E6B800] text-[#080609] font-mono font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-[#FFD500]/20">
              {ENGAGEMENT_PROCESS[activeStep].number}
            </div>
            <div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#FFD500]">
                Stage {activeStep + 1} of 9
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {ENGAGEMENT_PROCESS[activeStep].title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Previous Stage
            </button>
            <button
              type="button"
              disabled={activeStep === ENGAGEMENT_PROCESS.length - 1}
              onClick={() =>
                setActiveStep((prev) => Math.min(ENGAGEMENT_PROCESS.length - 1, prev + 1))
              }
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#FFD500] hover:bg-[#FFDE33] text-[#080609] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Next Stage
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div>
            <h4 className="text-xs uppercase font-semibold text-[#B8B3C0] tracking-wider mb-2">
              What Happens During This Stage
            </h4>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              {ENGAGEMENT_PROCESS[activeStep].description}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#18002B]/60 border border-[#7900E8]/30 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFD500] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Stage Deliverable & Output</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white">
              {ENGAGEMENT_PROCESS[activeStep].deliverable}
            </p>
          </div>
        </div>
      </div>

      {/* Complete Step-by-Step Overview (Vertical Accordion on Mobile / List on Desktop) */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white font-display mb-4">
          All 9 Workflow Milestones
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ENGAGEMENT_PROCESS.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                activeStep === idx
                  ? 'bg-[#1D0C33] border-[#FFD500]/60 ring-1 ring-[#FFD500]/40'
                  : 'bg-[#12091F]/70 hover:bg-[#180A28] border-[#7900E8]/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#FFD500]">
                  {step.number}
                </span>
                {activeStep === idx ? (
                  <CheckCircle2 className="w-4 h-4 text-[#FFD500]" />
                ) : (
                  <Clock className="w-4 h-4 text-[#B8B3C0]/40" />
                )}
              </div>
              <h5 className="text-sm font-bold text-white mb-1.5">{step.title}</h5>
              <p className="text-xs text-[#B8B3C0] line-clamp-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
