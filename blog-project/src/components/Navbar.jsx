import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white h-25 flex flex-row justify-between items-center p-5 mb-4">
      <div className=" flex flex-row items-center gap-14">
        <div className="font-mono text-5xl font-bold">.blog</div>
        <div className="flex flex-row gap-5 text-xl font-medium ">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <input className="border border-gray-400 rounded px-3 py-2 w-16 md:w-60 lg:w-sm" type="text" placeholder="Search"/>
    </div>
  );
};

export default Navbar;
