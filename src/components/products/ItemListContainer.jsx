import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/api";
import { ItemList } from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const [isLoading, setisLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const { category } = useParams();
  
  useEffect(() => {
    setisLoading(true);
    getProducts(category).then((products)=>{
      setisLoading(false);
      setProductList(products);
    })
  }, [category]);
  
  return (
    <>
      <h1 className="title">{ greeting }</h1>
      
      {
        isLoading ? 
          <div className="spinner"></div> :
          <section>
            {
              productList.length === 0 
                ?   <h1 className="text-center title">Lo siento, no hemos encontrado resultados 🔍</h1>
                :   <ItemList products={productList}/>
            }
          </section>
      }
      
    </>
  )
}
