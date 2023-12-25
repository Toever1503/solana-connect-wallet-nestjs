import createMiddleware from 'next-intl/middleware';
import { appLocales } from './common/i18n/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales: appLocales(),

  // Used when no locale matches
  defaultLocale: 'vi',
  localeDetection: false, // turn off detect via accept-language
  localePrefix: 'as-needed' // turn off required locale prefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/tour',
    '/((?!api|_next|.*\\..*).*)',
    '/(vi|en)/:path*'
  ]
};