import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ lionLogoUrl, heroImageUrl }) {
  return (
    <section className="relative min-h-[65vh] md:min-h-screen flex flex-col justify-end overflow-hidden pb-8 md:pb-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImageUrl}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/90" />
      </div>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 70% 60%, hsl(270 44% 19% / 0.15), transparent 60%)',
        }}
      />



      {/* Bottom-right: Hero statement */}
      <div className="relative z-10 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 flex justify-end">
        <div className="text-right max-w-3xl">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-none"
            >
              Borderless Capital.
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-accent italic leading-none"
            >
              Elevated.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-8 text-sm md:text-base text-muted-foreground tracking-wide leading-relaxed max-w-md ml-auto"
          >
            Cross-border payments and bespoke liquidity 
            solutions for private clients and international institutions.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
