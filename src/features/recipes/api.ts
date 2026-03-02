import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { RecipeResponse } from "@/types";

export const getRecipes = async (): Promise<RecipeResponse> => {
  const response = await apiClient.get<RecipeResponse>("/recipes?limit=12");
  return response.data;
};

export const useRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });
};
