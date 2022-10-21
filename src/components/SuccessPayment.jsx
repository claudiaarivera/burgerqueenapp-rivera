import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const SuccessPayment = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const state = location.state;
  
  useEffect(() => {
    if (!state) navigate('/');
  }, [])
  
  return (
    <div className="d-flex justify-content-center">
      <div className="success-payment">
        <div className="success-payment__header">
          <h1 className="title success-payment__title">¡Felicidades 🎉!</h1>
          <p className="success-payment__description">Tu compra se realizó con éxito.</p>
          <span className="success-payment__order-id">ID: <b>{state.orderId?.toUpperCase()}</b></span>
        </div>
        <div className="mb-5">
          <div className="row mb-3">
            <div className="col">Fecha:</div>
            <div className="col-auto">18/10/2022</div>
          </div>
          <div className="row mb-3">
            <div className="col">Total:</div>
            <div className="col-auto">S/. 125.0</div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/" className="button button--primary">Cerrar</Link>
        </div>
      </div>
    </div>
  )
}
