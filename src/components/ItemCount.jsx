import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

export const ItemCount = ({initialValue = 1, stock = 8 }) => {
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
    <div className='d-flex justify-content-center justify-content-md-start align-items-center'>
      <button disabled={count === 1} className="button button--primary button--outline button--icon-only" onClick={handleRemove}>
        <FaMinus />
      </button>
      <span className='mx-2'>{ count }</span>
      <button disabled={count >= stock} className="button button--primary button--outline button--icon-only" onClick={handleAdd}>
        <BsPlusLg />
      </button>
    </div>
  )
}
