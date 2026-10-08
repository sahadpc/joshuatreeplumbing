import React, { useEffect } from 'react';
import { siteConfig } from './config';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  // Sync dynamic CSS variables and SEO meta tags with config.js
  useEffect(() => {
    // 1. Set CSS Theme Variables from config.js
    if (siteConfig.theme) {
      const root = document.documentElement;
      if (siteConfig.theme.primary) root.style.setProperty('--color-primary', siteConfig.theme.primary);
      if (siteConfig.theme.primaryDark) root.style.setProperty('--color-primary-dark', siteConfig.theme.primaryDark);
      if (siteConfig.theme.primaryLight) root.style.setProperty('--color-primary-light', siteConfig.theme.primaryLight);
      if (siteConfig.theme.primarySubtle) root.style.setProperty('--color-primary-subtle', siteConfig.theme.primarySubtle);
      if (siteConfig.theme.accent) root.style.setProperty('--color-accent', siteConfig.theme.accent);
      if (siteConfig.theme.accentHover) root.style.setProperty('--color-accent-hover', siteConfig.theme.accentHover);
      if (siteConfig.theme.accentLight) root.style.setProperty('--color-accent-light', siteConfig.theme.accentLight);
      if (siteConfig.theme.cta) root.style.setProperty('--color-cta', siteConfig.theme.cta);
      if (siteConfig.theme.ctaHover) root.style.setProperty('--color-cta-hover', siteConfig.theme.ctaHover);
      if (siteConfig.theme.ctaLight) root.style.setProperty('--color-cta-light', siteConfig.theme.ctaLight);
    }

    // 2. Set Page Title & Meta Tags
    if (siteConfig.seo) {
      document.title = siteConfig.seo.title || `${siteConfig.businessName} | Plumber in ${siteConfig.address.city}, ${siteConfig.address.state}`;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', siteConfig.seo.description || siteConfig.tagline);
    }

    // 3. Inject LocalBusiness Schema (JSON-LD) for Local SEO
    const schemaScriptId = 'local-business-schema';
    let schemaScript = document.getElementById(schemaScriptId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "PlumbingService",
      "name": siteConfig.businessName,
      "image": siteConfig.images.hero,
      "telephone": siteConfig.phone.tel,
      "email": siteConfig.email,
      "url": siteConfig.seo?.siteUrl || "https://example.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.state,
        "postalCode": siteConfig.address.zip,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 27.9506,
        "longitude": -82.4572
      },
      "areaServed": siteConfig.serviceAreas.map(city => ({
        "@type": "City",
        "name": city
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": siteConfig.rating.toString(),
        "reviewCount": siteConfig.reviewCount.toString(),
        "bestRating": "5"
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ]
    };

    schemaScript.text = JSON.stringify(localBusinessSchema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-accent selection:text-white">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. TrustBar */}
        <TrustBar />

        {/* 4. Services */}
        <Services />

        {/* 5. WhyChooseUs */}
        <WhyChooseUs />

        {/* 6. HowItWorks */}
        <HowItWorks />

        {/* 7. Reviews */}
        <Reviews />

        {/* 8. ServiceArea */}
        <ServiceArea />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating Mobile Call Button */}
      <FloatingCallButton />
    </div>
  );
}

export default App;
