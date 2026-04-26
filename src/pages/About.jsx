import React from 'react';
import RevealText from '../components/shared/RevealText';
import FadeIn from '../components/shared/FadeIn';
import SectionDivider from '../components/shared/SectionDivider';

import ABOUT_IMAGE from '../assets/87a2ac09-a06c-4c89-a330-50b19b77cd18.jpg';

const VALUES = [
  { title: 'Integrity', text: 'The foundation upon which every relationship is built: unwavering, non-negotiable, absolute.' },
  { title: 'Sovereignty', text: 'We champion our clients\' financial autonomy, enabling capital to flow freely and securely across borders.' },
  { title: 'Legacy', text: 'Built to endure. Every decision, every partnership is designed with permanence and generational vision in mind.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-accent">
              About Kazzius Capital
            </span>
          </FadeIn>
          <div className="mt-12 md:mt-16">
            <RevealText>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground max-w-5xl">
                Where tradition meets the velocity of modern capital, moving wealth across borders with precision and discretion.
              </h1>
            </RevealText>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Narrative + Image */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div className="aspect-video lg:aspect-square overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Kazzius Capital Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          <div>
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Kazzius Capital serves as a bridge between the world's financial centres, orchestrating seamless cross-border transactions for private clients and institutions who require nothing less than absolute excellence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-accent">
              Our Values
            </span>
          </FadeIn>
          <div className="mt-16 md:mt-24 space-y-0 divide-y divide-border/30">
            {VALUES.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.12}>
                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="md:col-span-2 text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
