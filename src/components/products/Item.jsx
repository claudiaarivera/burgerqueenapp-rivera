import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({name, price, img, id, category}) => {

  return (
   <article className='product-card'>
    <div className='product-card__top'>
      <img className='product-card__img' src={img} alt="" />
    </div>
    <div className='product-card__body'>
      <h2 className='product-card__title'>{name}</h2>
      <p className='product-card__price'>S/. {price}</p>
      <div className='product-card__footer'>
        <Link to={`/${category}/${id}`} className='button button--primary d-block w-100'>Ver más</Link>
      </div>
    </div>
   </article> 
  )
}
