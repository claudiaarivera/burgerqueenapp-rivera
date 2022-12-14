import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { getProductById } from './../../services/firestore';
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [item, setItem] = useState({});
  const {id} = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getProductById(id)
      .then((data)=> setItem(data))
      .catch((err)=> setError(err.message))
      .finally(()=> setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <div className="spinner"></div>
  }
  return (
    !error 
    ? <ItemDetail item={item}/>
    : (
      <div className="text-center">
        <h1 className="title">Lo sentimos!</h1>
        <p>{error}</p>
        <Link className="button button--primary" to="/">Volver al menú</Link>
      </div>
    )

  )
}
