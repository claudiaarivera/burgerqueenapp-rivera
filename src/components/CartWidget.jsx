import { BsFillHandbagFill } from 'react-icons/bs';

export default function CartWidget({count}) {
  return (
    <button className='button nav__link nav__link--cart count'>
        <BsFillHandbagFill size="1.5rem"/> 
        <span className='count__num'>{ count }</span>  
    </button>
  )
}
