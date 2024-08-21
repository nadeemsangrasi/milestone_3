"use client";
import Wrapper from "@/components/shared/Wrapper";
import { useCart } from "@/context/CartContext";
import { fetchCartsData } from "@/lib/fetchCartsDara";
import { IProduct } from "@/types/types";
import { useEffect, useState } from "react";

const CartsPage = () => {
  const [carts, setCarts] = useState<IProduct[]>([]);
  const [isCartLoading, setIsCartLoading] = useState<boolean>(false);
  useEffect(() => {
    fetchCartsData().then((data: IProduct[]) => {
      setIsCartLoading(true);
      setCarts(data);
      setIsCartLoading(false);
    });
  }, []);
  return (
    <Wrapper>
      <div className="py-16">
        <div className="my-16-*9">
          {carts &&
            carts.map((cart: any) => <div key={cart.id}>{cart.id}</div>)}
        </div>
      </div>
    </Wrapper>
  );
};

export default CartsPage;
