import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(zh|en|ja|ko|es|fr|pt|vi|hi|tl|ar)/:path*', '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};
