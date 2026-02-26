import React from "react";
import { Trash } from "lucide-react";
import type { CartViewItem } from "../pages/cart/CartList";
type Props = {
  item: CartViewItem;
  onInc: (id: number) => void;
  onDec: (id: number) => void;
  onRemove: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, onInc, onDec, onRemove }) => {
  const { product, quantity } = item;



  return (
    <div className="flex items-center gap-5 border-b py-5">
      <img
        src={product.image}
        alt={product.title}
        className="h-24 w-24 object-contain bg-gray-50 rounded-lg p-2"
      />

      <div className="flex-1">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
      <button
  onClick={() => onRemove(product.id)}
  className="mt-2 text-sm text-red-500 hover:underline flex items-center gap-1"
>
  <Trash className="w-4 h-4" />
  <span>Remove</span>
</button>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => onDec(product.id)} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">–</button>
        <span className="min-w-6 text-center font-semibold">{quantity}</span>
        <button onClick={() => onInc(product.id)} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">+</button>
      </div>

      <div className="w-24 text-right font-bold">${(product.price * quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;