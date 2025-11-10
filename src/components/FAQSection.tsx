'use client';

import React, { useState } from 'react';
import { BRAND_COLORS } from '../lib/colors';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center group"
      >
        <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = BRAND_COLORS.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#111827';
            }}>
          {faq.question}
        </h3>
        <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: BRAND_COLORS.secondary}}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What business services does SunPlus Finance Solution Inc. provide?",
      answer: "We offer five core services: 1) Website design and maintenance, 2) IT leadership, 3) Finance bookkeeping and administrative with CPA expertise, 4) Consultation services for administrative and management support, and 5) Insurance claims support for claims management and negotiation - all specifically designed for small to medium-sized businesses."
    },
    {
      id: 2,
      question: "How does your website design and maintenance service work?",
      answer: "Our website design and maintenance service includes creating modern, responsive websites that convert visitors into customers. We handle everything from initial design to ongoing maintenance, SEO optimization, and performance monitoring to ensure your online presence drives business growth."
    },
    {
      id: 3,
      question: "What is IT leadership and how can it help my business?",
      answer: "Our IT leadership service provides strategic technology guidance and technical leadership for your business operations. We help you make informed technology decisions, optimize your systems, and lead your technical team effectively to improve efficiency and productivity."
    },
    {
      id: 4,
      question: "What makes your finance bookkeeping and administrative services different?",
      answer: "Our finance bookkeeping and administrative services are led by certified public accountants (CPAs) who provide comprehensive financial management including bookkeeping, financial reporting, tax preparation, and compliance management. We also offer specialized financial support for qualified members to help with strategic financial decisions."
    },
    {
      id: 5,
      question: "What consultation services do you offer?",
      answer: "We provide consultation services for administrative and management support specifically designed for small to medium-sized businesses. This includes process optimization, administrative guidance, management consulting, and strategic planning to help streamline operations and maximize profitability."
    },
    {
      id: 6,
      question: "Do you work with small and medium-sized businesses only?",
      answer: "Yes, we specialize in serving small to medium-sized businesses. Our services are specifically tailored to meet the unique needs, challenges, and growth opportunities that these businesses face. We understand the specific requirements and constraints of smaller operations."
    },
    {
      id: 7,
      question: "Can I get multiple services together?",
      answer: "Absolutely! We encourage businesses to take advantage of our complete solution approach. Many clients use our website design and maintenance, IT leadership, finance bookkeeping, consultation services, and insurance claims support together for comprehensive business support. This integrated approach often provides better results and cost savings."
    },
    {
      id: 8,
      question: "What is the qualified member financial support?",
      answer: "Our qualified member financial support program provides specialized financial guidance and assistance to eligible businesses. This includes advanced financial planning, strategic financial advice, and ongoing support to help qualified members make informed financial decisions and optimize their business finances."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services and how we can help your business grow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            {faqs.filter((_, index) => index % 2 === 0).map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {faqs.filter((_, index) => index % 2 === 1).map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-lg transition-colors duration-300"
              style={{backgroundColor: BRAND_COLORS.secondary}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = BRAND_COLORS.secondaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = BRAND_COLORS.secondary;
              }}
            >
              Contact Us Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
