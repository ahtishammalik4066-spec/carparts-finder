"use client";

import { useState, useCallback } from "react";
import type { User } from "@partfinder/shared";
import { api } from "../lib/api";

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>(initialState);

  const login = useCallback(async (email: string, password: string) => {
    const result = await api.post<{ success: boolean; data: { token: string; user: User } }>(
      "/api/v1/auth/login",
      { email, password }
    );
    if (result.success) {
      setAuth({
        token: result.data.token,
        user: result.data.user,
        isAuthenticated: true,
      });
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    setAuth(initialState);
  }, []);

  return {
    ...auth,
    login,
    logout,
  };
}