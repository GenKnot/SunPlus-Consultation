'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating?: number;
}

function TestimonialCard({ text, author, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">{text}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{author}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      text: "Sunplus Finance Services transformed our business completely. Their website design and maintenance services gave us a professional online presence, while their IT leadership helped us modernize our systems. The CPA bookkeeping saved us thousands. Highly recommend!",
      author: "— RETAIL STORE OWNER"
    },
    {
      id: 2,
      text: "As a small business owner, I was struggling with finances and technology. Sunplus Finance Services&apos; comprehensive approach - from website design to bookkeeping and consultation - gave me everything I needed under one roof. Game changer!",
      author: "— CONSULTING FIRM"
    },
    {
      id: 3,
      text: "The finance bookkeeping and administrative services are exceptional. They handle all our financial reporting and compliance, while their consultation services helped us streamline operations. Our revenue increased 35% in the first year.",
      author: "— MANUFACTURING COMPANY"
    },
    {
      id: 4,
      text: "Outstanding IT leadership and website maintenance. They helped us build a professional online presence and provided ongoing technical support. The qualified member financial support program is a huge bonus for growing businesses.",
      author: "— TECH STARTUP"
    },
    {
      id: 5,
      text: "Professional, reliable, and incredibly knowledgeable. Their consultation services for administrative and management support have been invaluable for our medium-sized business. They truly understand what small to medium businesses need to succeed.",
      author: "— HEALTHCARE PRACTICE"
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
    <div className="py-16 primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Trusted by 100+ Growing Businesses
            </h2>
            <p className="text-primary-100 text-lg">
              We&apos;re proud to be the go-to partner for small to medium-sized businesses seeking comprehensive solutions.
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
                    text={testimonial.text}
                    author={testimonial.author}
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