import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { ItemList } from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const [isLoading, setisLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setisLoading(true);
    getProducts().then((products)=>{
      setisLoading(false);
      setProductList(products);
    })
  }, []);
  
  return (
    <>
      <h1 className="title">{ greeting }</h1>
      
      {
        isLoading ? 
          <div className="spinner"></div> :
          <section>
            <ItemList products={productList}/>
          </section>
      }
      
    </>
  )
}
