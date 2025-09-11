'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '../lib/constants';
import { BRAND_COLORS } from '../lib/colors';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{backgroundColor: BRAND_COLORS.secondary}}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Let&apos;s Grow Your Business Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to take your business to the next level? From website design and maintenance to IT leadership, finance bookkeeping with CPA expertise, and consultation services, we&apos;re here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="group">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                     style={{
                       background: `linear-gradient(135deg, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.secondaryHover})`
                     }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                     style={{
                       background: `linear-gradient(135deg, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.secondaryHover})`
                     }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">501-998 Boul. Saint-Laurent</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                     style={{
                       background: `linear-gradient(135deg, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.secondaryHover})`
                     }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h3>
                  <div className="text-gray-600 space-y-1 text-sm">
                    <p>{COMPANY_INFO.businessHours.weekdays}</p>
                    <p>{COMPANY_INFO.businessHours.saturday}</p>
                    <p>{COMPANY_INFO.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Send us a message</h3>
                <p className="text-gray-600">We&apos;ll get back to you within 24 hours</p>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-green-800 font-semibold">Thank you! Your message has been sent successfully.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-red-800 font-semibold">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                      style={{
                        '--focus-ring-color': BRAND_COLORS.secondary
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 2px ${BRAND_COLORS.secondary}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="John"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                      style={{
                        '--focus-ring-color': BRAND_COLORS.secondary
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 2px ${BRAND_COLORS.secondary}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                      style={{
                        '--focus-ring-color': BRAND_COLORS.secondary
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 2px ${BRAND_COLORS.secondary}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                      style={{
                        '--focus-ring-color': BRAND_COLORS.secondary
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 2px ${BRAND_COLORS.secondary}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-[#CC4C3D] focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-[#CC4C3D] focus:border-transparent focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
                  style={{
                    background: `linear-gradient(to right, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.secondaryHover})`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to right, ${BRAND_COLORS.secondaryHover}, ${BRAND_COLORS.secondary})`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to right, ${BRAND_COLORS.secondary}, ${BRAND_COLORS.secondaryHover})`;
                  }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}