const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export const api = {
  get: async <T>(path: string, params?: Record<string, string | number | undefined>): Promise<T> => {
    const url = new URL(`${API_URL}${path}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },

  post: async <T>(path: string, body: unknown): Promise<T> => {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },

  put: async <T>(path: string, body: unknown): Promise<T> => {
    const res = await fetch(`${API_URL}${path}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },

  delete: async <T>(path: string): Promise<T> => {
    const res = await fetch(`${API_URL}${path}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },
};