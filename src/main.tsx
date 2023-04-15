import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { App } from "./components/App";
import { LocaleProvider } from "./contexts/LocaleContext/LocaleContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocaleProvider>
      <QueryClientProvider client={new QueryClient()}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </LocaleProvider>
  </React.StrictMode>,
);
