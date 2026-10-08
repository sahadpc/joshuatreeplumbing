import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import DynamicIcon from './DynamicIcon';
import { Phone, CheckCircle2, Sparkles } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-subtle text-primary font-extrabold text-xs uppercase tracking-wider mb-4 border border-primary/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Hassle-Free 3-Step Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            How We Get Your Plumbing Solved Fast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            We've eliminated the stress of home repairs. No waiting all day for a technician, no surprise charges on your final invoice.
          </motion.p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {siteConfig.howItWorks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col items-start hover:-translate-y-2"
            >
              {/* Step Badge */}
              <div className="flex items-center justify-between w-full mb-6">
                <span className="text-4xl sm:text-5xl font-black text-primary/15 tracking-tighter">
                  {item.step}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center shadow-lg">
                  <DynamicIcon name={item.icon} className="w-7 h-7 text-accent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Fast Contact Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-3 bg-primary-subtle/60 py-4 px-6 rounded-2xl border border-primary/10 max-w-2xl mx-auto"
        >
          <span className="text-slate-700 font-semibold text-sm sm:text-base">
            Have an active water emergency right now?
          </span>
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="inline-flex items-center gap-2 text-accent font-extrabold hover:underline text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 fill-accent" />
            <span>Call {siteConfig.phone.display}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
