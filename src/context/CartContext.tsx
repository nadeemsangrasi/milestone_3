"use client";

import { blogsData } from "@/data/blogsData";
import { fetchCartsData } from "@/lib/fetchCartsDara";
import { fetchProductsData } from "@/lib/fetchProductsData";
import { IBlogPost, IProduct } from "@/types/types";
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext<null | any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [blogs, setBlogs] = useState<IBlogPost[]>([]);

  useEffect(() => {
    setBlogs(blogsData);
    fetchProductsData().then((data) => {
      setIsLoading(true);
      setProducts(data.products);
      setIsLoading(false);
    });
  }, []);
  const addToCart = async (id: string) => {
    setCartCount((cartCount: number) => cartCount + 1);
    try {
      const res = await fetch("/api/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage(data.message);
        // alert(message);
      }
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartCount,
        products,
        addToCart,
        isLoading,
        setCartCount,
        blogs,
        setBlogs,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
export default CartContext;
