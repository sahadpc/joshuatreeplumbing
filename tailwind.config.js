/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #0F172A)',
          dark: 'var(--color-primary-dark, #020617)',
          light: 'var(--color-primary-light, #2563EB)',
          subtle: 'var(--color-primary-subtle, #EFF6FF)',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #2563EB)',
          hover: 'var(--color-accent-hover, #1D4ED8)',
          light: 'var(--color-accent-light, #DBEAFE)',
        },
        cta: {
          DEFAULT: 'var(--color-cta, #FF5925)',
          hover: 'var(--color-cta-hover, #E04310)',
          light: 'var(--color-cta-light, #FFECE5)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'soft-lg': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'accent-glow': '0 10px 30px -5px rgba(37, 99, 235, 0.35)',
        'cta-glow': '0 10px 30px -5px rgba(255, 89, 37, 0.4)',
      },
    },
  },
  plugins: [],
}
