import React, { useState } from "react";
import axios from "axios";
import "../ProductsPage/ProductPage.css";
import { useLoaderData } from "react-router-dom";
import ProductList from "../../Components/ProductList";

export async function getCart() {
  let token = localStorage.getItem("token");
  debugger;
  let response = await axios.get(`/shoppingcarts`, {
    headers: { Authorization: "Bearer " + token },
  });
  const products = response.data.map((el) => el.product);
  return products;
}

export default function ShoppingCartPage() {
  const data = useLoaderData();
  const [products] = useState(data);
  return (
    <div>
      <h1 style={{"fontSize":"34px", textAlign:"center"}}>My Cart</h1>
      <ProductList products={products} fromCart={true} />
    </div>
  );
}
