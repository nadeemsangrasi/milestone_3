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
      <div className="flex justify-between items-center bg-secondary-black text-white px-4 py-4 mt-2 shadow-2xl  w-[90%]  fixed left-1/2 -translate-x-1/2">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>
        <div>
          <ul className="flex gap-4">
            <li className="text-semibold text-xl">
              <Link href={"# "}>Blogs</Link>
            </li>
            <li className="text-semibold text-2xl ">
              <Link href={"# "} className="flex gap-1 items-center">
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
