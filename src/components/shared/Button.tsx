import { ButtonType, IButtonProps } from "@/types/types";
import React from "react";

const Button = ({ label, data, type, className }: IButtonProps) => {
  const handleAddToCart = () => {};
  const handleShowDetails = () => {};
  const handleDeleteCart = () => {};
  const handlers = {
    [ButtonType.CART]: handleAddToCart,
    [ButtonType.DETAILS]: handleShowDetails,
    [ButtonType.DELETE]: handleDeleteCart,
  };

  return (
    <button onClick={handlers[type]} className={`${className}`}>
      {label}
    </button>
  );
};

export default Button;
