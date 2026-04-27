import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import RevealText from '../components/shared/RevealText';
import FadeIn from '../components/shared/FadeIn';
import SectionDivider from '../components/shared/SectionDivider';
import { posts } from '../data/posts';

import aboutImg from '../assets/7a96c086-4298-4416-b235-979849919512.jpg';

const ABOUT_IMAGE = aboutImg;

const VALUES = [
  { title: 'Integrity', text: 'The foundation upon which every relationship is built: unwavering, non-negotiable, absolute.' },
  { title: 'Sovereignty', text: 'We champion our clients\' financial autonomy, enabling capital to flow freely and securely across borders.' },
  { title: 'Legacy', text: 'Built to endure. Every decision, every partnership is designed with permanence and generational vision in mind.' },
];

const FEATURED_POSTS = posts.slice(0, 3);

export default function About() {
  useSEO({ title: 'About Us', description: 'Kazzius Capital was established as a trusted conduit for cross-border financial transactions at the highest levels of global commerce. Learn about our values and mission.' });
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-accent">
              About Kazzius Capital
            </span>
          </FadeIn>
          <div className="mt-12 md:mt-16">
            <RevealText>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
                An institution built on the principle that capital 
                should move as freely as ambition.
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
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Architectural foundation"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          <div>
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Kazzius Capital was established as a trusted conduit for cross-border financial transactions at the highest levels of global commerce.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
                Our clients are not merely customers, but long-term partners in the pursuit of financial excellence. We operate with absolute discretion, rigorous compliance, and a service architecture shaped around the complexity of each relationship.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
                Every engagement is structured on institutional trust and supported by a global network spanning leading financial centres across continents.
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

      <SectionDivider />

      {/* Featured Insights */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
              <div>
                <span className="text-xs tracking-widest uppercase text-accent block mb-6">
                  Institutional Intelligence
                </span>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1]">
                  Latest Thinking.
                </h2>
              </div>
              <p className="text-muted-foreground text-base max-w-md leading-relaxed">
                Perspectives on global capital movement, regulatory evolution, and the future of cross-border finance.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border/40">
            {FEATURED_POSTS.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.15}>
                <Link
                  to={`/news/${post.id}`}
                  className="group relative flex flex-col h-full p-10 md:p-12 border-b md:border-b-0 md:border-r border-border/40 last:border-r-0 last:border-b-0 hover:bg-accent/[0.03] transition-colors duration-700"
                >

                  <span className="text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
                    {post.categories[0]}
                  </span>

                  <h3
                    className="font-heading text-2xl md:text-3xl font-light text-foreground leading-[1.2] mb-6 group-hover:text-accent transition-colors duration-500"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center text-[10px] tracking-[0.3em] uppercase text-foreground group-hover:translate-x-2 transition-transform duration-500">
                    Read <span className="ml-3 h-[1px] w-6 bg-accent group-hover:w-10 transition-all duration-500" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-20 md:mt-28 text-center">
              <Link
                to="/news"
                className="inline-flex items-center px-14 py-5 border border-border/60 text-[10px] tracking-[0.3em] uppercase text-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-700"
              >
                View All Articles
                <span className="ml-4 h-[1px] w-8 bg-current" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
