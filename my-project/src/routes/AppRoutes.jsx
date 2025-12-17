import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPosts from "../pages/CategoryPosts";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<CategoryPosts />} />
    </Routes>
  );
};

export default AppRoutes;
