import { fetchProductById } from "@/lib/fetchProductById";
import React from "react";

const ProductPage = async ({ params }: { params: { proudct_id: string } }) => {
  const { proudct_id } = params;
  const product = await fetchProductById(proudct_id);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductPage;
