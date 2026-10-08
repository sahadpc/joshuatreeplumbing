import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import { Phone, ArrowRight, Star, ShieldCheck, Zap, BadgePercent, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import SafeImage from './SafeImage';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-100/90 via-white to-slate-50">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-sm mb-6 hover:border-slate-300 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Live Dispatch in {siteConfig.address.city}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs sm:text-sm text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                Arriving in &lt; 45 Mins
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.12] mb-6">
              Tampa's Premier 24/7{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent">
                Master Plumbers
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              {siteConfig.tagline}. We arrive fast in mobile warehouse trucks to solve your leaks, water heaters, and sewer drains right the first time — with 100% upfront flat-rate pricing.
            </p>

            {/* High-Converting CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-cta text-white font-black text-lg shadow-cta-glow hover:bg-cta-hover hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 fill-white" />
                </div>
                <span>Call {siteConfig.phone.display}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-primary font-bold text-base border-2 border-slate-200 hover:border-primary hover:bg-primary-subtle/50 transition-all duration-200 shadow-sm text-center"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </a>
            </div>

            {/* Trust Badges Strip (Hero) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/90 w-full">
              {siteConfig.heroBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-2.5 rounded-2xl border border-slate-100">
                  <div className="p-2 rounded-xl bg-primary-subtle text-primary shrink-0 shadow-sm">
                    <DynamicIcon name={badge.icon} className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900 leading-tight">{badge.title}</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">{badge.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Overlays & SafeImage */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <SafeImage
                  src={siteConfig.images.hero}
                  fallbackSrc={siteConfig.images.heroFallback}
                  alt={siteConfig.images.heroAlt}
                  className="w-full h-[400px] sm:h-[480px]"
                  loading="eager"
                />
                
                {/* Subtle Gradient Overlay on bottom for badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent pointer-events-none" />

                {/* Bottom Overlay Card inside Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 leading-tight">Same-Day Guarantee</h2>
                      <p className="text-xs text-slate-500">Fully stocked service trucks in {siteConfig.address.city}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Top-Right Social Proof Pill */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-soft-pulse">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/images/avatar-1.jpg" alt="Reviewer" onError={(e) => { e.target.style.display = 'none'; }} />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/images/avatar-2.jpg" alt="Reviewer" onError={(e) => { e.target.style.display = 'none'; }} />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/images/avatar-3.jpg" alt="Reviewer" onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[11px] font-bold text-slate-900 leading-tight">
                    {siteConfig.rating} / 5.0 Rating
                  </p>
                </div>
              </div>

              {/* Floating Left Reassurance Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-6 bg-primary text-white p-3.5 rounded-2xl shadow-2xl border-2 border-white items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-black text-sm">
                  $0
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">Free On-Site Quote</p>
                  <p className="text-[11px] text-slate-300 font-medium">With Any Repair Done</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
