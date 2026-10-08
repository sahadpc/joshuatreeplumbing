# 🛠️ Apex Plumbing & Drain — Modern Single-Page Template for Plumbers

A high-converting, mobile-first, config-driven single-page website template built specifically for local plumbing and home service businesses across the USA.

Designed for maximum reusability — swap out `src/config.js` to instantly rebrand the website for any plumbing client in under 2 minutes.

---

## 🌟 Key Features

- **100% Config-Driven**: Customize business name, tagline, phone numbers, addresses, theme colors, services, reviews, hours, Google Maps, and Formspree contact endpoint from a single file (`src/config.js`).
- **Dynamic Theming via CSS Variables**: Primary and accent colors defined in `config.js` feed directly into Tailwind CSS and CSS root variables (`--color-primary`, `--color-accent`, etc.).
- **Mobile-First & High-Converting**: Sticky blurred navigation, click-to-call banners, instant quote forms, and a floating call button on mobile with gentle pulse animation.
- **Conversion-Optimized Flow**:
  1. **Sticky Header**: Glassmorphic background on scroll, quick call button, quote trigger, and mobile menu.
  2. **Hero Section**: Strong value proposition, Google rating badge, emergency badges, high-impact imagery.
  3. **TrustBar**: 4 key credibility statistics (experience, jobs completed, rating, response time).
  4. **Services Grid**: 6 interactive service cards with Lucide icons and hover lift effects.
  5. **Why Choose Us**: Split layout highlighting upfront pricing, master-licensed technicians, and warranties.
  6. **How It Works**: 3-step transparent process.
  7. **Customer Reviews**: Google rating summary with 3 verified customer testimonials.
  8. **Service Area & Map**: Interactive location pills and embedded responsive Google Maps.
  9. **Contact & Quote Form**: Integrated Formspree endpoint submission with live hours & direct hotline sidebar.
  10. **Footer**: Comprehensive navigation, licensing info, social links, and copyright.
  11. **Mobile Floating Call Button**: Persistent bottom call bar for instant dispatch.
- **SEO & Schema.org**: Injected `PlumbingService` JSON-LD schema, Open Graph tags, and customizable metadata.
- **Pure JavaScript**: Clean React 18 + Vite codebase, lightweight animations with Framer Motion, and Lucide React icons.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## ⚙️ How to Customize (`src/config.js`)

Open `src/config.js` to modify all aspects of the website:

```javascript
export const siteConfig = {
  // 1. BUSINESS DETAILS
  businessName: "Your Plumbing Business",
  tagline: "Your Catchy Tagline Here",
  phone: {
    display: "(813) 555-0199",
    tel: "+18135550199",
  },
  email: "service@yourplumber.com",
  address: {
    street: "123 Main Street",
    city: "Tampa",
    state: "FL",
    zip: "33602",
    full: "123 Main Street, Tampa, FL 33602",
  },

  // 2. THEME COLORS (Hex Codes)
  theme: {
    primary: "#0B3C5D",       // Deep brand navy
    primaryDark: "#07263C",
    primaryLight: "#165985",
    primarySubtle: "#EAF3F9",
    accent: "#F97316",        // CTA button orange
    accentHover: "#EA580C",
    accentLight: "#FFEDD5",
  },

  // 3. STATS & REVIEWS
  rating: 4.9,
  reviewCount: 487,
  services: [ ... ],
  reviews: [ ... ],
  serviceAreas: ["City 1", "City 2", "City 3"],

  // 4. FORMSPREE QUOTE FORM
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
};
```

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This compiles minified HTML, CSS, and JavaScript bundles into the `dist/` folder.

You can preview the production build locally with:
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`
4. Click **Deploy Site**.

*Alternatively, drag and drop the `dist/` folder into Netlify Drop.*

---

### Deploy to Vercel
1. Import your project repository into [Vercel](https://vercel.com/).
2. Framework preset will automatically detect **Vite**.
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. Click **Deploy**.

---

### Deploy to Cloudflare Pages
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Select **Create application** > **Pages** > **Connect to Git**.
3. Set Framework preset to **Vite**.
4. Set Build command to `npm run build` and Build output directory to `dist`.
5. Click **Save and Deploy**.

---

## 📱 Responsive Testing
Tested and verified across key viewport widths:
- **Mobile** (375px) — Floating bottom call button, smooth mobile drawer menu, touch-friendly tap targets.
- **Tablet** (768px) — Balanced two-column grids, readable typography, responsive stats bar.
- **Desktop** (1280px+) — Full glassmorphic navigation, split-screen hero & contact layouts, hover card lift effects.

---

## 📄 License
MIT License. Free to use for commercial client projects.
