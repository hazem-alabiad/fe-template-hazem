import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "../constants/routes";
import { HomePage } from "../pages/HomePage/HomePage";
import { ErrorElement } from "./ErrorElement";

export const App = () => (
  <RouterProvider
    fallbackElement={<ErrorElement />}
    router={createBrowserRouter([
      {
        element: <HomePage />,
        errorElement: <ErrorElement />,
        path: ROUTES["/"],
      },
    ])}
  />
);
