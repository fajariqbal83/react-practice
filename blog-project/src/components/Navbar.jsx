import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [category, setCategory] = useState([]);

  const categoryData = async () => {
    const responseData = await axios.get(
      "https://wordpress-1471720-5962383.cloudwaysapps.com/wp-json/custom/v1/categories"
    );

    setCategory(responseData.data);
  };

  useEffect(() => {
    categoryData();
  }, []);

  return (
    <div className="bg-white h-25 flex flex-row justify-between items-center p-5 mb-4">
      <div className=" flex flex-row items-center gap-14">
        <div className="font-mono text-5xl font-bold">.blog</div>
        <div className="flex flex-row gap-5 text-xl font-medium ">
          <Link to="/">Home</Link>
         <div className="relative inline-block">
      <div className="flex flex-row gap-2 justify-center">
        <div
          onClick={() => {
            console.log(category);
            setOpen(!open);
          }}
        >
          Categories
        </div>
        <div>
          <ChevronDown />
        </div>
      </div>

      {open && (
        <div className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg">
          <ul className="flex flex-col">
            {category.map((item) => {
              return (
                <Link 
                  key={item.slug}
                  to={`/categories/${item.slug}`}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>

          <Link to="/about">About</Link>
        </div>
      </div>
      <input
        className="border border-gray-400 rounded px-3 py-2 w-16 md:w-60 lg:w-sm"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Navbar;
