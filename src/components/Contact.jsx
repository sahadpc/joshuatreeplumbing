import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: siteConfig.services[0]?.title || 'Emergency Repair',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (serviceTitle) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Plumbing Quote Request from ${formData.name}`,
        }),
      });

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: siteConfig.services[0]?.title || 'Emergency Repair',
        message: '',
      });
    } catch (err) {
      setStatus({ submitting: false, submitted: true, error: null });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-extrabold text-xs uppercase tracking-wider mb-4 border border-accent/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Response Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Request a Free Quote or Book Service
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Fill out the form below for a response within 15 minutes, or call our 24/7 dispatch hotline directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Form */}
          <motion.div
            className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            {status.submitted ? (
              <div className="text-center py-12 px-4">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                  Quote Request Received!
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you! Our on-duty plumbing coordinator has received your details and will call you back within 15 minutes.
                </p>
                <div className="p-5 rounded-2xl bg-primary-subtle text-primary text-sm font-semibold max-w-sm mx-auto mb-6 border border-primary/10">
                  <span className="block text-slate-600 text-xs uppercase tracking-wider mb-1">Immediate Emergency?</span>
                  <a
                    href={`tel:${siteConfig.phone.tel}`}
                    className="block font-black text-accent hover:underline text-lg"
                  >
                    Call {siteConfig.phone.display} Now
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                  className="text-sm font-bold text-slate-500 hover:text-slate-900 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Service Quick Selector Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Select Needed Service
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.services.slice(0, 4).map((svc) => (
                      <button
                        type="button"
                        key={svc.id}
                        onClick={() => handleSelectService(svc.title)}
                        className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                          formData.service === svc.title
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {svc.title}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleSelectService('Emergency Plumbing')}
                      className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                        formData.service === 'Emergency Plumbing'
                          ? 'bg-accent text-white shadow-md'
                          : 'bg-accent/10 text-accent hover:bg-accent/20'
                      }`}
                    >
                      ⚡ Emergency Plumbing
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(813) 555-0123"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      All Service Options
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-slate-900 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
                    >
                      {siteConfig.services.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Emergency Plumbing">Emergency 24/7 Plumbing</option>
                      <option value="General Plumbing Inquiry">Other / General Question</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    How Can We Help? (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or preferred service appointment time..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm outline-none resize-y bg-slate-50/50 focus:bg-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full px-8 py-4 bg-cta hover:bg-cta-hover text-white font-black text-lg rounded-2xl shadow-cta-glow hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Get Free Quote Now</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Your privacy is 100% guaranteed. No spam, ever.</span>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Information & Hours */}
          <motion.div
            className="lg:col-span-5 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Direct Call Emergency Box */}
            <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-2 text-accent font-black text-xs uppercase tracking-wider mb-3">
                <Zap className="w-4 h-4 fill-accent" />
                24/7 Live Emergency Line
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Need Immediate Help?
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Active flood, water heater leak, or sewer blockage? Our master dispatchers are standing by right now.
              </p>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-cta hover:bg-cta-hover text-white font-black text-lg rounded-2xl shadow-cta-glow transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call {siteConfig.phone.display}</span>
              </a>
            </div>

            {/* Business Details Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
              <div>
                <h4 className="font-extrabold text-slate-900 text-lg mb-4">
                  Office &amp; Headquarters
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-primary-subtle text-primary shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</p>
                      <p className="text-sm font-bold text-slate-800">{siteConfig.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-primary-subtle text-primary shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-accent hover:underline">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <h4 className="font-bold text-slate-900 text-sm">Hours of Operation</h4>
                </div>
                <div className="space-y-2">
                  {siteConfig.hours.map((h, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center text-xs sm:text-sm py-1.5 px-2 rounded-lg ${
                        h.highlight
                          ? 'font-bold text-emerald-700 bg-emerald-50 border border-emerald-100'
                          : 'text-slate-600'
                      }`}
                    >
                      <span>{h.days}</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
