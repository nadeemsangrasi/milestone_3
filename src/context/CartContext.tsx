"use client";
import { fetchProductsData } from "@/lib/fetchProductsData";
import { IProduct } from "@/types/types";
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext<null | any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cartAddedMessage, setCartAddedMessage] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
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
        setCartAddedMessage(data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  };

  const deleteCart = async (id: string) => {
    setCartCount((cartCount: number) => cartCount - 1);
    setProducts(products.filter((product: IProduct) => product.id !== id));
    try {
      const res = await fetch("/api/carts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error deleting product from cart", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartCount, products, addToCart, deleteCart, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
export default CartContext;
