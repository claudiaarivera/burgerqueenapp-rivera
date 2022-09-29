import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { ItemCount } from '../ItemCount';
import { Accordion } from '../accordion/Accordion';

export const ItemDetail = ({detail}) => {
  const {name, price, stock, img, description, nutritionFacts} = detail;
  const [isFav, setIsFav] = useState(false);
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
        <div className='d-sm-flex justify-content-between text-center'>
          <ItemCount initialValue={1} stock={stock}/>
          <button disabled={stock === 0} className='button button--primary mt-4 mt-sm-0'>
            <span className='me-2'>Agregar a la orden</span>S/. {price}
          </button>
        </div>
      </div>
    </div>
  )
}
