import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { useParams, Link } from 'react-router-dom';
import FadeIn from '../components/shared/FadeIn';
import SectionDivider from '../components/shared/SectionDivider';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  useSEO(post ? {
    title: post.title.replace(/<[^>]*>?/gm, ''),
    description: post.excerpt,
  } : {});

  if (!post) {
    return (
      <div className="pt-48 pb-32 px-6 text-center">
        <h1 className="font-heading text-4xl font-light">Publication not found.</h1>
        <Link to="/news" className="mt-8 inline-block text-accent uppercase text-[10px] tracking-widest underline decoration-accent/30 underline-offset-8">
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <article>
      {/* Article Header */}
      <section className="pt-32 md:pt-44 pb-20 px-6 md:px-12 lg:px-20 border-b border-border/40">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Link to="/news" className="group inline-flex items-center text-[10px] tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors mb-12">
              <span className="mr-3 group-hover:-translate-x-2 transition-transform">←</span> Back to News
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center space-x-6 mb-12 text-[10px] tracking-[0.3em] uppercase">
              <span className="text-accent">{post.categories[0]}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-muted-foreground">{post.readingTime}</span>
            </div>
            <h1 
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground text-center"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </FadeIn>
        </div>
      </section>



      {/* Article Content */}
      <section className="pt-24 pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div 
              className="prose prose-stone prose-invert max-w-none 
                         prose-headings:font-heading prose-headings:font-light prose-headings:text-foreground
                         prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
                         prose-blockquote:border-accent prose-blockquote:text-foreground prose-blockquote:font-light"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-24 pt-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-4">
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Share:</span>
                <div className="flex space-x-6 text-[10px] tracking-widest uppercase text-foreground">
                  <button className="hover:text-accent transition-colors">LinkedIn</button>
                  <button className="hover:text-accent transition-colors">X</button>
                  <button className="hover:text-accent transition-colors">Copy Link</button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/news" className="text-[10px] tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors">
                  ← All Articles
                </Link>
                <Link to="/contact" className="px-10 py-3 bg-foreground text-background text-[10px] tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-500 shadow-lg shadow-black/20">
                  Discuss Strategy
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Recommended Section placeholder */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-muted/5">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <span className="text-[10px] tracking-widest uppercase text-accent mb-6 block">Continue Reading</span>
            <h2 className="font-heading text-3xl font-light mb-12">More Perspectives</h2>
            <Link to="/news" className="inline-block px-12 py-4 border border-border hover:border-accent hover:text-accent transition-all duration-700 text-[10px] tracking-widest uppercase">
              View All Articles
            </Link>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
