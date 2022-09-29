import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({});
  const {id} = useParams();
  useEffect(() => {
    setIsLoading(true);
    document.body.classList.add('detail-page');
    getProductById(id).then((data)=> {
      setIsLoading(false);
      setItem(data);
    });
  }, []);
  
  return (
    isLoading 
    ? <div className="spinner"></div>
    : <ItemDetail detail={item}/>
  )
}
