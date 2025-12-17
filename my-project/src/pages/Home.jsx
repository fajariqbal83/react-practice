import { useEffect, useState } from "react"
import { getAllPosts } from "../api/postsApi"
import { getCategories } from "../api/categoriesApi"
import BlogCard from "../components/BlogCard"
import CategoryCard from "../components/CategoryCard"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"

const Home = () => {

 const  [posts, setPosts] = useState([]);
 const [categories, setCategories] = useState([]);
 const [loading, setLoading] = useState(true);
   const [filteredPosts, setFilteredPosts] = useState([]);

 
 useEffect(() => {
  const fetchData = async () => {
    const postsData = await getAllPosts();
    const catData = await getCategories();
    setPosts(postsData);
    setFilteredPosts(postsData);
    setCategories(catData);
    setLoading(false);
  };
  fetchData();
 }, []);

  const handleSearch = (search) => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.id.toString() === search
    );

    setFilteredPosts(result);
  };

 if (loading) return <Loader />;

  return (
    <>
<Navbar onSearch={handleSearch}/>

 <div className="bg-gray-200 p-5">
      <h1 className="text-4xl font-bold mb-4 underline">CATEGORIES</h1>
     <div className="flex flex-row flex-wrap gap-5 mb-4 text-xl font-medium">
       {categories.map(cat => (
       <CategoryCard key={cat.id} category={cat}/>
      ))}
     </div>

      <h1 className="text-4xl font-bold mb-10 underline">BLOGS</h1>
      <div className="flex flex-row flex-wrap gap-7">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post}/>
      ))}
      </div>

    
    </div>
    </>
   
  )
}

export default Home
