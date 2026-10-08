import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import DynamicIcon from './DynamicIcon';

export const TrustBar = () => {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/3 w-64 h-24 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
          {siteConfig.stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-4 md:pt-0' : ''
              } ${index % 2 !== 0 && index > 1 ? 'pt-4 md:pt-0' : ''}`}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg bg-white/10 text-accent">
                  <DynamicIcon name={stat.icon} className="w-4 h-4 text-accent" />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-200">
                {stat.label}
              </p>
              {stat.desc && (
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {stat.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBar;
