import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { ItemList } from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts().then((products)=>{
      setProductList(products);
      console.log(products)
    })
  }, []);
  
  return (
    <>
      <h1 className="title">{ greeting }</h1>
      <section>
        <ItemList products={productList}/>
      </section>
      
    </>
  )
}
