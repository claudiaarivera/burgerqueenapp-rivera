import { products } from "../data/products";

export const getProducts = () => {
  return new Promise((res)=>{
    setTimeout(() => {
      res(products);
    }, 1500);
  })
}
export const getProductById = (id)=>{
  return new Promise((res, reject)=>{
    setTimeout(() => {
      const product = products.find((product)=> product.id === id);
      if (!product) reject('This product doesnt exist');
      res(product);
    }, 1500);
  })
}