import React from 'react';
import Button from './Button';
import Image from 'next/image';
import { BRAND_COLORS } from '../lib/colors';

export default function HeroSection() {
  return (
    <div id="home" className="pt-16 lg:pt-20" style={{background: BRAND_COLORS.primaryGradient}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-1 lg:order-1 mb-8 lg:mb-0 w-[95%] mx-auto lg:w-full lg:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight font-serif">
              Transform Your Business
              with Expert Solutions
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Stop juggling multiple vendors. Get everything your business needs from one trusted partner: 
              stunning websites, strategic IT guidance, CPA-certified bookkeeping, expert consultation, healthcare compliance, and insurance claims support.
            </p>
            <div className="mt-8 sm:mt-10">
              <Button href="#contact" size="lg" className="primary-bg primary-hover text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                Get started now
              </Button>
            </div>
          </div>
          
          <div className="order-2 lg:order-2 lg:ml-8">
            <div className="relative w-full">
              <Image
                src="/Images/hero.png"
                alt="Professional business team working together"
                width={600}
                height={800}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-[95%] mx-auto lg:w-full lg:mx-0"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}