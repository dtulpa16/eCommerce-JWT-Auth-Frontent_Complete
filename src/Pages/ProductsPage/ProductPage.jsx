import axios from "axios";
import React, { useState } from "react";
import ProductList from "../../Components/ProductList";
import { useLoaderData } from "react-router-dom";
import "./ProductPage.css"

export async function getProducts() {
  let response = await axios.get("/products");
  return response.data;
}

export default function ProductPage() {
  const data = useLoaderData();
  const [products] = useState(data);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
