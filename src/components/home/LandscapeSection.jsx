import React from 'react';
import { motion } from 'framer-motion';

const IMAGE_URL = 'https://media.base44.com/images/public/69ecba6d166be7324ee8f206/969ffa2ad_Untitleddesign5.png';

export default function LandscapeSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
      <motion.img
        src={IMAGE_URL}
        alt="African savanna — Kazzius Capital"
        className="w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
      />
      {/* Subtle fade edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-20 pointer-events-none" />

      {/* Overlay caption */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-20"
      >
        <p className="text-xs tracking-widest uppercase text-foreground/50 font-body">
          Boundless. Sovereign. Enduring.
        </p>
      </motion.div>
    </section>
  );
}
