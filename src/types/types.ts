export interface IProduct {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
  stock: string;
  description: string;
}

export enum ButtonType {
  CART = "cart",
  DETAILS = "details",
  DELETE = "delete",
}

export interface IButtonProps {
  label: string;
  data: IProduct;
  type: ButtonType;
  className?: string;
}
