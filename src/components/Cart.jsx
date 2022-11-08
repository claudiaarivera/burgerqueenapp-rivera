
import { useContext } from 'react';
import { cartContext } from './../context/cartContext';
import cartIcon from '../assets/images/bread.png';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

export const Cart = () => {
  const {cart, removeItem, getTotalItems, clearCart, getTotalPrice} = useContext(cartContext);
  const handleRemoveItem = (id) =>{
    toast('Has eliminado un producto del carrito', {
      duration: 2000,
      position: 'bottom-center',
      reverseOrder: true,
      style: {
        background: '#272727',
        color: '#ffffff',
        borderRadius: 25
      }
    });
    removeItem(id);
  }
  return (
    <div className='cart'>
      <h1 className="title">Carrito</h1>
      {
        cart.length === 0 ? (
          <div className='text-center'>
            <img src={cartIcon} alt="" style={{width: '110px', marginBottom: '20px'}}/>
            <div className='mb-4'>
              <h1 className='title mb-2'>Tu carrito está vacío</h1>
              <p>Empieza a comprar</p>
            </div>
            <Link to="/" className="button button--primary">Ir al menú</Link>
          </div>
        ) 
        : (
          <div className='row cart__items'>
            <div className='col-12 col-md-8'>
              <span className='cart__count-items d-block mb-3'>Tienes <b> {getTotalItems()} productos</b> en tu carrito</span>
              {
                cart.map(({name, img, category, id, count, amount}) => (
                  <div className='cart__item' key={id}>
                    <div className='row align-items-start'>
                      <div className='col-auto align-self-center'>
                        <img src={img} className="cart__img" alt="product image" />
                      </div>  
                      <div className='col'>
                        <div className='mb-2'>
                          <h2 className='title cart__product-title'>{count}x {name}</h2>
                          <p className='cart__product-category'>{category}</p>
                        </div>
                        <span className='cart__product-price'>S/. {amount}</span>
                      </div>
                      <div className='col-auto'>
                        <button className='button cart__button cart__remove-item-btn' onClick={()=> handleRemoveItem(id)}>Eliminar</button>
                      </div>
                    </div>  
                  </div>
                ))
              }
                <button className='button px-0 cart__button cart__clear-all-btn d-block me-auto ms-auto' onClick={()=> clearCart()}><FiTrash2 className='me-1'/> <span>Vaciar carrito</span></button>

            </div>
            <div className='col-12 col-md-4'>
              <div className='summary'>
                <h2 className='title'>Resumen</h2>
                <div className='summary__details'>
                  <div className='summary__price-list'>
                    <div className='row summary__price-item'>
                      <p className='col mb-0 summary__label'>Subtotal</p>
                      <p className='col-auto mb-0 summary__price'>S/. {getTotalPrice()}</p>
                    </div>
                    <div className='row summary__price-item'>
                      <p className='col mb-0 summary__label'>Descuentos</p>
                      <p className='col-auto mb-0 summary__price'>S/. 0.0</p>
                    </div>
                  </div>
                  <div className='row align-items-center g-0 summary__total-price'>
                    <p className='col mb-0 summary__label summary__label--total'>Total</p>
                    <p className='col-auto mb-0 summary__price summary__price--total'>S/. {getTotalPrice()}</p>
                  </div>
                </div>
                <Link to="/checkout" className='button button--primary d-block w-100'>Ir a pagar</Link>
              </div>
            </div>
           
          </div>
        )
      }
    </div>
  )
}
