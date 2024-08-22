"use client";
import Wrapper from "@/components/shared/Wrapper";
import { useCart } from "@/context/CartContext";
import { fetchCartsData } from "@/lib/fetchCartsDara";
import { IProduct } from "@/types/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartsPage = () => {
  const [carts, setCarts] = useState<IProduct[]>([]);
  const [isCartLoading, setIsCartLoading] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { setCartCount, cartCount, message, setMessage } = useCart();

  useEffect(() => {
    fetchCartsData().then((data: IProduct[]) => {
      setIsCartLoading(true);
      setCarts(data);
      setIsCartLoading(false);
    });
  }, []);

  const deleteCart = async (id: string) => {
    if (cartCount !== 0) {
      setCartCount((cartCount: number) => cartCount - 1);
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
              price: cart.price - cart.price,
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
            price: cart.price + cart.price,
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
          <h1 className="text-3xl font-bold mt-8 ">Available carts</h1>
          <div>
            <div className="flex flex-col gap-6">
              {carts &&
                carts.map((cart: any) => (
                  <div key={cart.id} className="flex gap-6">
                    <div>
                      <Image
                        src={cart.thumbnail}
                        alt={cart.title}
                        width={300}
                        height={300}
                        className="w-[300px] h-[300px] object-cover"
                      />
                    </div>
                    <div className="mt-20 space-y-3">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold ">{cart.title}</h1>
                        <h1 className="text-2xl font-semibold">{cart.brand}</h1>
                        <h1 className="text-xl text-red-500 ">${cart.price}</h1>
                      </div>
                      <div className="flex gap-2  justify-between">
                        <div className="flex gap-2">
                          <Minus
                            className="cursor-pointer"
                            onClick={() => handleCartDecrement(cart.id)}
                          />
                          {cart.quantity}
                          <Plus
                            className="cursor-pointer"
                            onClick={() => handleCartIncrement(cart.id)}
                          />
                        </div>
                        <h1>
                          <Trash2
                            onClick={() => deleteCart(cart.id)}
                            className="cursor-pointer"
                          />
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="checkout"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartsPage;
