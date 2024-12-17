import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/store";

function ProductsPage() {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const toggleLike = useProductStore((state) => state.toggleLike);
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  // Load products when the page loads
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <h3>{product.title}</h3>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-title"
                />
              </Link>
              <p>{product.description.substring(0, 100)}...</p>
              <button
                className={`like ${product.liked ? "liked" : ""}`}
                onClick={() => toggleLike(product.id)}
              >
                ❤️ Like
              </button>
              <button
                className="delete"
                onClick={() => deleteProduct(product.id)}
              >
                🗑️ Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
