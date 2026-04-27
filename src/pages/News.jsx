import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import RevealText from '../components/shared/RevealText';
import FadeIn from '../components/shared/FadeIn';
import SectionDivider from '../components/shared/SectionDivider';
import { posts } from '../data/posts';

export default function News() {
  useSEO({ title: 'News & Articles', description: 'Insights on global capital movement, institutional FX strategy, currency hedging, and the evolving landscape of cross-border finance from Kazzius Capital.' });
  const postsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-accent">
              Intel & Perspective
            </span>
          </FadeIn>
          <div className="mt-12 md:mt-16">
            <RevealText>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
                News and Articles.
              </h1>
            </RevealText>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-10 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Insights on global capital movement, institutional infrastructure, 
              and the evolving landscape of sovereign-grade finance.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Blog Grid */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-muted/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
            {currentPosts.map((post, i) => {
              const index = (currentPage - 1) * postsPerPage + i + 1;
              const formattedIndex = index < 10 ? `0${index}` : index;
              
              return (
                <FadeIn key={post.id} delay={i % 2 * 0.1}>
                  <Link to={`/news/${post.id}`} className="group flex flex-col h-full border-t border-border/40 pt-12 hover:border-accent transition-colors duration-700">
                    <div className="flex items-start justify-between mb-10">
                      <span className="text-[10px] tracking-[0.3em] font-medium text-accent">
                        {formattedIndex} / {post.categories[0]}
                      </span>
                      <span className="text-[10px] tracking-widest text-muted-foreground opacity-60">
                        {post.readingTime}
                      </span>
                    </div>
                    
                    <h2 
                      className="font-heading text-3xl md:text-4xl font-light text-foreground group-hover:text-accent transition-colors duration-500 leading-[1.2] mb-8"
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                    
                    <p className="text-base text-muted-foreground leading-relaxed line-clamp-3 mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center text-[10px] tracking-[0.3em] uppercase text-foreground group-hover:translate-x-3 transition-transform duration-500">
                      View Analysis <span className="ml-4 h-[1px] w-8 bg-accent group-hover:w-12 transition-all duration-500" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-32 flex items-center justify-center space-x-6 border-t border-border/40 pt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="text-[10px] tracking-widest uppercase disabled:opacity-20 hover:text-accent transition-colors"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-4">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`text-xs w-8 h-8 flex items-center justify-center border transition-all duration-500 ${
                      currentPage === i + 1 
                        ? 'border-accent text-accent bg-accent/5' 
                        : 'border-transparent text-muted-foreground hover:border-border'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="text-[10px] tracking-widest uppercase disabled:opacity-20 hover:text-accent transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
