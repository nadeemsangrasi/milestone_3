import { carts } from "./../app/api/carts/route";
export const fetchCartsData = async () => {
  const response = await fetch("http://localhost:3000/api/carts");
  const data = await response.json();
  return data.carts;
};
