// Use type safe message keys with `next-intl`
type Messages = typeof import('./common/i18n/locales/vi.json');
declare interface IntlMessages extends Messages {}