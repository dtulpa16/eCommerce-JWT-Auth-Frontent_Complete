import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

export default function ProductList({ products, fromCart }) {
  const { token } = useAuth();

  const addToCart = async (productId) => {
    try {
      await axios.post(
        "/shoppingcarts",
        { product: productId },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <div className="product-actions">
            <Link
              to={`/product/details/${product._id}`}
              className="product-details-link"
            >
              View Details
            </Link>
            {!fromCart && (
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product._id)}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
