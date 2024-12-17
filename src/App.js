import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/products">Products</Link> |
        <Link to="/create-product">Create Product</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
