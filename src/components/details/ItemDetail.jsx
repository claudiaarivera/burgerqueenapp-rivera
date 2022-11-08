import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { ItemCount } from '../ItemCount';
import { Accordion } from '../accordion/Accordion';
import { Link } from 'react-router-dom';
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import toast from 'react-hot-toast';

export const ItemDetail = ({item}) => {
  const {name, price, stock, img, description, nutritionFacts} = item;
  const [isFav, setIsFav] = useState(false);
  const [isItemInCart, setIsItemInCart] = useState(false);
  const { addItem } = useContext(cartContext);
  const handleAddToCart = (count) =>{
    setIsItemInCart(true);
    toast('Has agregado un producto al carrito', {
      duration: 2000,
      position: 'bottom-center',
      reverseOrder: true,
      style: {
        background: '#272727',
        color: '#ffffff',
        borderRadius: 25
      }
    })
    addItem({count, item});
  }
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-5 mb-4 mb-md-0">
        <img src={img} alt="" className="product-detail-page__img"/>
      </div>
      <div className="col-12 col-md-6 offset-lg-1 col-lg-6">
        <div className='product-detail-page__top-info'>
          <div className="d-flex flex-wrap align-items-center mb-3">
            <h1 className="product-detail-page__title title">{name}</h1>
            <div className="d-flex align-items-center ms-auto">
              <span className="product-detail-page__price title me-3">S/. {price}</span>
              <button className="button product-detail-page__fav-btn" onClick={()=> setIsFav(!isFav)}>
                { isFav ? <AiFillHeart /> : <AiOutlineHeart />  }
              </button>
            </div>
          </div>
          <p className='m-0 product-detail-page__available-tag'>
            <HiOutlineInformationCircle className='me-2'/>
            <span>{stock === 0 ? 'No disponible' : 'Disponible'}</span>
          </p>
        </div>
        <div className='product-detail-page__description'>
          <p className='mb-0'>{description}</p>
        </div>
        <div className='mb-4'>
          <Accordion>
            <div title='Información nutricional'>
              <p className='m-0 product-detail-page__nutrition-facts'>
                {nutritionFacts}
              </p>
            </div>
          </Accordion>
        </div>
        {
          isItemInCart 
          ? <div className='d-flex justify-content-end'><Link to="/carrito" className='button button--primary'>Finalizar compra</Link></div>
          : <ItemCount initialValue={1} 
                      stock={stock} 
                      price={price} 
                      onAddToCart={handleAddToCart}/>

        }
      </div>
    </div>
  )
}
