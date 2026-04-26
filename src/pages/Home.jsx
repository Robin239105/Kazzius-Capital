import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PhilosophySection from '../components/home/PhilosophySection';
import PillarsSection from '../components/home/PillarsSection';
import CTASection from '../components/home/CTASection';
import SectionDivider from '../components/shared/SectionDivider';

import heroBgImg from '../assets/upscalemedia-transformed (1).png';
const LION_LOGO = 'https://media.base44.com/images/public/69ecba6d166be7324ee8f206/05ef486f0_upscalemedia-transformed.png';

export default function Home() {
  return (
    <>
      <HeroSection heroImageUrl={heroBgImg} lionLogoUrl={LION_LOGO} />
      <SectionDivider />
      <PhilosophySection />
      <SectionDivider />
      <PillarsSection />
      <SectionDivider />
      <CTASection />
    </>
  );
}
