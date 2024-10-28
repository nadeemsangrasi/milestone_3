import React from "react";
import Link from "next/link";

import Image from "next/image";
import Button from "./Button";
import { ButtonType } from "@/types/types";
const ProductCard = ({
  id,
  title,
  price,
  brand,
  category,
  thumbnail,
}: {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}) => {
  return (
    <div className="bg-primary-gray mx-auto flex flex-col justify-between card rounded-xl text-center md:text-start  hover:shadow-2xl transition-all ease  duration-500 hover:-translate-y-5 w-[300px] h-fit  md:w-[340px] ">
      <div className="overflow-hidden ">
        <div>
          <Image
            width={400}
            height={320}
            src={thumbnail}
            alt="image"
            className="object-cover rounded-lg "
          />
        </div>
        <h1 className="bg-primary-yellow w-fit font-bold text-black mx-5 px-2 text-lg  ">
          <Link href={`/${title}`}>{category}</Link>
        </h1>
        <h2 className="text-2xl font-bold px-5 break-words py-2">
          <Link href={title}>{title}</Link>
        </h2>
        <h2 className="text-lg bg-primary-white text-black w-fit font-bold mx-5 px-2  break-words ">
          ${price}
        </h2>
        <div className="space-x-4 px-5 my-4">
          <Button
            label="Cart"
            data={{
              id: id,
              title: title,
              price: price,
              brand: brand,
              category: category,
              thumbnail: thumbnail,
            }}
            type={ButtonType.CART}
            className="bg-black text-white"
          />
          <Button
            data={{
              id: id,
              title: title,
              price: price,
              brand: brand,
              category: category,
              thumbnail: thumbnail,
            }}
            type={ButtonType.DETAILS}
            label="details"
            className="bg-black text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
