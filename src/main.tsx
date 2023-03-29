import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </React.StrictMode>,
);
