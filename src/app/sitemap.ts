import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sunplusconsultations.com';
  
  // Generate sitemap entries for all locales
  const localeEntries = routing.locales.flatMap((locale) => {
    const localeUrl = locale === 'zh' ? baseUrl : `${baseUrl}/${locale}`;
    
    return [
      {
        url: localeUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              l === 'zh' ? baseUrl : `${baseUrl}/${l}`,
            ])
          ),
        },
      },
    ];
  });

  return localeEntries;
}
