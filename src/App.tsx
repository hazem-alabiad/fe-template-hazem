import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorElement } from "./components/ErrorElement";
import { ROUTES } from "./constants/routes";
import { HomePage } from "./features/HomePage";

export const App = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        path: ROUTES["/"],
        element: <HomePage />,
        errorElement: <ErrorElement />,
      },
    ])}
    fallbackElement={<ErrorElement />}
  />
);
