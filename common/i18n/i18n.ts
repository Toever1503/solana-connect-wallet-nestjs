import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
type LocaleType = 'vi' | 'en';
const locales: LocaleType[] = ['vi', 'en'];


export function appLocales(): LocaleType[] {
  return locales;
}

export default getRequestConfig(async ({ locale }) => {
  const lang = locales.includes(locale as any) ? locale : "vi";

  return {
    messages: (await import(`./locales/${lang}.json`)).default
  };
});