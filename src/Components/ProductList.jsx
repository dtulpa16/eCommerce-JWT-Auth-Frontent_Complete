import React from "react";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <Link
            to={`/product/details/${product._id}`}
            className="product-details-link"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
