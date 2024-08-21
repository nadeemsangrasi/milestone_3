import { NextRequest, NextResponse } from "next/server";
export const carts = [];
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
    console.log(res);
    if (res.status !== 200) {
      console.error("Product not found");
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    const product = await res.json();
    console.log(product);
    carts.push(product);
    return NextResponse.json(
      {
        success: true,
        message: "Product added to cart",
      },
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
  if (!carts.length) {
    console.error("Cart is empty");
    return NextResponse.json(
      { success: false, message: "Cart is empty" },
      { status: 500 }
    );
  }
  return NextResponse.json(carts, { status: 200 });
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
      {
        success: true,
        message: "Product deleted from cart",
      },
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
