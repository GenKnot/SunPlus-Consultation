import React from 'react';
import { useTranslations } from 'next-intl';
import { COMPANY_INFO, NAVIGATION_LINKS } from '../lib/constants';

export default function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-primary-500 mb-6">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
              {t('description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">501-998 Boul. Saint-Laurent</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm block py-1"
                  >
                    {tHeader(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">{t('businessHours')}</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="font-medium">{t('hours.weekdays')}</span>
                <span className="text-primary-400">{t('hours.weekdaysTime')}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="font-medium">{t('hours.saturday')}</span>
                <span className="text-primary-400">{t('hours.saturdayTime')}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">{t('hours.sunday')}</span>
                <span className="text-gray-500">{t('hours.sundayTime')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {COMPANY_INFO.name}. {t('copyright')}
            </div>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                {t('privacyPolicy')}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                {t('termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}