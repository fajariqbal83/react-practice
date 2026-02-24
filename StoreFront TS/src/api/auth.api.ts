import { http } from "./http";

interface LoginResponse {
  token: string;
}

export const loginApi = (username: string, password: string) =>
  http<LoginResponse>("/auth/login", {
    method: "POST",
    body: { username, password },
  });