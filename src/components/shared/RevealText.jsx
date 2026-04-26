import React from 'react';
import { motion } from 'framer-motion';

export default function RevealText({ children, className = '', delay = 0, as = 'div' }) {
  const Tag = motion[as] || motion.div;

  return (
    <div className="overflow-hidden">
      <Tag
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: '-50px' }}
        className={className}
      >
        {children}
      </Tag>
    </div>
  );
}
