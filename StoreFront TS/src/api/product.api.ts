import { http } from "./http";
import type { product } from "../types/product";


export const getAllProducts = () =>
  http<product[]>("/products");


export const getSingleProduct = (id: number) =>
  http<product>(`/products/${id}`);


export const addProduct = (product: product) =>
  http<product>("/products", {
    method: "POST",
    body: product,
  });


export const updateProduct = (id: number, product: product) =>
  http<product>(`/products/${id}`, {
    method: "PUT",
    body: product,
  });


export const deleteProduct = (id: number) =>
  http<void>(`/products/${id}`, {
    method: "DELETE",
  });