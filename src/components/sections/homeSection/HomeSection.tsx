"use client";
import ProductCard from "@/components/shared/ProductCard";
import Wrapper from "@/components/shared/Wrapper";
import { useCart } from "@/context/CartContext";
import React from "react";

const HomeSection = () => {
  const { products } = useCart();
  return (
    <Wrapper>
      <div className="py-20">
        <div className="my-16">
          <h1 className="text-3xl font-bold text-center">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 &&
              products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  brand={product.brand}
                  category={product.category}
                  thumbnail={product.thumbnail}
                />
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
