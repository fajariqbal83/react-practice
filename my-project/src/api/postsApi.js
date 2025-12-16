import axiosInstance from "../api/axiosInstance";

export const getAllPosts = async () => {
  const response = await axiosInstance.get("/blog");
  return response.data.posts;
};

export const getPostsBySlug = async (slug) => {
  const response = await axiosInstance.get(`/blog/${slug}`);
  return response.data;
};


