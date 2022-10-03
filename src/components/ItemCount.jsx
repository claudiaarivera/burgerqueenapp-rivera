import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

export const ItemCount = ({initialValue = 1, stock = 8, price, onAddToCart}) => {
  const [count, setCount] = useState(initialValue);
  const handleAdd = ()=>{
    if (count >= stock) return;
    setCount(count + 1);
  }
  const handleRemove = ()=>{
    if (count === 1) return;
    setCount(count - 1);
  }
  
  return (
    <div className='d-sm-flex justify-content-between text-center'>
      <div className='d-flex justify-content-center justify-content-md-start align-items-center'>
        <button disabled={count === 1} className="button button--primary button--outline button--icon-only me-0" onClick={handleRemove}>
          <FaMinus />
        </button>
        <span className='mx-3'>{ count }</span>
        <button disabled={count >= stock} className="button button--primary button--outline button--icon-only" onClick={handleAdd}>
          <BsPlusLg />
        </button>
      </div>
      <button disabled={stock === 0} className='button button--primary mt-4 mt-sm-0' onClick={()=> onAddToCart(count)}>
        <span className='me-2'>Agregar a la orden</span>S/. { Math.round(price * count * 100) / 100}
      </button>
    </div>
  )
}
