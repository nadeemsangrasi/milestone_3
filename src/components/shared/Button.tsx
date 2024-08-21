"use client";
import { useCart } from "@/context/CartContext";
import { ButtonType, IButtonProps } from "@/types/types";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ label, data, type, className }: IButtonProps) => {
  const { addToCart, deleteCart } = useCart();
  const router = useRouter();
  const handleAddToCart = () => {
    addToCart(data.id);
  };
  const handleShowDetails = () => {
    router.push("/products/" + data.id);
  };
  const handleDeleteCart = () => {
    deleteCart(data.id);
  };
  const handlers = {
    [ButtonType.CART]: handleAddToCart,
    [ButtonType.DETAILS]: handleShowDetails,
    [ButtonType.DELETE]: handleDeleteCart,
  };

  return (
    <button
      onClick={handlers[type]}
      className={`font-bold text-xl px-8 py-2 rounded-lg ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
