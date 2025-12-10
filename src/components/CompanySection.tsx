'use client';

import React from 'react';
import Image from 'next/image';
import { BRAND_COLORS } from '../lib/colors';

export default function CompanySection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="/Images/home-5.png"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl flex items-center justify-center" style={{backgroundColor: BRAND_COLORS.secondary}}>
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Business Partner
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Complete business solutions for small to medium-sized businesses.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: BRAND_COLORS.secondary}}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Solutions</h3>
                    <p className="text-gray-600">
                      Professional web design, IT leadership, and strategic technology guidance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: BRAND_COLORS.secondary}}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial & Administrative Services</h3>
                    <p className="text-gray-600">
                      CPA-certified bookkeeping, consultation, and administrative support.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: BRAND_COLORS.secondary}}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Compliance & Claims</h3>
                    <p className="text-gray-600">
                      Healthcare regulatory compliance and insurance claims support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: BRAND_COLORS.secondary}}>100+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: BRAND_COLORS.secondary}}>50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: BRAND_COLORS.secondary}}>5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{backgroundColor: BRAND_COLORS.secondary}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND_COLORS.secondaryHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND_COLORS.secondary;
                }}
              >
                Work With Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
