import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { useState } from 'react';
import RevealText from '../components/shared/RevealText';
import FadeIn from '../components/shared/FadeIn';
import SectionDivider from '../components/shared/SectionDivider';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import contactImg from '../assets/79f2fff6-3b55-4621-8320-4c985a045dff.jpg';

export default function Contact() {
  useSEO({ title: 'Contact Us', description: 'Get in touch with Kazzius Capital. Discuss your cross-border payment needs, FX risk management strategy, or institutional liquidity requirements with our specialists.' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-widest uppercase text-accent">
              Private Inquiry
            </span>
          </FadeIn>
          <div className="mt-12 md:mt-16">
            <RevealText>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
                By appointment only.
              </h1>
            </RevealText>
          </div>
          <FadeIn delay={0.3}>
            <p className="mt-10 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Kazzius Capital engages selectively with qualified institutions 
              and high-net-worth principals. All inquiries are treated 
              with the utmost confidentiality.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Form */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                Inquiry received.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A member of our private client team will respond within 
                48 hours. All correspondence is held in strict confidence.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <FadeIn delay={0.1}>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Full Name
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="—"
                    className="bg-transparent border-0 border-b border-border/40 rounded-none px-0 py-3 text-foreground text-base placeholder:text-muted-foreground/30 focus-visible:ring-0 focus-visible:border-accent/60 transition-colors duration-500"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="—"
                    className="bg-transparent border-0 border-b border-border/40 rounded-none px-0 py-3 text-foreground text-base placeholder:text-muted-foreground/30 focus-visible:ring-0 focus-visible:border-accent/60 transition-colors duration-500"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Nature of Inquiry
                  </label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                    <SelectTrigger className="bg-transparent border-0 border-b border-border/40 rounded-none px-0 py-3 text-foreground text-base focus:ring-0 transition-colors duration-500">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="cross-border">Cross-Border Payments</SelectItem>
                      <SelectItem value="liquidity">Liquidity Solutions</SelectItem>
                      <SelectItem value="advisory">Bespoke Advisory</SelectItem>
                      <SelectItem value="partnership">Strategic Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Message
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Brief description of your requirements…"
                    rows={4}
                    className="bg-transparent border-0 border-b border-border/40 rounded-none px-0 py-3 text-foreground text-base placeholder:text-muted-foreground/30 focus-visible:ring-0 focus-visible:border-accent/60 transition-colors duration-500 resize-none"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="px-12 py-4 border border-accent/30 text-accent text-xs tracking-widest uppercase transition-all duration-700 hover:bg-accent/10 hover:border-accent/60"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </FadeIn>
            </form>
          )}
        </div>
      </section>

      <SectionDivider />

      {/* Landscape Image Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="w-full h-auto bg-muted/10 overflow-hidden">
              <img 
                src={contactImg} 
                alt="Our Headquarters" 
                className="w-full h-auto object-contain opacity-80 transition-all duration-1000"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
