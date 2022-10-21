import { BsFillHandbagFill } from 'react-icons/bs';
import { cartContext } from "../context/cartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { getTotalItems } = useContext(cartContext);
  return (
    <Link to="/carrito" className='button nav__link nav__link--cart count'>
      <BsFillHandbagFill size="1.5rem"/>
      {getTotalItems() > 0 && <span className='count__num'>{ getTotalItems()}</span>  }
    </Link>
  )
}
