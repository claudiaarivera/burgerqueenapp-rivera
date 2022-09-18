import { products } from "../data/products";

export const getProducts = () => {
  return new Promise((res)=>{
    setTimeout(() => {
        res(products);
    }, 1500);
  })
}