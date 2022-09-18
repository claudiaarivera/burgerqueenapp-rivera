import React from 'react'
import classicBurger from '../assets/images/PngItem_39479.png';
import { ItemCount } from './ItemCount';

export const Item = () => {
  const handleAddToCart = ()=>{
    alert('Tu combo ha sido añadido al carrito 🔥🍔');
  }
  return (
   <article className='product-card'>
    <div className='product-card__top'>
      <img className='product-card__img' src='https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/burger-king.jpg?quality=82&strip=1' alt="" />
    </div>
    <div className='product-card__body'>
      <h2 className='product-card__title'>Combo clásico La Queen</h2>
      <p className='product-card__price'>S/. 15.90</p>
      <div className='product-card__footer'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 col-md-5'>
            <ItemCount initialValue={1} stock={6}/>
          </div>
          <div className='col'>
            <button className='button button--primary d-block w-100' onClick={handleAddToCart}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
   </article> 
  )
}
