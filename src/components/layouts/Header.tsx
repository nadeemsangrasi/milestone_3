"use client";
import React from "react";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import logo from "@/assets/logos/Vector.png";
import NavigateButton from "../shared/NavigateButton";
const Header = () => {
  const { cartCount } = useCart();

  return (
    <div className=" bg-white max-w-screen-2xl z-50 flex justify-between items-center bg-secondary-black text-black px-2 md:px-10 lg:px-16 py-4   w-full    fixed left-1/2 -translate-x-1/2 flex-wrap  top-0">
      <h1 className="font-bold text-xl sm:text-2xl mx-auto sm:mx-0">
        <Link href={"/"} className="flex gap-2 ">
          <Image src={logo} alt="logo" />
          FASHION
        </Link>
      </h1>
      <div clasName="mx-auto sm:mx-0">
        <ul className="flex gap-2 sm:gap-12 items-center">
          <li className="font-medium text-sm sm:text-xl tracking-wider ">
            <Link href={"/products"}>PRODUCTS</Link>
          </li>
          <li className="font-medium text-sm sm:text-xl ">
            <Link href={"/blogs"}>BlOGS</Link>
          </li>

          <li className="font-medium text-xl sm:text-2xl 0">
            <Link href={"/carts"} className="flex gap-1 items-center">
              <ShoppingCart fontSizeAdjust={20} /> {cartCount}
            </Link>
          </li>
          <li className="font-medium text-sm sm:text-xl ">
            <NavigateButton label="Sign up" url="/" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
