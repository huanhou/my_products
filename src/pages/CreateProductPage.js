import React, { useState } from "react";
import { useProductStore } from "../store/store";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {
  const addProduct = useProductStore((state) => state.addProduct);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      description,
      image,
      liked: false,
    };
    addProduct(newProduct);
    navigate("/products");
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProductPage;
