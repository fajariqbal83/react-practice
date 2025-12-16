import axiosInstance from "../api/axiosInstance";

export const getAllPosts = async () => {
  const response = await axiosInstance.get("/blog");
   console.log("API Response:", response.data.posts);
  return response.data.posts;
};

export const getPostsBySlug = async (slug) => {
  const response = await axiosInstance.get(`/blog/${slug}`);
  return response.data;
};


