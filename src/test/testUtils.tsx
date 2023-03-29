import { render, type RenderOptions } from "@testing-library/react";
import { type ReactElement, type ReactNode } from "react";
import { IntlProvider } from "react-intl";

import { type Locale } from "../contexts/LocaleContext";

const AllTheProviders = ({
  children,
  locale = "en",
  messages,
}: {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, string>;
}) => (
  <IntlProvider locale={locale} messages={messages}>
    {children}
  </IntlProvider>
);

const customRender = (
  ui: ReactElement,
  options: Omit<RenderOptions, "wrapper"> & {
    locale: Locale;
    messages: Record<string, string>;
  } = {
    locale: "en",
    messages: {},
  },
) =>
  render(ui, {
    wrapper: () => (
      <AllTheProviders locale={options.locale} messages={options.messages}>
        {ui}
      </AllTheProviders>
    ),
    ...options,
  });

export * from "@testing-library/react";

export { customRender as render };
