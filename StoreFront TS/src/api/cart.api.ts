import { http } from "./http";
import type { Cart } from "../types/cart";

export const getAllCarts = () =>
  http<Cart[]>("/carts");


export const getSingleCart = (id: number) =>
  http<Cart>(`/carts/${id}`);


export const addCart = (cart: Cart) =>
  http<Cart>("/carts", {
    method: "POST",
    body: cart,
  });


export const updateCart = (id: number, cart: Cart) =>
  http<Cart>(`/carts/${id}`, {
    method: "PUT",
    body: cart,
  });

export const deleteCart = (id: number) =>
  http<void>(`/carts/${id}`, {
    method: "DELETE",
  });