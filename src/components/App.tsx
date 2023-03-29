import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "../constants/routes";
import { HomePage } from "../features/HomePage";
import { ErrorElement } from "./ErrorElement";

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
