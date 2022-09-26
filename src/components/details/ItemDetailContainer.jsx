import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();
  useEffect(() => {
    document.body.classList.add('detail-page');
    getProductById(id).then((data)=> {
      setItem(data);
    });
  }, []);
  
  return (
    <ItemDetail detail={item}/>
  )
}
