import React from 'react';
import { siteConfig } from '../config';
import { Phone, Zap } from 'lucide-react';

export const FloatingCallButton = () => {
  return (
    <aside
      aria-label="Emergency Call Bar"
      className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center justify-center pointer-events-none"
    >
      <a
        href={`tel:${siteConfig.phone.tel}`}
        aria-label={`Call emergency plumber at ${siteConfig.phone.display}`}
        className="pointer-events-auto w-full max-w-sm flex items-center justify-between px-5 py-3.5 bg-cta text-white font-extrabold text-base rounded-2xl shadow-2xl animate-soft-pulse active:scale-95 transition-transform border border-white/20"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <Phone className="w-5 h-5 fill-white" />
          </div>
          <div className="text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-white/90 leading-tight">
              24/7 Emergency Dispatch
            </span>
            <span className="block text-sm font-black tracking-tight leading-tight">
              {siteConfig.phone.display}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 fill-current text-yellow-300" />
          <span>Call</span>
        </div>
      </a>
    </aside>
  );
};

export default FloatingCallButton;
