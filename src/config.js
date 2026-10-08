/**
 * ==============================================================================
 * BUSINESS CONFIGURATION - JOSHUA TREE PLUMBING
 * ==============================================================================
 * Edit this single file to customize all details, branding, services,
 * colors, contact info, images, and reviews for any plumbing business.
 * ==============================================================================
 */

export const siteConfig = {
  // BRANDING & ESSENTIALS
  businessName: "Joshua Tree Plumbing",
  legalName: "Joshua Tree Plumbing LLC",
  tagline: "Hillsborough County & Tampa Bay's Top-Rated Master Plumbers",
  shortTagline: "Fast 24/7 Emergency Plumber & Water System Specialists",
  licenseNumber: "FL State Certified Master Plumber (#CFC1428905)",

  // CONTACT INFO
  phone: {
    display: "(813) 455-6022",
    tel: "+18134556022",
  },
  email: "service@joshuatreeplumbing.com",
  address: {
    street: "Serving Hillsborough County & Tampa Bay",
    city: "Tampa",
    state: "FL",
    zip: "33602",
    full: "Serving Hillsborough County & Tampa Bay, FL",
  },

  // ============================================================================
  // THEME COLOR PRESETS
  // Choose any preset below or customize the hex values in `theme` directly:
  // ============================================================================
  themePresets: {
    modernSapphire: {
      primary: "#0F172A",       // Dark Obsidian / Slate 900
      primaryDark: "#020617",   // Midnight Obsidian
      primaryLight: "#2563EB",  // Electric Cobalt Blue
      primarySubtle: "#EFF6FF", // Crisp Ice-Blue tint
      accent: "#2563EB",        // Electric Cobalt
      accentHover: "#1D4ED8",
      accentLight: "#DBEAFE",
      cta: "#FF5925",           // Radiant Sunset Coral (Ultra-Modern High-Converting)
      ctaHover: "#E04310",
      ctaLight: "#FFECE5",
    },
    techCyan: {
      primary: "#0A192F",       // Deep Cyber Navy
      primaryDark: "#020C1B",
      primaryLight: "#0EA5E9",  // Vibrant Cyan
      primarySubtle: "#F0F9FF",
      accent: "#0284C7",        // Ocean Cyan
      accentHover: "#0369A1",
      accentLight: "#E0F2FE",
      cta: "#F59E0B",           // Electric Amber
      ctaHover: "#D97706",
      ctaLight: "#FEF3C7",
    },
    luxuryEmerald: {
      primary: "#06231C",       // Deep Luxury Forest Slate
      primaryDark: "#02130E",
      primaryLight: "#059669",  // Rich Emerald
      primarySubtle: "#ECFDF5",
      accent: "#10B981",        // Pure Emerald
      accentHover: "#047857",
      accentLight: "#D1FAE5",
      cta: "#F59E0B",           // Warm Gold
      ctaHover: "#D97706",
      ctaLight: "#FEF3C7",
    },
  },

  // ACTIVE THEME (Currently applied to the site)
  theme: {
    primary: "#0F172A",       // Ultra-sleek Dark Obsidian / Slate 900 (modern luxury)
    primaryDark: "#020617",   // Midnight Obsidian for deep contrast & luxury footer
    primaryLight: "#2563EB",  // Electric Cobalt / Modern Azure Blue (fresh clean water & high-tech feel)
    primarySubtle: "#EFF6FF", // Crisp Ice-Blue tint for cards & soft backgrounds
    accent: "#2563EB",        // Electric Royal Azure / Cobalt for brand authority
    accentHover: "#1D4ED8",   // Deep cobalt hover
    accentLight: "#DBEAFE",   // Soft azure tint
    cta: "#FF5925",           // Radiant Sunset Coral (Eye-catching modern CTA)
    ctaHover: "#E04310",      // Deep coral hover
    ctaLight: "#FFECE5",      // Soft coral tint
  },

  // SOCIAL PROOF & STATS (Exact Google Review Rating & Counts)
  rating: 4.8,
  reviewCount: 54,
  stats: [
    { label: "Google Rating", value: "4.8 ★", icon: "Star", desc: "Based on 54+ verified Google reviews" },
    { label: "Emergency Response", value: "< 45 Mins", icon: "Clock", desc: "Fast truck dispatch in Hillsborough" },
    { label: "Water Quality Jobs", value: "1,200+", icon: "CheckCircle2", desc: "Softener & filtration installs" },
    { label: "Licensed Master Pro", value: "100%", icon: "ShieldCheck", desc: "Certified, vetted & insured" },
  ],

  // HERO TRUST BADGES
  heroBadges: [
    { title: "Licensed & Insured", subtitle: "FL Master Plumber Certified", icon: "ShieldCheck" },
    { title: "Opens 7:00 AM Daily", subtitle: "24/7 Emergency Dispatch", icon: "Zap" },
    { title: "Upfront Honest Pricing", subtitle: "Zero Hidden Surcharges", icon: "BadgePercent" },
  ],

  // IMAGES (Local bundled assets with verified Unsplash fallbacks)
  images: {
    hero: "/images/hero-plumber.jpg",
    heroFallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Joshua Tree Plumbing technician providing expert plumbing and water softener services",
    
    about: "/images/about-inspection.jpg",
    aboutFallback: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    aboutAlt: "Joshua Tree Plumbing master plumber installing and testing residential plumbing valves",
    
    serviceVan: "/images/service-van.jpg",
    serviceVanFallback: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },

  // 6 CORE SERVICES (Customized for Joshua Tree Plumbing's top specialties)
  services: [
    {
      id: "water-softeners",
      title: "Water Softener & Reverse Osmosis",
      description: "Complete installation of advanced whole-home water softening systems, reverse osmosis drinking water filters, and scale prevention.",
      icon: "Sparkles",
      popular: true,
      tag: "Top Specialty",
      perk: "Crystal Clear Water",
    },
    {
      id: "prv-water-hammer",
      title: "Pressure Reducing & Shut-Off Valves",
      description: "Fix dangerous high water pressure (over 80-90 PSI), banging water hammer pipes, ball valve upgrades, and emergency main shut-offs.",
      icon: "Gauge",
      popular: true,
      tag: "Pressure Control",
      perk: "Protects Home Pipes",
    },
    {
      id: "emergency-repairs",
      title: "24/7 Emergency Plumbing",
      description: "Burst pipes, active flooding, leaking supply lines, and sudden sewage backups. Fast local dispatch across Hillsborough County.",
      icon: "AlertTriangle",
      popular: false,
      tag: "24/7 Dispatch",
      perk: "Opens 7 AM Daily",
    },
    {
      id: "shower-fixture-repair",
      title: "Bathroom, Shower & Fixture Repairs",
      description: "Expert restoration and repair for 70s-era and modern shower handles, leaking cartridges, tub spouts, sinks, and custom bathroom fixtures.",
      icon: "Wrench",
      popular: false,
      tag: "Vintage & Modern",
      perk: "Precision Valve Repair",
    },
    {
      id: "water-heaters",
      title: "Water Heater Repair & Install",
      description: "Fast diagnosis and installation for traditional tank and high-efficiency tankless water heaters with full manufacturer warranties.",
      icon: "Flame",
      popular: false,
      tag: "Fast Replacement",
      perk: "Same-Day Hot Water",
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning & Clog Clearing",
      description: "Motorized augering and hydro-clearing for sluggish kitchen sinks, shower drains, and main lines with lasting clog-free results.",
      icon: "Waves",
      popular: false,
      tag: "Same-Day Service",
      perk: "100% Clog-Free Guarantee",
    },
  ],

  // WHY CHOOSE US
  whyChooseUs: {
    heading: "Why Hillsborough County Counts on Joshua Tree Plumbing",
    subheading: "From complex water filtration to high-pressure valve fixes and vintage shower restorations, we deliver honest pricing, friendly communication, and master craftsmanship.",
    points: [
      {
        title: "Upfront & Reasonable Pricing",
        description: "You'll know the exact price before we start. No surprise dispatch fees, ticking clocks, or overtime markups.",
        icon: "CircleDollarSign",
      },
      {
        title: "Responsive & Communicative Team",
        description: "We communicate clearly before, during, and after every service call so you always know what is happening in your home.",
        icon: "ShieldCheck",
      },
      {
        title: "Water Quality & Pressure Experts",
        description: "Specialized expertise in whole-home water softeners, reverse osmosis systems, and high PSI pressure reducing valves.",
        icon: "Gauge",
      },
      {
        title: "100% Guaranteed Workmanship",
        description: "All parts and labor are backed by our written warranty. If anything isn't 100% right, we come back and fix it.",
        icon: "Award",
      },
    ],
  },

  // 3 SIMPLE STEPS
  howItWorks: [
    {
      step: "01",
      title: "Call (813) 455-6022 or Book Online",
      description: "Reach out directly by phone or submit the quick quote form. Speak with a friendly, knowledgeable plumbing coordinator.",
      icon: "PhoneCall",
    },
    {
      step: "02",
      title: "On-Time Arrival & Honest Diagnosis",
      description: "Our licensed technician arrives on schedule, thoroughly inspects the issue, and provides transparent, flat-rate options.",
      icon: "Truck",
    },
    {
      step: "03",
      title: "Problem Solved with 100% Guarantee",
      description: "We complete the repair cleanly, test water pressure and fixtures, clean up the workspace, and hand you a written warranty.",
      icon: "CheckCircle",
    },
  ],

  // REAL GOOGLE CUSTOMER REVIEWS (Joshua Tree Plumbing Google Maps reviews)
  reviews: [
    {
      name: "John Bunn",
      location: "11 reviews · Hillsborough County",
      rating: 5,
      date: "a year ago",
      avatar: "/images/avatar-1.jpg",
      review: "Joshua Tree Plumbing did a great job fixing a bad shut off valve and added a new brass ball valve and pressure reducing valve to get my 90psi pressure down to a safer pressure coming in my house. Great communication and service 👏",
      service: "Pressure Reducing Valve & Shut-Off",
      verified: true,
    },
    {
      name: "Ralph Graves",
      location: "11 reviews · Tampa Bay",
      rating: 5,
      date: "2 months ago",
      avatar: "/images/avatar-2.jpg",
      review: "Repairing 70s era shower handles can be a challenge, to say the least. That being said, Joshua Tree Plumbing came to the rescue and fixed both bathrooms as needed for a reasonable price. Responsive staff and great work!",
      service: "Shower & Bathroom Valve Repair",
      verified: true,
    },
    {
      name: "Roy B",
      location: "Local Guide · 65 reviews",
      rating: 5,
      date: "a year ago",
      avatar: "/images/avatar-3.jpg",
      review: "We had Joshua Tree Plumbing install a new soft water system, as well as a reverse osmosis filter system. They not only did a great job, but were communicative, and super professional. And the price was very reasonable. We'll definitely be using Joshua Tree for our future plumbing needs.",
      service: "Water Softener & Reverse Osmosis",
      verified: true,
    },
  ],

  // SERVICE AREA LIST & GOOGLE MAPS
  serviceAreas: [
    "Tampa",
    "Hillsborough County",
    "Brandon",
    "Riverview",
    "Valrico",
    "Wesley Chapel",
    "Lutz",
    "Carrollwood",
    "Temple Terrace",
    "Plant City",
    "St. Petersburg",
    "Clearwater",
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112836.88602693258!2d-82.52989182315025!3d27.99440243405785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b7880df96e17%3A0x6a053c8ec5178ed4!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",

  // OPERATING HOURS (Opens 7:00 AM)
  hours: [
    { days: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { days: "Saturday", hours: "7:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "8:00 AM - 4:00 PM" },
    { days: "Emergency Dispatch", hours: "Opens 7:00 AM Daily • 24/7 Rapid Response", highlight: true },
  ],

  // FORMSPREE ENDPOINT
  formspreeEndpoint: "https://formspree.io/f/xbjnvpoy",

  // SOCIAL MEDIA & GOOGLE MAPS LINKS
  socialLinks: {
    facebook: "https://facebook.com/joshuatreeplumbing",
    instagram: "https://instagram.com/joshuatreeplumbing",
    googleBusiness: "https://maps.google.com/?q=Joshua+Tree+Plumbing",
    yelp: "https://yelp.com/biz/joshua-tree-plumbing",
  },

  // SEO & META DETAILS
  seo: {
    title: "Joshua Tree Plumbing | 4.8 ★ Top-Rated Plumber in Hillsborough County & Tampa",
    description: "Joshua Tree Plumbing (4.8 ★, 54 reviews). Fast, reliable plumbing, water softeners, pressure reducing valves & emergency repairs in Hillsborough County & Tampa Bay. Call (813) 455-6022.",
    keywords: "Joshua Tree Plumbing, plumber Tampa FL, water softener installation Tampa, reverse osmosis filter Tampa, pressure reducing valve plumber, plumber Hillsborough County",
    ogImage: "/images/hero-plumber.jpg",
    siteUrl: "https://joshuatreeplumbing.com",
  },
};

export default siteConfig;
