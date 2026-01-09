const Navbar = () => {
  return (
   <div className="p-4">
       <div className="bg-yellow-500 flex flex-col  lg:flex-row text-center   justify-center lg:gap-5 items-center p-5 w-full rounded-2xl">
        <div className="text-2xl font-medium">
          Set up email forwarding to get tickets.
        </div>

        <div className="text-2xl font-medium underline bg-transparent text-black lg:no-underline lg:bg-black lg:text-white py-2 px-5 rounded-2xl">
          Read setup instruction
        </div>
      </div> 
   </div> 
  );
};

export default Navbar;
