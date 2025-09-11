'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import { BRAND_COLORS } from '../lib/colors';

interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl overflow-hidden">
              <Image
                src="/logo-300-top.png"
                alt="SunPlus Logo"
                width={60}
                height={60}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="block">
              <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-800">
                Sunplus Finance Services Inc.
              </h1>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = BRAND_COLORS.secondary;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#374151';
                              }}>
                        {item.label}
                        <svg className="ml-1 w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${BRAND_COLORS.primary}10`;
                                e.currentTarget.style.color = BRAND_COLORS.secondary;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#374151';
                              }}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = BRAND_COLORS.secondary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#374151';
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm" className="text-white">
              Get Started
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = BRAND_COLORS.secondary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#374151';
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md transition-colors duration-200 flex items-center justify-between"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = BRAND_COLORS.secondary;
                          e.currentTarget.style.backgroundColor = `${BRAND_COLORS.primary}10`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#374151';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 rounded-md transition-colors duration-200"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = BRAND_COLORS.secondary;
                                e.currentTarget.style.backgroundColor = `${BRAND_COLORS.primary}10`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#6b7280';
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = BRAND_COLORS.secondary;
                        e.currentTarget.style.backgroundColor = `${BRAND_COLORS.primary}10`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#374151';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button href="#contact" size="sm" className="w-full text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}