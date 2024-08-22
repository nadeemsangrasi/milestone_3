"use client";
import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
const Header = () => {
  const { cartCount } = useCart();

  return (
    <Wrapper>
      <div className="z-50 flex justify-between items-center bg-secondary-black text-white px-2 sm:px-4 py-4 mt-2 shadow-2xl w-full  sm:w-[90%]  fixed left-1/2 -translate-x-1/2">
        <h1 className="font-bold text-xl sm:text-2xl text-emerald-300">
          <Link href={"/"}>EliteEcom</Link>
        </h1>
        <div>
          <ul className="flex gap-2 sm:gap-4 items-center">
            <li className="text-semibold text-sm sm:text-xl  hover:text-emerald-500">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="text-semibold text-sm sm:text-xl hover:text-emerald-500">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li className="text-semibold text-xl sm:text-2xl hover:text-emerald-500">
              <Link href={"/carts"} className="flex gap-1 items-center">
                <ShoppingCart fontSizeAdjust={20} /> {cartCount}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
