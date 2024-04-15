import { CartContextType, CartItem } from "@/lib/domain/cart";
import React, { ReactNode, createContext, useState } from "react";

interface CartProps {
  children?: ReactNode;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

const Cart = ({ children }: CartProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default Cart;
