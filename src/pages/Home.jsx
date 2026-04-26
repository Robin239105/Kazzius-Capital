import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PhilosophySection from '../components/home/PhilosophySection';
import PillarsSection from '../components/home/PillarsSection';
import CTASection from '../components/home/CTASection';
import SectionDivider from '../components/shared/SectionDivider';

import heroBgImg from '../assets/Untitled design (6).png';

export default function Home() {
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
