'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { BRAND_COLORS } from '../lib/colors';

interface FAQItem {
  id: number;
  questionKey: string;
  answerKey: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const t = useTranslations('faq');
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
          {t(`items.${faq.questionKey}.question`)}
        </h3>
        <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: BRAND_COLORS.secondary}}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 bg-gray-50 border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed">{t(`items.${faq.answerKey}.answer`)}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const t = useTranslations('faq');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    { id: 1, questionKey: "q1", answerKey: "q1" },
    { id: 2, questionKey: "q2", answerKey: "q2" },
    { id: 3, questionKey: "q3", answerKey: "q3" },
    { id: 4, questionKey: "q4", answerKey: "q4" },
    { id: 5, questionKey: "q5", answerKey: "q5" },
    { id: 6, questionKey: "q6", answerKey: "q6" },
    { id: 7, questionKey: "q7", answerKey: "q7" },
    { id: 8, questionKey: "q8", answerKey: "q8" }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('stillHaveQuestions')}</h3>
            <p className="text-gray-600 mb-6">
              {t('cantFind')}
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
              {t('contactCta')}
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
