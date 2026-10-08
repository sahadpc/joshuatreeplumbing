import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import DynamicIcon from './DynamicIcon';
import { ArrowRight, PhoneCall, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <span>Master-Level Solutions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4"
          >
            Expert Plumbing Services in {siteConfig.address.city}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            From emergency repairs in the dead of night to full residential repiping, our master plumbers deliver long-lasting craftsmanship with 100% upfront flat-rate quotes.
          </motion.p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-white hover:bg-slate-50/80 rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between hover:-translate-y-2"
            >
              {/* Popular / Feature Tag */}
              {service.tag && (
                <div className="absolute top-5 right-5">
                  <span
                    className={`text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                      service.popular
                        ? 'bg-accent text-white shadow-sm'
                        : 'bg-primary-subtle text-primary border border-primary/10'
                    }`}
                  >
                    {service.tag}
                  </span>
                </div>
              )}

              <div>
                {/* Icon Container with glowing ring on hover */}
                <div className="w-14 h-14 rounded-2xl bg-primary-subtle group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 mb-6">
                  <DynamicIcon
                    name={service.icon}
                    className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors duration-200 mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Perk / Guarantee Pill */}
                {service.perk && (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl w-fit mb-6">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{service.perk}</span>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent transition-colors group-hover:translate-x-0.5"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-accent transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl"
                  aria-label={`Call for ${service.title}`}
                >
                  <PhoneCall className="w-3.5 h-3.5 text-accent" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Premium Guarantee Strip inside Services */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shrink-0 shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a Commercial or Heavy-Duty Plumbing Repair?</h4>
              <p className="text-slate-300 text-sm">We handle gas lines, backflow testing, restaurants, retail units, and commercial fit-outs.</p>
            </div>
          </div>
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="whitespace-nowrap px-7 py-3.5 rounded-2xl bg-white text-primary hover:bg-slate-100 font-extrabold text-sm transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            Speak with a Master Plumber
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
