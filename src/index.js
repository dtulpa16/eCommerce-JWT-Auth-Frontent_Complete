import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage/ShoppingCartPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import { AuthProvider } from "./utils/useAuth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "/product/details/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCartPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
