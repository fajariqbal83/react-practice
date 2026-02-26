import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getAllCarts, updateCart } from "../../api/cart.api";
import { getAllProducts } from "../../api/product.api";
import type { product } from "../../types/product";
import CartItem from "../../components/CartItem";
import CartSummary from "../../components/CartSummary";

export type CartViewItem = {
  product: product;
  quantity: number;
};

const USER_ID = 1;

const CartList: React.FC = () => {
  const [items, setItems] = useState<CartViewItem[]>([]);
  const [cartId, setCartId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const load = async () => {
      try {
        const [carts, products] = await Promise.all([getAllCarts(), getAllProducts()]);
        const myCart = carts.find(c => c.userId === USER_ID);
        if (!myCart) return setItems([]);

        setCartId(myCart.id);

        const mapped: CartViewItem[] = myCart.products
          .map(ci => {
            const prod = products.find(p => p.id === ci.productId);
            if (!prod) return null;
            return { product: prod, quantity: ci.quantity };
          })
          .filter(Boolean) as CartViewItem[];

        setItems(mapped);
        window.dispatchEvent(new Event("cart:updated"));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
  const loadCart = async () => {
    // normal cart fetch logic
  };

  loadCart();

  // ✅ Listen for cart updates
  const handler = () => loadCart();
  window.addEventListener("cart:updated", handler);

  return () => window.removeEventListener("cart:updated", handler);
}, []);

  const syncCart = async (newItems: CartViewItem[]) => {
    setItems(newItems);
    if (!cartId) return;

    try {
      await updateCart(cartId, {
        id: cartId,
        userId: USER_ID,
        date: new Date().toISOString(),
        products: newItems.map(i => ({ productId: i.product.id, quantity: i.quantity })),
      });
      window.dispatchEvent(new Event("cart:updated"));
    } catch (err) {
      console.error(err);
    }
  };

  const handleInc = (id: number) => syncCart(items.map(i => i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  const handleDec = (id: number) => syncCart(items.map(i => i.product.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i));
  const handleRemove = (id: number) => syncCart(items.filter(i => i.product.id !== id));

  if (loading) return <p className="p-10">Loading cart...</p>;
  if (!items.length)
    return (
      <div className="p-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-indigo-600 mb-6">
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      </div>
    );

  return (
    <div className="p-10">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-indigo-600 mb-6">
        <ArrowLeft className="w-5 h-5" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Shopping cart items</h2>
          {items.map(item => (
            <CartItem key={item.product.id} item={item} onInc={handleInc} onDec={handleDec} onRemove={handleRemove} />
          ))}
        </div>

        <CartSummary items={items} />
      </div>
    </div>
  );
};

export default CartList;