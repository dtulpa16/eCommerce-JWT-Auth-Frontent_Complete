import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductPage, { getProducts } from "./Pages/ProductsPage/ProductPage";
import ProductDetailsPage, { getProductDetails } from "./Pages/ProductDetailsPage/ProductDetailsPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage/ShoppingCartPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import { AuthProvider } from "./utils/useAuth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5000/api"

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductPage />,
        loader:getProducts
      },
      {
        path: "/product/details/:productId",
        element: <ProductDetailsPage />,
        loader:getProductDetails
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
