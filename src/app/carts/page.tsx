"use client";
import Button from "@/components/shared/Button";
import Wrapper from "@/components/shared/Wrapper";
import { useCart } from "@/context/CartContext";
import { fetchCartsData } from "@/lib/fetchCartsDara";
import { IProduct } from "@/types/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";

const CartsPage = () => {
  const [carts, setCarts] = useState<IProduct[]>([]);
  const [isCartLoading, setIsCartLoading] = useState<boolean>(false);
  const { setCartCount, cartCount, message, setMessage } = useCart();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  useEffect(() => {
    const total = carts?.reduce(
      (acc, cart) => acc + cart.price * cart.quantity,
      0
    );

    setTotalAmount(total ? parseFloat(total.toFixed(2)) : 0);
  }, [carts]);

  useEffect(() => {
    fetchCartsData().then((data: IProduct[]) => {
      setIsCartLoading(true);
      setCarts(data);
      setIsCartLoading(false);
    });
  }, []);

  const deleteCart = async (id: string) => {
    const cartIndex = carts.findIndex((cart) => cart.id === id);
    if (cartCount !== 0) {
      setCartCount(
        (cartCount: number) => cartCount - carts[cartIndex].quantity
      );
    }
    setCarts(carts.filter((cart: IProduct) => cart.id !== id));

    try {
      const res = await fetch("/api/carts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error deleting product from cart", error);
    }
  };

  const handleCartDecrement = async (id: string) => {
    const cartIndex = carts.findIndex((cart) => cart.id === id);
    if (cartIndex === -1) {
      console.error("Product not found in cart");
      return;
    }

    if (carts[cartIndex].quantity > 1) {
      if (cartCount > 0) {
        setCartCount(cartCount - 1);
      }
      const updatedCart = carts.map((cart, index) =>
        index === cartIndex
          ? {
              ...cart,
              quantity: cart.quantity - 1,
              price: parseFloat(
                (cart.price - cart.price / cart.quantity).toFixed(2)
              ),
            }
          : cart
      );
      setCarts(updatedCart);

      try {
        const res = await fetch(`/api/carts`, {
          method: "PATCH",
          body: JSON.stringify({ id, type: "decrement" }),
        });
        const data = await res.json();
        console.log(data.message);
      } catch (error) {
        console.error("Error incrementing cart quantity", error);
      }
    }
  };

  const handleCartIncrement = async (id: string) => {
    setCartCount(cartCount + 1);
    const cartIndex = carts.findIndex((cart: IProduct) => cart.id === id);
    if (cartIndex === -1) {
      console.error("cart not found for incremention");
    }
    const upadatedCarts = carts.map((cart: IProduct) =>
      cart.id === id
        ? {
            ...cart,
            quantity: cart.quantity + 1,
            price: parseFloat(
              (cart.price + cart.price / cart.quantity).toFixed(2)
            ),
          }
        : cart
    );
    setCarts(upadatedCarts);

    try {
      const res = await fetch("/api/carts", {
        method: "PATCH",
        body: JSON.stringify({ id, type: "increment" }),
      });
      const data = await res.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error incrementing cart quantity", error);
    }
  };
  return (
    <Wrapper>
      <div className="py-16">
        <div className="my-16">
          <h1 className="text-2xl sm:text-3xl font-bold mt-8 text-emerald-300">
            Available carts
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap6">
              {carts &&
                carts.map((cart: any) => (
                  <CartCard
                    key={cart.id}
                    cart={cart}
                    handleCartIncrement={handleCartIncrement}
                    handleCartDecrement={handleCartDecrement}
                    deleteCart={deleteCart}
                  />
                ))}
            </div>
            <div className="checkout space-y-4 mt-12 w-fit mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold mt-8 ">
                Order summary
              </h1>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Quantity</h2>
                <h2 className="text-xl font-semibold">{cartCount} Product</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Subtotal</h2>
                <h2 className="text-xl font-semibold">${totalAmount}</h2>
              </div>
              <button className="bg-white text-black  font-bold py-2 px-4 rounded-md mx-auto block my-4">
                checkout now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartsPage;
