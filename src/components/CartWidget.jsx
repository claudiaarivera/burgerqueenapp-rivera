import { BsFillHandbagFill } from 'react-icons/bs';
import { cartContext } from "../context/cartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { getTotalItems } = useContext(cartContext);
  if (getTotalItems() === 0) return;
  return (
    <Link to="/carrito" className='button nav__link nav__link--cart count'>
      <BsFillHandbagFill size="1.5rem"/>
      <span className='count__num'>{ getTotalItems()}</span>  
    </Link>
  )
}
