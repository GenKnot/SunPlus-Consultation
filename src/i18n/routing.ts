import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'pt', 'vi', 'hi', 'tl', 'ar'],
  defaultLocale: 'zh',
  localePrefix: 'as-needed'
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
