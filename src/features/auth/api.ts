import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { LoginCredentials, User } from "@/types";
import toast from "react-hot-toast";

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  const response = await apiClient.post<User>("/auth/login", credentials);
  return response.data;
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Store token
      localStorage.setItem("accessToken", data.accessToken);
      document.cookie = `accessToken=${data.accessToken}; path=/; max-age=86400; SameSite=Lax`;
      // Optional: Store user info
      localStorage.setItem("user", JSON.stringify(data));
      
      // Indicate to React Query that potentially related data should be re-fetched
      queryClient.invalidateQueries();
      toast.success("Successfully logged in!");
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || "Failed to login. Please try again.";
      toast.error(message);
    },
  });
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  document.cookie = "accessToken=; path=/; max-age=0; SameSite=Lax";
  localStorage.removeItem("user");
  window.location.href = "/login";
};
