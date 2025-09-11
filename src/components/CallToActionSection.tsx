'use client';

import React from 'react';
import { BRAND_COLORS } from '../lib/colors';

export default function CallToActionSection() {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `linear-gradient(to right, ${BRAND_COLORS.primary}, ${BRAND_COLORS.primaryHover})`
      }}></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            From website design and maintenance to IT leadership, finance bookkeeping with CPA expertise, and consultation services, we provide everything your small to medium-sized business needs to succeed. Let&apos;s discuss your project today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{color: BRAND_COLORS.primary}}
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white transition-all duration-300"
              style={{
                '--hover-text-color': BRAND_COLORS.primary
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = BRAND_COLORS.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              View Our Services
            </a>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
