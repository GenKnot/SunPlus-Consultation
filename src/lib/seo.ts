import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'seo' });
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunplusconsultations.com';
  const localeUrl = locale === 'zh' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: t('siteName') }],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: localeUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'zh': baseUrl,
        'ja': `${baseUrl}/ja`,
        'ko': `${baseUrl}/ko`,
        'es': `${baseUrl}/es`,
        'fr': `${baseUrl}/fr`,
        'pt': `${baseUrl}/pt`,
        'vi': `${baseUrl}/vi`,
        'hi': `${baseUrl}/hi`,
        'tl': `${baseUrl}/tl`,
        'ar': `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localeUrl,
      siteName: t('siteName'),
      locale: t('locale'),
      type: 'website',
      images: [
        {
          url: `${baseUrl}/logo-1000.png`,
          width: 1000,
          height: 1000,
          alt: t('siteName'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [`${baseUrl}/logo-1000.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationSchema(locale: string, siteName: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunplusconsultations.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    image: `${baseUrl}/logo-1000.png`,
    '@id': baseUrl,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '501-998 Boul. Saint-Laurent',
      addressLocality: 'Montreal',
      addressRegion: 'QC',
      addressCountry: 'CA',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    serviceType: [
      'Business Consultation',
      'Web Design',
      'IT Leadership',
      'Bookkeeping Services',
      'Healthcare Compliance',
      'Insurance Claims Support',
    ],
  };
}

export function generateLocalBusinessSchema(locale: string, siteName: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunplusconsultations.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteName,
    image: `${baseUrl}/logo-1000.png`,
    '@id': baseUrl,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '501-998 Boul. Saint-Laurent',
      addressLocality: 'Montreal',
      addressRegion: 'QC',
      addressCountry: 'CA',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
  };
}
