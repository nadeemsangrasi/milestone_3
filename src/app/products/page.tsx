"use client";
import ProductCard from "@/components/shared/ProductCard";
import Wrapper from "@/components/shared/Wrapper";
import { useCart } from "@/context/CartContext";
import { Loader2 } from "lucide-react";
import React from "react";

const ProductsPage = () => {
  const { products, isLoading } = useCart();
  return (
    <Wrapper>
      <div className="py-20">
        <div className="my-16">
          {isLoading ? (
            <div className="flex items-center justify-center py-24 gap-2 flex-wrap">
              <Loader2 className="h-10 w-10 sm:h-16 sm:w-16 animate-spin text-white " />
              <h1 className="text-2xl sm:text-5xl font-bold">
                Loading Products...
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-6xl font-bold text-center my-20 text-emerald-300">
                Our Products
              </h1>
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
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsPage;
