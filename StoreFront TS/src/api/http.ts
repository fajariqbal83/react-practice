const BASE_URL = "https://fakestoreapi.com";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  token?: string;
}

export const http = async <T>(
  url: string,
  options: RequestOptions = {},
): Promise<T> => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    let message = "API request failed";
    try {
      const err = await res.json();
      message = err?.message || message;
    } catch {}
    throw new Error(message);
  }

  if (res.status === 204) return undefined as T;

  return res.json();
};
