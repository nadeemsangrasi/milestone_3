"use client";
import { IProduct } from "@/types/types";
import { useContext, createContext, useState } from "react";

const CartContext = createContext<null | any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>([]);

  const addToCart = (id: string) => {};

  const deleteCart = (id: string) => {};

  return (
    <CartContext.Provider
      value={{ cartCount, products, addToCart, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
export default CartContext;
