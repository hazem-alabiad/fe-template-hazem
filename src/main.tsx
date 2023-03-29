import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./components/App";
import { LocaleProvider } from "./contexts/LocaleContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
);
