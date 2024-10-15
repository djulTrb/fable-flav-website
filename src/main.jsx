import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import { HelmetProvider } from "react-helmet-async";

import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import ContactPage from "./Pages/ContactPage";
import ReservationScreen from "./Pages/ReservationScreen";
import ErrorScreen from "./Pages/ErrorScreen";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./store/darkMode";
import menuOpSlice from "./store/menuOpSlice";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorScreen /> },
  { path: "/menu", element: <MenuPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/reservation", element: <ReservationScreen /> },
]);

const store = configureStore({
  reducer: {
    darkMode: darkMode,
    menuOp: menuOpSlice,
  },
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
