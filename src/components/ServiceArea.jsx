import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';

export const ServiceArea = () => {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information and City Pills */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle text-primary font-bold text-xs uppercase tracking-wider mb-4">
              Local Coverage
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4">
              Proudly Serving {siteConfig.address.city} &amp; Surrounding Communities
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              We have fully equipped mobile plumbing units stationed across the metro area, ensuring rapid arrival times when emergencies strike.
            </p>

            {/* City Pills List */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Key Service Locations
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {siteConfig.serviceAreas.map((city, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-primary-subtle text-slate-800 hover:text-primary text-xs sm:text-sm font-semibold border border-slate-200 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Dispatch Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Don't see your specific town?</h4>
                  <p className="text-xs text-slate-500">Call us to confirm coverage in your neighborhood.</p>
                </div>
              </div>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 fill-accent" />
                <span>Call {siteConfig.phone.display}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed Card */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-4 border-slate-100 bg-slate-200 aspect-[4/3] sm:aspect-[16/11]">
              <iframe
                title={`Map of service area in ${siteConfig.address.city}, ${siteConfig.address.state}`}
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>

              {/* Floating Headquarter Location Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 text-xs font-bold text-slate-800 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-accent" />
                <span>Headquarters: {siteConfig.address.city}, {siteConfig.address.state}</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ServiceArea;
