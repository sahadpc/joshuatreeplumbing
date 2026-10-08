import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config';
import { Phone, Menu, X, Shield, Clock, ChevronRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner (Emergency Notice & Quick Details) - hides on mobile to conserve space */}
      <div className="bg-primary-dark text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Emergency Plumber in {siteConfig.address.city}, {siteConfig.address.state}
            </span>
            <span className="text-slate-300 hidden lg:inline-flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-accent" />
              {siteConfig.licenseNumber}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-slate-300">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent" />
              Response Time: &lt; 45 Mins
            </span>
            <span className="text-slate-400">|</span>
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="text-white font-bold hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-accent fill-accent" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-slate-200/80 shadow-md py-3'
            : 'bg-white/95 md:bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label={`${siteConfig.businessName} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-accent"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold text-primary tracking-tight leading-tight group-hover:text-primary-light transition-colors">
                {siteConfig.businessName}
              </span>
              <span className="block text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                {siteConfig.address.city}, {siteConfig.address.state} • Master Plumbers
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-primary font-bold text-sm bg-primary-subtle hover:bg-primary/10 transition-all border border-primary/10"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="w-4 h-4 text-accent fill-accent" />
              <span>{siteConfig.phone.display}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold text-sm bg-cta hover:bg-cta-hover shadow-cta-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Free Quote</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="p-2 rounded-lg bg-accent/10 text-accent"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="w-5 h-5 fill-accent" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-accent rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white font-bold rounded-xl shadow-md text-base"
                >
                  <Phone className="w-4 h-4 fill-current text-accent" />
                  Call {siteConfig.phone.display}
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-cta text-white font-bold rounded-xl shadow-cta-glow text-base"
                >
                  Get a Free Quote
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
