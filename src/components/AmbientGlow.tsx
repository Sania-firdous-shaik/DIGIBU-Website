import React from 'react';

export const AmbientGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Center Purple Glow */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] rounded-full bg-gradient-to-b from-[#5700A8]/20 via-[#7900E8]/15 to-transparent blur-[120px]" />

      {/* Subtle Right Yellow Accent Glow */}
      <div className="absolute top-[35%] -right-[10%] w-[35vw] h-[35vw] rounded-full bg-[#FFD500]/5 blur-[140px]" />

      {/* Bottom Left Deep Purple Atmospheric Field */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#18002B]/40 blur-[130px]" />

      {/* Micro Grid Overlay for High-Tech Agency Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7900E808_1px,transparent_1px),linear-gradient(to_bottom,#7900E808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};
