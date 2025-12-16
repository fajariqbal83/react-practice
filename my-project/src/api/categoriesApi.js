import axiosInstance from "./axiosInstance";

export const getCategories = async () => {
  const response = await axiosInstance.get("/categories");
  console.log("API Response:", response.data);
  return response.data;
};

