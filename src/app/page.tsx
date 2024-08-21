"use client";

import HomeSection from "@/components/sections/homeSection/HomeSection";
import { useEffect, useState } from "react";

export default function Home() {
  // const [carts, setCarts] = useState([]);
  // const handleDeleteCart = async (id: string) => {
  //   setCarts(carts.filter((cart: any) => cart.id !== id));
  //   const res = await fetch(`/api/carts`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  // const handleShowCarts = async () => {
  //   const response = await fetch("/api/carts");
  //   const data = await response.json();
  //   setCarts(data);
  // };

  // useEffect(() => {}, []);

  // const handleAddToCart = async (id: string) => {};
  return (
    <div>
      <HomeSection />
    </div>
  );
}
