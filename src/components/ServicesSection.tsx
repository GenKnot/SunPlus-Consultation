'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BRAND_COLORS } from '../lib/colors';

interface ServiceCardProps {
  image: string;
  titleKey: string;
  descriptionKey: string;
  featureKeys: string[];
}

function ServiceCard({ image, titleKey, descriptionKey, featureKeys }: ServiceCardProps) {
  const t = useTranslations('services');
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent flex flex-col h-full transform hover:-translate-y-2"
         style={{
           '--hover-border-color': BRAND_COLORS.secondary
         } as React.CSSProperties}
         onMouseEnter={(e) => {
           e.currentTarget.style.borderColor = BRAND_COLORS.secondary;
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.borderColor = 'transparent';
         }}>
      <div className="w-full h-56 overflow-hidden relative">
        <Image 
          src={image} 
          alt={t(titleKey)}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             style={{
               background: `linear-gradient(to top, ${BRAND_COLORS.secondary}20, transparent)`
             }}></div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center transition-colors duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = BRAND_COLORS.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#111827';
            }}>{t(titleKey)}</h3>
        
        <p className="text-gray-600 text-center mb-8 leading-relaxed flex-1 text-base">{t(descriptionKey)}</p>
        
        <ul className="space-y-4 mt-auto">
          {featureKeys.map((featureKey, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
              <div className="w-3 h-3 rounded-full mr-4 flex-shrink-0 transition-colors duration-300"
                   style={{backgroundColor: BRAND_COLORS.secondary}}></div>
              <span className="font-medium">{t(featureKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const t = useTranslations('services');
  
  const services = [
    {
      id: 1,
      titleKey: 'webDesign.title',
      descriptionKey: 'webDesign.description',
      featureKeys: [
        'webDesign.features.responsive',
        'webDesign.features.seo',
        'webDesign.features.monitoring',
        'webDesign.features.security'
      ],
      image: '/Images/s-1.png'
    },
    {
      id: 2,
      titleKey: 'itLeadership.title',
      descriptionKey: 'itLeadership.description',
      featureKeys: [
        'itLeadership.features.roadmap',
        'itLeadership.features.training',
        'itLeadership.features.integration',
        'itLeadership.features.vendor'
      ],
      image: '/Images/s-2.png'
    },
    {
      id: 3,
      titleKey: 'bookkeeping.title',
      descriptionKey: 'bookkeeping.description',
      featureKeys: [
        'bookkeeping.features.reports',
        'bookkeeping.features.tax',
        'bookkeeping.features.perks',
        'bookkeeping.features.audit'
      ],
      image: '/Images/s-3.png'
    },
    {
      id: 4,
      titleKey: 'consultation.title',
      descriptionKey: 'consultation.description',
      featureKeys: [
        'consultation.features.audits',
        'consultation.features.training',
        'consultation.features.setup',
        'consultation.features.strategy'
      ],
      image: '/Images/s-4.png'
    },
    {
      id: 5,
      titleKey: 'claims.title',
      descriptionKey: 'claims.description',
      featureKeys: [
        'claims.features.documentation',
        'claims.features.liaison',
        'claims.features.negotiation',
        'claims.features.resolution'
      ],
      image: '/Images/s-5.webp'
    },
    {
      id: 6,
      titleKey: 'healthcare.title',
      descriptionKey: 'healthcare.description',
      featureKeys: [
        'healthcare.features.regulatory',
        'healthcare.features.licensing',
        'healthcare.features.standards',
        'healthcare.features.consulting'
      ],
      image: '/Images/s-6.webp'
    },
    {
      id: 7,
      titleKey: 'financial.title',
      descriptionKey: 'financial.description',
      featureKeys: [
        'financial.features.budget',
        'financial.features.investment',
        'financial.features.cashflow',
        'financial.features.retirement'
      ],
      image: '/Images/s-7.webp'
    },
    {
      id: 8,
      titleKey: 'admin.title',
      descriptionKey: 'admin.description',
      featureKeys: [
        'admin.features.scheduling',
        'admin.features.coordination',
        'admin.features.logistics',
        'admin.features.automation'
      ],
      image: '/Images/s-8.webp'
    },
    {
      id: 9,
      titleKey: 'talent.title',
      descriptionKey: 'talent.description',
      featureKeys: [
        'talent.features.sourcing',
        'talent.features.interview',
        'talent.features.assessment',
        'talent.features.onboarding'
      ],
      image: '/Images/s-9.webp'
    }
  ];

  return (
    <div id="services" className="relative">
      <div className="w-full h-64 flex items-center justify-center" style={{backgroundColor: BRAND_COLORS.primary}}>
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-6">{t('title')}</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </div>
      
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First row - 3 services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                featureKeys={service.featureKeys}
              />
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(3, 6).map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                featureKeys={service.featureKeys}
              />
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(6, 9).map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                featureKeys={service.featureKeys}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}