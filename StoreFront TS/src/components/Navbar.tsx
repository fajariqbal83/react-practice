import { ShoppingCart, User, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSingleCart} from "../api/cart.api";

const USER_ID = 1;

const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
  const loadCartCount = async () => {
    try {
      const cart = await getSingleCart(USER_ID);
      setCartCount(cart.products.length);
    } catch (err) {
      console.error("Navbar cart error:", err);
    }
  };

  loadCartCount();
}, []);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50 h-20">
      <div
        className="text-3xl font-bold text-indigo-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        ShopEase
      </div>

      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
        <Search className="w-5 h-7 text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none px-2 w-full text-md"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="relative" onClick={() => navigate("/cart")}>
          <ShoppingCart className="w-9 h-9 text-gray-700" />

          <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center">
            {cartCount}
          </span>
        </button>

        <button onClick={() => navigate("/login")}>
          <User className="w-9 h-9 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;