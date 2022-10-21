import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import { getProducts } from "../../services/api"; */
import { ItemList } from "./ItemList";
import { getProducts } from "./../../services/firestore";

export default function ItemListContainer({ greeting }) {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getProducts(category)
      .then((products)=>{
        setIsLoading(false);
        setProductList(products);
      })
      .catch(({message})=> {
        setError(message)
      })
      .finally(()=> setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return <div className="spinner"></div>
  }
  return (
    <>
      {
        error
        ? <h1 className="text-center title">{error}🔍</h1>
        : (
         <>
            <h1  className="title">{ greeting }</h1>
            <section>
              <ItemList products={productList}/>
            </section>
         </> 
        )
      }
     
    </>
  )
}
