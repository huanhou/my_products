import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProductStore } from "../store/store";

function ProductDetailPage() {
  const { id } = useParams();
  const product = useProductStore((state) =>
    state.products.find((product) => product.id === parseInt(id))
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <Link to="/products" className="back-button">
        ⬅️ Back to Products
      </Link>

      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} className="product-image" />

      <p className="product-description">{product.description}</p>
    </div>
  );
}

export default ProductDetailPage;
