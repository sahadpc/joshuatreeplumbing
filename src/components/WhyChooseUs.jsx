import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import DynamicIcon from './DynamicIcon';
import SafeImage from './SafeImage';
import { Check, Award, Shield, Sparkles } from 'lucide-react';

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Overlaid Badges & SafeImage */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <SafeImage
                src={siteConfig.images.about}
                fallbackSrc={siteConfig.images.aboutFallback}
                alt={siteConfig.images.aboutAlt}
                className="w-full h-[420px] sm:h-[500px]"
                loading="lazy"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Glass Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-accent text-white shrink-0 shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">100% Satisfaction Guaranteed</p>
                    <p className="text-xs text-slate-500">Parts &amp; Labor backed by our written 2-Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Pill Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-primary text-white p-4 sm:p-5 rounded-3xl shadow-2xl flex items-center gap-3.5 border-4 border-white">
              <div className="text-3xl sm:text-4xl font-black text-accent">18+</div>
              <div className="text-xs font-bold leading-tight uppercase tracking-wider">
                Years of<br />Excellence in Tampa
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy and 4 Benefit Points */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-extrabold text-xs uppercase tracking-wider mb-4 border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Apex Difference</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
              {siteConfig.whyChooseUs.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {siteConfig.whyChooseUs.subheading}
            </p>

            {/* 4 Benefit Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-8">
              {siteConfig.whyChooseUs.points.map((point, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center shrink-0 shadow-sm">
                      <DynamicIcon name={point.icon} className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Guarantees checklist */}
            <div className="flex flex-wrap gap-y-2.5 gap-x-6 pt-4 border-t border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                Protective Shoe Booties & Floor Mats
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                Zero Overtime or Weekend Rates
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                Drug-Free & Background-Checked
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
