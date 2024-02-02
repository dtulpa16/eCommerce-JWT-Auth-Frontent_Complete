import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./ProductDetailsPage.css";
import ProductDetails from "../../Components/ProductDetails";

export async function getProductDetails({ params }) {
  let response = await axios.get(`/products/${params.productId}`);
  return response.data;
}

export default function ProductDetailsPage() {
  const data = useLoaderData();
  const [product] = useState(data);
  return (
    <div className="product-details">
      <ProductDetails product={product} />
    </div>
  );
}
