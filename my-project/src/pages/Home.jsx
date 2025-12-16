import { useEffect, useState } from "react"
import { getAllPosts } from "../api/postsApi"
import { getCategories } from "../api/categoriesApi"
import BlogCard from "../components/BlogCard"
import CategoryCard from "../components/CategoryCard"

const Home = () => {

 const  [posts, setPosts] = useState([]);
 const [categories, setCategories] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    const postsData = await getAllPosts();
    const catData = await getCategories();
    setPosts(postsData);
    setCategories(catData);`1`
  };
  fetchData();
 }, []);

  return (
    <div className="bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">CATEGORIES</h1>
     <div className="flex flex-row gap-5 mb-4 text-xl font-medium">
       {categories.map(cat => (
       <CategoryCard key={categories.id} category={cat}/>
      ))}
     </div>

      <h1 className="text-4xl font-bold mb-4">BLOGS</h1>
      <div className="flex flex-row flex-wrap gap-7">
        {posts.map(post => (
         <BlogCard key={post.id} post={post}/>
      ))}
      </div>
    </div>
  )
}

export default Home
