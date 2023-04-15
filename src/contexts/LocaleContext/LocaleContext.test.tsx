import { FormattedMessage } from "react-intl";

import { render, screen } from "../../test/testUtils";
import { type Locale } from "./LocaleContext";

describe("locale context", () => {
  test("should not display 'merhaba' when the locale 'en'", () => {
    render(
      <div data-testid="message">
        <FormattedMessage defaultMessage="hey" id="BgHRCd" />
      </div>,
    );

    expect(screen.getByTestId("message")).toHaveTextContent("hey");
    expect(screen.getByTestId("message")).not.toHaveTextContent("merhaba");
  });

  test("retrieves the correct locale 'tr' from locale storage", () => {
    const LOCALE = "locale";
    global.Storage.prototype.setItem(LOCALE, "tr");
    const locale = global.Storage.prototype.getItem(LOCALE) as Locale;

    render(
      <div data-testid="message">
        <FormattedMessage defaultMessage="hey" id="BgHRCd" />
      </div>,
      { locale, messages: { BgHRCd: "merhaba" } },
    );

    expect(screen.getByTestId("message")).toHaveTextContent("merhaba");
    expect(screen.getByTestId("message")).not.toHaveTextContent("hey");
  });
});
