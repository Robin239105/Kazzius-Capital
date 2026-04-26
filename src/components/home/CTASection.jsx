import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../shared/FadeIn';

import ctaBgImg from '../../assets/557692cc-6fe0-429e-a054-eedd4a456ceb.jpg';

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={ctaBgImg}
          alt=""
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
            Begin the conversation.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            For qualified institutions and individuals seeking 
            sovereign-grade financial infrastructure.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <Link
            to="/contact"
            className="inline-block mt-12 px-10 py-4 border border-accent/30 text-accent text-xs tracking-widest uppercase transition-all duration-700 hover:bg-accent/10 hover:border-accent/60"
          >
            Private Inquiry
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
