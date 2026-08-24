const API_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL ?? "http://localhost:4000";

export const api = {
  get: async <T>(path: string, token?: string): Promise<T> => {
    const res = await fetch(`${API_URL}${path}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },

  post: async <T>(path: string, body: unknown, token?: string): Promise<T> => {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },

  put: async <T>(path: string, body: unknown, token?: string): Promise<T> => {
    const res = await fetch(`${API_URL}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },

  delete: async <T>(path: string, token?: string): Promise<T> => {
    const res = await fetch(`${API_URL}${path}`, {
      method: "DELETE",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json() as Promise<T>;
  },
};