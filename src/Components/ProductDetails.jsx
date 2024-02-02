import React from 'react'

export default function ProductDetails({ product }) {
    return (
      <>
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price.toFixed(2)}</p>
      </>
    );
  }