const SELECTED_LOCALE_COOKIE = "i18n_redirected";

export function useLocalesFromCookie() {
  const localeFromCookie = useCookie(SELECTED_LOCALE_COOKIE);

  return {
    localeFromCookie,
  };
}
