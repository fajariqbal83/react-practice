import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    
      <div className="w-64 bg-white p-4 rounded-xl shadow-[10px_10px_15px_rgba(0,0,0,0.25)]" >
        <div className="flex flex-col gap-3">
          <div>
            <img
              className="w-full h-48 rounded-2xl object-cover"
              src={post.featured_image}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold uppercase break-words">{post.title}</div>
            <div className="text-sm text-gray-500">{post.categories}</div>
          </div>
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
          <Link
            className=" text-red-500 underline"
            to={`/post/${post.slug}`}
          >
            Read More
          </Link>

          <div className="text-sm font-bold">{post.date}</div>
        </div>
      </div>
    
  );
};

export default BlogCard;
