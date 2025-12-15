import { useParams } from "react-router-dom";

const Categories = ({data}) => {
 console.log(data)
const { slug } = useParams();


const filteredBlogs = data.filter(
  blog => blog.categories?.some(cat => cat.toLowerCase() === slug.toLowerCase())
);

 
  return (
  <div>
      <h2>Category: {slug}</h2>

      {filteredBlogs.length === 0 && <p>No blogs found</p>}

      <div className="grid">
        {filteredBlogs.map(blog => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
