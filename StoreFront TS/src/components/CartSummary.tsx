import React from "react";
import type { CartViewItem } from "../pages/cart/CartList";

type Props = {
  items: CartViewItem[];
};

const CartSummary: React.FC<Props> = ({ items }) => {
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <div className="bg-white rounded-2xl shadow p-6 h-fit">
      <h3 className="text-xl font-semibold mb-4">Summary</h3>
      <div className="flex justify-between text-sm mb-2">
        <span>Total products</span>
        <span>{items.length}</span>
      </div>
      <div className="flex justify-between text-sm mb-4">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between text-lg font-bold border-t pt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="mt-6 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;