import axiosInstance from "../api/axiosInstance";

export const getAllPosts = async () => {
  const response = await axiosInstance.get("/blog");
  return response.data.posts;
};

export const getPostsById = async () => {
  const response = await axiosInstance.get(`/blog/${id}`);
  return response.data.posts;
};
