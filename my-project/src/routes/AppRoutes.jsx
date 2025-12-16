import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPosts from "../pages/CategoryPosts";
import PostDetail from "../pages/PostDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<CategoryPosts />} />
      <Route path="/post/:slug" element={<PostDetail />} />
    </Routes>
  );
};

export default AppRoutes;
