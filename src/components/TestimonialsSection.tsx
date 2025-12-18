'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { BRAND_COLORS } from '../lib/colors';

interface TestimonialCardProps {
  textKey: string;
  authorKey: string;
  rating?: number;
}

function TestimonialCard({ textKey, authorKey, rating = 5 }: TestimonialCardProps) {
  const t = useTranslations('testimonials');
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">{t(`items.${textKey}`)}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{t(`authors.${authorKey}`)}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      textKey: "retail",
      authorKey: "retail"
    },
    {
      id: 2,
      textKey: "consulting",
      authorKey: "consulting"
    },
    {
      id: 3,
      textKey: "manufacturing",
      authorKey: "manufacturing"
    },
    {
      id: 4,
      textKey: "tech",
      authorKey: "tech"
    },
    {
      id: 5,
      textKey: "healthcare",
      authorKey: "healthcare"
    }
  ];

  const maxStartIndex = Math.max(0, testimonials.length - 3);
  
  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxStartIndex ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, maxStartIndex]);

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAnimating, maxStartIndex, nextTestimonial]);

  const getCurrentTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <div id="testimonials" className="py-16" style={{backgroundColor: BRAND_COLORS.primary}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h2>
            <p className="text-white/90 text-lg">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="lg:col-span-3 relative">
            <div 
              className={`grid md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                isAnimating ? 'opacity-75 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <TestimonialCard
                    textKey={testimonial.textKey}
                    authorKey={testimonial.authorKey}
                  />
                </div>
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxStartIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                    currentIndex === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}