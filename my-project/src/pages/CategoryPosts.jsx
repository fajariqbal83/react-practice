import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../api/postsApi"
import { getCategories } from "../api/categoriesApi";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";



const CategoryPosts = () => {
const { slug } = useParams();
const [posts, setPosts] = useState([]);
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
 const fetchData = async () => {
     
      const cats = await getCategories();
      setCategories(cats);

      const currentCategory = cats.find(cat => cat.slug === slug);

      

      const allPosts = await getAllPosts();


      const filteredPosts = allPosts.filter(post =>
        post.categories?.includes(currentCategory.name)
      );

      setPosts(filteredPosts);
      setLoading(false);
    };

    fetchData();
  
}, [slug]);

if (loading) return <Loader/>;


return (
  
<>
<Navbar/>

<div className="bg-gray-200 p-5">
   <h1 className="text-4xl font-bold mb-4 underline">CATEGORIES</h1>
     <div className="flex flex-row flex-wrap gap-5 mb-4 text-xl font-medium">
       {categories.map(cat => (
       <CategoryCard key={cat.id} category={cat}/>
      ))}
     </div>

      <h1 className="text-4xl font-bold mb-10 capitalize underline">Category: {slug}</h1>
      <div className="flex flex-row flex-wrap gap-7">
        {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
      </div>
    </div>
</>

 
);
};


export default CategoryPosts;