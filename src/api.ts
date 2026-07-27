export type Session = { token: string; user: { name: string } };
const request = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(path, { headers: { "Content-Type": "application/json", ...options.headers }, ...options });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || "Có lỗi xảy ra.");
  return body as T;
};
export const api = {
  status: () => request<{ hasAccount: boolean }>("/api/auth/status"),
  bootstrap: (password: string) => request<Session>("/api/auth/bootstrap", { method: "POST", body: JSON.stringify({ password }) }),
  login: (password: string) => request<Session>("/api/auth/login", { method: "POST", body: JSON.stringify({ password }) }),
  progress: (token: string) => request<{ sceneId: string }>("/api/progress", { headers: { Authorization: `Bearer ${token}` } }),
  save: (token: string, sceneId: string) => request<void>("/api/progress", { method: "PUT", headers: { Authorization: `Bearer ${token}` }, body: JSON.stringify({ sceneId }) })
};
