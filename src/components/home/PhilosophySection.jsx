import React from 'react';
import RevealText from '../shared/RevealText';
import FadeIn from '../shared/FadeIn';
import philosophyImg from '../../assets/upscalemedia-transformed (2).png';

export default function PhilosophySection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-xs tracking-widest uppercase text-accent">
            Our Philosophy
          </span>
        </FadeIn>
        <div className="mt-12 md:mt-16">
          <RevealText>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-foreground">
              Where tradition meets the velocity of modern capital, moving wealth across 
              borders with precision and discretion.
            </h2>
          </RevealText>
        </div>
        <FadeIn delay={0.4} className="mt-16 md:mt-24 flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between">
          <div className="w-full md:w-1/2">
            <img 
              src={philosophyImg} 
              alt="Kazzius Philosophy" 
              className="w-full h-auto object-cover rounded-sm mix-blend-multiply"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-start md:justify-end">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Kazzius Capital serves as a bridge between the world's financial 
              centers, orchestrating seamless cross-border transactions for 
              those who require nothing less than absolute excellence.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
