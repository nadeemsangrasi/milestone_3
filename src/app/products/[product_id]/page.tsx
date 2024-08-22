import Wrapper from "@/components/shared/Wrapper";
import { fetchProductById } from "@/lib/fetchProductById";
import { IProduct } from "@/types/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductPage = async ({ params }: { params: { product_id: string } }) => {
  const { product_id } = params;
  const product: IProduct = await fetchProductById(product_id);
  const quantity = 0;

  return (
    <Wrapper>
      <div className="py-16">
        <h1>product</h1>
      </div>
    </Wrapper>
  );
};

export default ProductPage;
