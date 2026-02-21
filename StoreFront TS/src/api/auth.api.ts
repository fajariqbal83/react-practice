import { http } from "./http";
import type { LoginResponse } from "../types/auth";

// FakeStore login: username + password → token
export const loginApi = (username: string, password: string) =>
  http<LoginResponse>("/auth/login", {
    method: "POST",
    body: { username, password },
  });