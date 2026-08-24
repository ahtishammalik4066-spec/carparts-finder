import type { User } from "@partfinder/shared";

export async function loginUser(email: string, password: string) {
  // TODO: Implement authentication logic
  return { success: true, data: { email } };
}

export async function registerUser(data: Record<string, unknown>) {
  // TODO: Implement user registration logic
  return { success: true, data };
}
