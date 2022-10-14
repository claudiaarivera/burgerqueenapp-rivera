import { products } from "../data/products";

export const getProducts = (category) => {
  return new Promise((res, reject)=>{
    setTimeout(() => {
      const productList = category ? products.filter((product)=> product.category === category) : products;
      if (!productList.length) reject(new Error('No hemos encontrado resultados.'));
      res(productList);
    }, 1500);
  })
}
export const getProductById = (id)=>{
  return new Promise((res, reject)=>{
    setTimeout(() => {
      const product = products.find((product)=> product.id === id);
      if (!product) reject(new Error('El producto no está disponible o no existe.'));
      res(product);
    }, 1500);
  })
}