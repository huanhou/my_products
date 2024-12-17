import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => ({
  products: [],

  // Load products from the API
  fetchProducts: async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((product) => ({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      liked: false, // Custom property for our app
    }));
    set({ products });
  },

  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  toggleLike: (id) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      ),
    })),
}));
