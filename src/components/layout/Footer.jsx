import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="hairline" />
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-heading text-lg md:text-xl text-muted-foreground tracking-wide italic leading-relaxed">
            Access by invitation only.<br />
            Kazzius Capital operates with absolute discretion.
          </p>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-xs tracking-widest uppercase text-muted-foreground/50">
            <span>© {new Date().getFullYear()} Kazzius Capital</span>
            <span className="hidden md:inline">·</span>
            <span>All Rights Reserved</span>
            <span className="hidden md:inline">·</span>
            <span>Confidential</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
