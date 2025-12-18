'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Button from './Button';
import { BRAND_COLORS } from '../lib/colors';

export default function AboutSection() {
  const t = useTranslations('about');
  
  return (
    <div id="about" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] w-[95%] mx-auto lg:w-full lg:mx-0 rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
            <Image
              src="/Images/home-3.png"
              alt="Professional business team meeting"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          <div className="py-4 lg:py-6 w-[95%] mx-auto lg:w-full lg:mx-0 rounded-b-2xl sm:rounded-b-3xl" style={{backgroundColor: BRAND_COLORS.primary}}>
            <div className="px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight font-serif mb-3">
                {t('title')}
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4">
                {t('description')}
              </p>
              <Button 
                href="#contact" 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white px-4 py-2 text-sm font-medium transition-all duration-300"
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
                {t('cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
