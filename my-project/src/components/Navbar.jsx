import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = ({ onSearch }) => {
 
   const [search, setSearch] = useState("");

    const handleSearch = () => {
    onSearch(search);
  }; 
  return (
    <nav className="bg-white h-25 flex flex-row justify-between items-center p-5 mb-4">
      <div className=" flex flex-row items-center gap-5 lg:gap-14 ">
        <div className="font-mono text-2xl md:text-5xl font-bold">.blog</div>
        <div className="flex flex-row text-sm md:text-xl font-medium ">
          <Link to="/">My Blog</Link>
        </div>
      </div>
     <div className="flex flex-row flex-wrap justify-between items-center ">
       <input
        className="border border-gray-400 rounded px-4 py-2 w-16 md:w-60 lg:w-sm"
        type="text"
        placeholder="Search by id or title"
         onChange={(e) => setSearch(e.target.value)}
      />
      <button  onClick={handleSearch}
          className="bg-black text-white m-3 px-4 py-2 rounded"
          >Search</button>
     </div>
    </nav>
  );
};

export default Navbar;
