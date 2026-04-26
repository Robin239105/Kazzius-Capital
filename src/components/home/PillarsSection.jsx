import React from 'react';
import FadeIn from '../shared/FadeIn';

const PILLARS = [
  {
    number: '01',
    title: 'Discretion',
    description: 'Every transaction is conducted with the utmost confidentiality, safeguarding our clients\' financial sovereignty.',
  },
  {
    number: '02',
    title: 'Precision',
    description: 'Meticulous execution across jurisdictions, currencies, and regulatory frameworks without exception.',
  },
  {
    number: '03',
    title: 'Reach',
    description: 'A global network that transcends borders, connecting capital to opportunity wherever it resides.',
  },
];

export default function PillarsSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-xs tracking-widest uppercase text-accent">
            Foundations
          </span>
        </FadeIn>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30">
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.number} delay={i * 0.15} className="bg-background p-8 md:p-12">
              <span className="font-heading text-5xl md:text-6xl font-light text-muted-foreground/20">
                {pillar.number}
              </span>
              <h3 className="mt-8 font-heading text-2xl md:text-3xl font-light text-foreground tracking-wide">
                {pillar.title}
              </h3>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
