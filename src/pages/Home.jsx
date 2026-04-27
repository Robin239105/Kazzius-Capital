import React from 'react';
import { useSEO } from '../hooks/useSEO';
import HeroSection from '../components/home/HeroSection';
import PhilosophySection from '../components/home/PhilosophySection';
import PillarsSection from '../components/home/PillarsSection';
import CTASection from '../components/home/CTASection';
import SectionDivider from '../components/shared/SectionDivider';

import heroBgImg from '../assets/Untitled design (6).png';

export default function Home() {
  useSEO({ title: 'Institutional Cross-Border Payments & FX Solutions', description: 'Kazzius Capital delivers sovereign cross-border payments, currency hedging, and bespoke liquidity solutions for global businesses, MSBs, and VASPs.' });
  return (
    <>
      <HeroSection heroImageUrl={heroBgImg} />
      <SectionDivider />
      <PhilosophySection />
      <SectionDivider />
      <PillarsSection />
      <SectionDivider />
      <CTASection />
    </>
  );
}
