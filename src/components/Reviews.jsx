import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import { Star, CheckCircle, Quote, ExternalLink, Sparkles } from 'lucide-react';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-800 font-extrabold text-xs uppercase tracking-wider mb-4 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Verified Homeowner Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              Trusted by Hundreds of Happy Neighbors
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              Don't just take our word for it. Read real, unedited reviews from homeowners and business managers across {siteConfig.address.city}.
            </p>
          </div>

          {/* Google Rating Summary Box */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xl flex items-center gap-6 shrink-0">
            <div className="flex flex-col items-center justify-center pr-6 border-r border-slate-200">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 leading-none">
                {siteConfig.rating}
              </span>
              <div className="flex items-center text-amber-400 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="font-extrabold text-sm sm:text-base text-slate-900">Google Reviews</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Based on {siteConfig.reviewCount}+ authentic reviews
              </p>
              {siteConfig.socialLinks?.googleBusiness && (
                <a
                  href={siteConfig.socialLinks.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline mt-1.5"
                >
                  <span>Read all Google reviews</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-slate-200" />
                </div>

                {/* Service Tag & Date */}
                <div className="flex items-center justify-between mb-4">
                  {review.service && (
                    <span className="text-[11px] font-bold text-primary bg-primary-subtle px-2.5 py-1 rounded-lg">
                      {review.service}
                    </span>
                  )}
                  {review.date && (
                    <span className="text-[11px] font-semibold text-slate-400">
                      {review.date}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>
              </div>

              {/* Reviewer Details with Avatar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar || `/images/avatar-${(index % 3) + 1}.jpg`}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-100"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">{review.name}</h3>
                    <p className="text-xs text-slate-500">{review.location}</p>
                  </div>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
