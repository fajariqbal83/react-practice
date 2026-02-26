import { useEffect, useState } from "react";
import { getAllProducts } from "../api/product.api";
import { getAllCarts, updateCart, addCart } from "../api/cart.api";
import type { product } from "../types/product";
import { Heart } from "lucide-react";
import { getToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const [products, setProducts] = useState<product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        console.log("API products:", data);
        if (data.length === 0) console.warn("No products returned from API!");
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

const handleAddToCart = async (p: product) => {
  const token = getToken();
  if (!token) return navigate("/login");

  try {
    const carts = await getAllCarts();
    let myCart = carts.find(c => c.userId === 1); 
    if (!myCart) {
     
      const newCart = {
        userId: 1,
        date: new Date().toISOString(),
        products: [{ productId: p.id, quantity: 1 }],
      };
      await addCart(newCart);
      console.log("New cart created and product added!");
    } else {
      const existing = myCart.products.find(x => x.productId === p.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        myCart.products.push({ productId: p.id, quantity: 1 });
      }

      await updateCart(myCart.id, {
        ...myCart,
        date: new Date().toISOString(),
      });
      console.log("Existing cart updated!");
    }

    localStorage.setItem("cartUpdated", JSON.stringify(true));
    navigate("/cart");
  } catch (err) {
    console.error("Add to cart error:", err);
    alert("Cart me add karne me masla hua!");
  }
};

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 p-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="relative bg-white rounded-3xl shadow-xl overflow-hidden h-125 flex flex-col transition-transform hover:scale-[1.02]"
        >
          <div className="relative h-125 bg-linear-to-br from-purple-300 to-indigo-400 flex items-center justify-center rounded-b-[40px]">
            <button className="absolute top-3 right-3 bg-white/70 backdrop-blur p-2 rounded-full">
              <Heart className="w-5 h-5 text-purple-600" />
            </button>

            <img
              src={p.image}
              alt={p.title}
              className="h-40 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="flex-1 bg-white p-5 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-lg leading-tight line-clamp-2">
                {p.title}
              </h2>

              <p className="text-gray-500 text-sm mt-3 line-clamp-3">
                {p.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xs uppercase text-gray-400">Price</p>
                <p className="font-bold text-xl">${p.price}</p>
              </div>

              <button
                onClick={() => handleAddToCart(p)}
                className="bg-indigo-600 text-white px-6 py-3 cursor-pointer rounded-xl font-medium hover:bg-indigo-700 transition"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
