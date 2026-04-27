import React from 'react';
import RevealText from '../components/shared/RevealText';
import FadeIn from '../components/shared/FadeIn';
import SectionDivider from '../components/shared/SectionDivider';
import { Link } from 'react-router-dom';

const SERVICES_IMAGE = 'https://media.base44.com/images/public/69ecba6d166be7324ee8f206/c36224da7_generated_8f8c8a7e.png';

const SERVICES = [
  {
    id: '01',
    title: 'Cross-Border Payments',
    subtitle: 'SETTLEMENT',
    description:
      'Seamless transfer of capital across jurisdictions with institutional-grade security, compliance, and speed. Designed for entities operating at the intersection of multiple regulatory frameworks.',
  },
  {
    id: '02',
    title: 'Liquidity Solutions',
    subtitle: 'LIQUIDITY',
    description:
      'Bespoke liquidity architecture for institutions requiring immediate access to capital in foreign markets. Structured to optimize execution, minimize exposure, and maintain absolute discretion.',
  },
  {
    id: '03',
    title: 'Bespoke Financial Services',
    subtitle: 'ADVISORY',
    description:
      'Supporting cross-border financial operations for private clients, family offices, and institutions operating globally.',
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={SERVICES_IMAGE}
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-accent">
              Our Services
            </span>
          </FadeIn>
          <div className="mt-12 md:mt-16">
            <RevealText>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
                Precision infrastructure for the movement of global capital.
              </h1>
            </RevealText>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Service Cards */}
      <section className="py-12 md:py-20">
        {SERVICES.map((service, i) => (
          <React.Fragment key={service.id}>
            <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <FadeIn className="lg:col-span-4">
                  <span className="font-heading text-6xl md:text-8xl font-light text-muted-foreground/10">
                    {service.id}
                  </span>
                  <p className="mt-4 text-xs tracking-widest uppercase text-accent">
                    {service.subtitle}
                  </p>
                  <h2 className="mt-4 font-heading text-3xl md:text-4xl font-light text-foreground leading-tight">
                    {service.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2} className="lg:col-span-8 flex items-center">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </FadeIn>
              </div>
            </div>
            {i < SERVICES.length - 1 && <SectionDivider />}
          </React.Fragment>
        ))}
      </section>

      <SectionDivider />

      {/* Closing CTA */}
      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground leading-tight">
              Your requirements, fully considered.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Each engagement begins with understanding. Reach out to discuss 
              how Kazzius Capital can architect a solution for your specific needs.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <Link
              to="/contact"
              className="inline-block mt-12 px-10 py-4 border border-accent/30 text-accent text-xs tracking-widest uppercase transition-all duration-700 hover:bg-accent/10 hover:border-accent/60"
            >
              Begin a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
