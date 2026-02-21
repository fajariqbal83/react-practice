import { http } from "./http";
import type { User } from "../types/user";


export const getAllUsers = () =>
  http<User[]>("/users");


export const getSingleUser = (id: number) =>
  http<User>(`/users/${id}`);


export const addUser = (user: User) =>
  http<User>("/users", {
    method: "POST",
    body: user,
  });


export const updateUser = (id: number, user: User) =>
  http<User>(`/users/${id}`, {
    method: "PUT",
    body: user,
  });


export const deleteUser = (id: number) =>
  http<void>(`/users/${id}`, {
    method: "DELETE",
  });