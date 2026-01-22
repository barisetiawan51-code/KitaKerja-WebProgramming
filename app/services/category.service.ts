import { fetchAPI, getAuthHeader } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
  return await fetchAPI<Category[]>("/categories");
};

export const createCategory = async (data: FormData): Promise<Category> => {
  return await fetchAPI<Category>("/categories", {
    method: "POST",
    headers: {
      ...getAuthHeader(),
    },
    body: data,
  });
};

export const updateCategory = async (
  id: string,
  data: FormData,
): Promise<Category> => {
  return await fetchAPI<Category>(`/categories/${id}`, {
    method: "PUT",
    headers: {
      ...getAuthHeader(),
    },
    body: data,
  });
};

export const deleteCategory = async (id: string): Promise<void> => {
  return await fetchAPI<void>(`/categories/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(),
    },
  });
};
