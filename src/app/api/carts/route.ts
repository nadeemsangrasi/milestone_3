// src/types/types.ts
export interface IProduct {
  id: string;
  price: number;
  quantity: number;
  // Add other properties as needed
}

// src/app/api/carts/route.ts

import { NextRequest, NextResponse } from "next/server";

// Define carts as a local variable for this module
const carts: IProduct[] = [];

export const POST = async (req: NextRequest) => {
  try {
    const { id } = await req.json();

    if (!id) {
      console.error("id is required");
      return NextResponse.json(
        { success: false, message: "id is required" },
        { status: 400 }
      );
    }

    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (res.status !== 200) {
      console.error("Product not found");
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    const product: IProduct = await res.json();
    const existingCartProduct = carts.find((cart) => cart.id === product.id);

    if (existingCartProduct) {
      existingCartProduct.quantity += 1;
      existingCartProduct.price += product.price / existingCartProduct.quantity;
    } else {
      const newProduct: IProduct = { ...product, quantity: 1 };
      carts.push(newProduct);
    }

    return NextResponse.json(
      { success: true, message: "Product added to cart" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding product to cart", error);
    return NextResponse.json(
      { success: false, message: "Error adding product to cart" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  return NextResponse.json(
    { carts, success: true, message: "Fetched cart data" },
    { status: 200 }
  );
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { id } = await req.json();
    if (!id) {
      console.error("id is required");
      return NextResponse.json(
        { success: false, message: "id is required" },
        { status: 400 }
      );
    }

    const cartIndex = carts.findIndex((cart) => cart.id === id);
    if (cartIndex === -1) {
      console.error("Product not found in cart");
      return NextResponse.json(
        { success: false, message: "Product not found in cart" },
        { status: 404 }
      );
    }
    carts.splice(cartIndex, 1);
    return NextResponse.json(
      { success: true, message: "Product deleted from cart" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product from cart", error);
    return NextResponse.json(
      { success: false, message: "Error deleting product from cart" },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { id, type } = await req.json();
    if (!id || !type) {
      console.error("id and type are required");
      return NextResponse.json(
        { success: false, message: "id and type are required" },
        { status: 400 }
      );
    }

    const cartIndex = carts.findIndex((cart) => cart.id === id);
    if (cartIndex === -1) {
      console.error("Product not found in cart");
      return NextResponse.json(
        { success: false, message: "Product not found in cart" },
        { status: 404 }
      );
    }

    const product = carts[cartIndex];

    if (type === "decrement") {
      if (product.quantity > 1) {
        product.quantity -= 1;
        product.price -= product.price / (product.quantity + 1);
      } else {
        carts.splice(cartIndex, 1);
      }
    } else if (type === "increment") {
      product.quantity += 1;
      product.price += product.price / (product.quantity - 1);
    } else {
      console.error("Invalid type");
      return NextResponse.json(
        { success: false, message: "Invalid type" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: `Cart ${type}ed successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating cart", error);
    return NextResponse.json(
      { success: false, message: "Error updating cart" },
      { status: 500 }
    );
  }
};
