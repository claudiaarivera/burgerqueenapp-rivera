import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBuyOrder } from '../services/firestore';
import { cartContext } from './../context/cartContext';
import { useForm } from "react-hook-form";

export const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
  const {cart, getTotalPrice, clearCart} = useContext(cartContext);
  const navigate = useNavigate(); 
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    setError(null)
  }, [])
  
  const handleCheckout = (data) =>{
    setIsSubmitting(true);
    const buyOrder = {
      buyer: data,
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
  useEffect(() => {
    if (cart.length === 0) navigate('/');
  }, []);
  
  
  return (
    <div className="checkout row">
      <div className="col-12 col-md-4">
        <div className="order-summary">
          <h2 className="title order-summary__title">Detalle de tu orden</h2>
          <div className="order-summary__items">
            {cart.map(({ count, name, amount, id, img }) => (
              <div className="order-summary__item" key={id}>
                <img className="order-summary__item-img" src={img} alt="" />
                <h3 className="title order-summary__item-title">
                  {count}x {name}
                </h3>
                <span className="order-summary__item-amount">S/. {amount}</span>
              </div>
            ))}
          </div>
          <div className="order-summary__price-list">
            <div className="row g-0">
              <span className="col">Subtotal</span>
              <span className="col-auto">S/. {getTotalPrice()}</span>
            </div>
            <div className="row g-0">
              <span className="col">Descuentos</span>
              <span className="col-auto">S/. 0.0</span>
            </div>
          </div>
          <div className="order-summary__total row align-items-center g-0">
            <span className="col">Total</span>
            <span className="col-auto order-summary__total-price">
              S/. {getTotalPrice()}
            </span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8 order-md-first">
        <div className="mb-4">
          <h1 className="title mb-0">Pago</h1>
          <p className="checkout__subtitle mb-0">
            Estás un paso de completar tu pedido
          </p>
        </div>
        <div className="payment">
          <h2 className="title payment__title">Tus datos</h2>
          <form onSubmit={handleSubmit(handleCheckout)}>
            {error && <span>{error}</span>}
            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Ingresa tu nombre completo",
                })}
                className={`control ${errors.name ? "invalid" : ""}`}
              />
              {errors.name && (
                <p className="control-error-message">{errors.name?.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Ingresa tu email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ingresa un email válido",
                  },
                })}
                className={`control ${errors.email ? "invalid" : ""}`}
              />
              {errors.email && (
                <p className="control-error-message">{errors.email?.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Ingresa tu teléfono",
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: 'Ingresa un teléfono válido'
                  },
                  minLength: {
                    value: 6,
                    message: 'El teléfono contener al menos 6 dígitos'
                  },
                })}
                className={`control ${errors.phone ? "invalid" : ""}`}
              />
              {errors.phone && (
                <p className="control-error-message">{errors.phone?.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="button button--primary d-block ms-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Procesando..." : "Finalizar compra"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
