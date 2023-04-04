import {
  createContext,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IntlProvider } from "react-intl";

import { LOCALE_STORAGE_LANG_KEYS } from "../../constants/localeStorageKeys";

export const LOCALES = {
  en: "en",
  tr: "tr",
};

export type Locale = keyof typeof LOCALES;

export const loadMessages = async (locale: Locale) =>
  (
    (await import(`../../lang/${locale}.json`)) as {
      default: Record<string, string>;
    }
  ).default;

export const LocalContext = createContext<{
  changeLocale: (locale: Locale) => void;
}>({ changeLocale: () => {} });

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(
    (): Locale =>
      (localStorage.getItem(LOCALE_STORAGE_LANG_KEYS.locale) as Locale) ||
      navigator.language.split("-")[0] ||
      LOCALES.en,
  );
  const [messages, setMessages] = useState(() => ({}));

  const localeContextValue = useMemo(
    () => ({
      changeLocale: (newLocale: Locale) => {
        if (newLocale !== locale) {
          setLocale(newLocale);
        }
      },
    }),
    [locale],
  );

  useEffect(() => {
    const persistedLocale = localStorage.getItem(
      LOCALE_STORAGE_LANG_KEYS.locale,
    );

    if (persistedLocale !== locale) {
      localStorage.setItem(LOCALE_STORAGE_LANG_KEYS.locale, locale);
    }

    void (async () => {
      setMessages(await loadMessages(locale));
    })();
  }, [locale]);

  return (
    <LocalContext.Provider value={localeContextValue}>
      <IntlProvider
        key={locale}
        defaultLocale={LOCALES.en}
        locale={locale}
        messages={messages}
        onError={(error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        }}
      >
        {children}
      </IntlProvider>
    </LocalContext.Provider>
  );
};
