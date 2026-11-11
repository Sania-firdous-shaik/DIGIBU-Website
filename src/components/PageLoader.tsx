import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export const PageLoader: React.FC = () => {
  const [show, setShow] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only play when the website is initially opened at the homepage.
    if (window.location.pathname !== '/') return;

    setShow(true);

    const timer = window.setTimeout(
      () => setShow(false),
      prefersReducedMotion ? 1400 : 3400
    );

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080609] pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Soft background glow */}
            <div className="absolute w-64 h-64 rounded-full bg-[#7900E8]/20 blur-[100px]" />

            {/* Logo animation stage */}
            <div
              className="relative z-10 w-[88vw] max-w-[760px]"
              style={{ aspectRatio: '1600 / 468' }}
            >
              {/* Complete original logo */}
              <motion.img
                src="/assets/digibu_logo_large.png"
                alt="DIGIBU Technologies"
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: prefersReducedMotion ? 1 : 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0.3 : 0.55,
                  delay: prefersReducedMotion ? 0 : 1.85,
                }}
              />

              {/* Separate yellow B symbol */}
              {!prefersReducedMotion && (
                <motion.img
                  src="/assets/digibu_emblem_clean.png"
                  alt=""
                  className="absolute h-auto object-contain"
                  style={{
                    width: '30.1875%',
                  }}
                  initial={{
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                    scale: 0.9,
                    opacity: 1,
                  }}
                  animate={{
                    left: '54.1875%',
                    top: '-2.1367%',
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    left: {
                      duration: 1.35,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    top: {
                      duration: 1.35,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    x: {
                      duration: 1.35,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    y: {
                      duration: 1.35,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    scale: {
                      duration: 1.35,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.35,
                      delay: 2.0,
                    },
                  }}
                />
              )}
            </div>

            {/* Brand tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0.2 : 2.15,
              }}
              className="mt-5 text-center text-xs sm:text-sm tracking-[0.25em] uppercase text-white/70"
            >
              Your Next Digital Evolution.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};