import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBuyOrder } from '../services/firestore';
import { cartContext } from './../context/cartContext';

export const Checkout = () => {
  const {cart, getTotalPrice, clearCart} = useContext(cartContext);
  const navigate = useNavigate(); 
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  useEffect(() => {
    setError(null)
  }, [])
  
  const handleCheckout = (e) =>{
    e.preventDefault();
    setIsSubmitting(true);
    const buyOrder = {
      buyer: {...formData},
      items: cart,
      date: new Date(),
      totalPrice: getTotalPrice()
    }
    addBuyOrder(buyOrder)
      .then((orderId)=> {
        navigate('/checkout/pago-exitoso', {state: {orderId}, replace: true});
        clearCart();
      })
      .catch(({message})=> {
        setError(message);
      })
      .finally(()=>  setIsSubmitting(false));
  }
  const handleInputChange = (e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  /* useEffect(() => {
    if (cart.length === 0) navigate('/');
  }, []); */
  
  
  return (

    <div className="checkout row">
      <div className="col-12 col-md-4">
        <div className="order-summary">
          <h2 className='title order-summary__title'>Detalle de tu orden</h2>
          <div className="order-summary__items">
            {
              cart.map(({count, name, amount, id, img}) => (
                <div className="order-summary__item" key={id}>
                  <img className="order-summary__item-img" src={img} alt="" />
                  <h3 className="title order-summary__item-title">{count}x {name}</h3>
                  <span className="order-summary__item-amount">S/. {amount}</span>
                </div>
              ))
            }
          </div>
          <div className='order-summary__price-list'>
            <div className='row g-0'>
              <span className='col'>Subtotal</span>
              <span className='col-auto'>S/. {getTotalPrice()}</span>
            </div>
            <div className='row g-0'>
              <span className='col'>Descuentos</span>
              <span className='col-auto'>S/. 0.0</span>
            </div>
          </div>
          <div className='order-summary__total row align-items-center g-0'>
            <span className='col'>Total</span>
            <span className='col-auto order-summary__total-price'>S/. {getTotalPrice()}</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8 order-md-first">
        <div className='mb-4'>
          <h1 className='title mb-0'>Pago</h1>
          <p className='checkout__subtitle mb-0'>Estás un paso de completar tu pedido</p>
        </div>
        <div className="payment">
          <h2 className='title payment__title'>Tus datos</h2>
          <form onSubmit={handleCheckout}>
            {
              error && <span>{error}</span>
            }
            <div className="mb-2">
              <label htmlFor="" className='form-label'>Nombre completo</label>
              <input type="text" name='name' value={formData.name} onChange={handleInputChange} className="control"/>
            </div>
            <div className="mb-2">
              <label htmlFor="" className='form-label'>Email</label>
              <input type="email" name='email' value={formData.email} onChange={handleInputChange}  className="control"/>
            </div>
            <div className="mb-4">
              <label htmlFor="" className='form-label'>Teléfono</label>
              <input type="tel" name='phone' value={formData.phone} onChange={handleInputChange} className="control"/>
            </div>
            <button type='submit' className="button button--primary d-block ms-auto" disabled={isSubmitting}>
              {isSubmitting ? 'Procesando...': 'Finalizar compra'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
