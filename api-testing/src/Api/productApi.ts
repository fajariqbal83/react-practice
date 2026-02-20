import type { Product } from "../Types/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("API call fail ho gayi");
  }

  const data: Product[] = await res.json();
   console.log("API Data (inside api file):", data);
  return data;
};
