import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrder } from "../services/firestore";

export const SuccessPayment = () => {
  const navigate = useNavigate(); 
  const {state} = useLocation();
  const [orderDetail, setOrderDetail] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (!state) {
      navigate('/');
      return;
    }
    setError(null);
    setIsLoading(true);
    getOrder(state.orderId)
      .then((data)=> {
        setOrderDetail({...data, date: data.date.toDate().toLocaleDateString('es')});
      })
      .catch((err)=> {
        setError(err.message)
      })
      .finally(()=> {
        setIsLoading(false);
        window.history.replaceState(null, '');
      });
  }, []);
  
  if (!state) return;
  return (
    <div className="d-flex justify-content-center">
      <div className="success-payment">
        <div className="success-payment__header">
          <h1 className="title success-payment__title">¡Felicidades 🎉!</h1>
          <p className="success-payment__description">Tu compra se realizó con éxito.</p>
          <span className="success-payment__order-id">Ticket: <b>{state.orderId?.toUpperCase()}</b></span>
        </div>
        <div className="mb-4">
          {
            isLoading ? 
            <div className="spinner"></div>
            : error 
            ? <p className="text-center color-red">{error}</p>
            : (
              <>
                <div className="success-payment__buyer">
                  <div className="row align-items-center g-0 mb-2 fw-semibold">
                    <span className="col">Fecha</span>
                    <span className="col-auto">{orderDetail.date}</span>
                  </div>
                  <div className="row align-items-center g-0 fw-semibold">
                    <span className="col">Nro. contacto</span>
                    <span className="col-auto">{orderDetail.buyer?.phone}</span>
                  </div>
                </div>
                <ul className="m-0 p-0 mb-4">
                  {
                    orderDetail.items?.map(({count, name, amount, id})=> (
                      <li key={id} className="row align-items-center g-0 mb-2 fw-semibold fsize-small">
                        <p className="col mb-0">x{count} {name}</p>
                        <span className="col-auto">S/. {amount}</span>
                      </li>
                    ))
                  }
                </ul>
                <div className="row fw-bold">
                  <div className="col">Total:</div>
                  <div className="col-auto">S/. {orderDetail.totalPrice}</div>
                </div>
                
              </>
            )
          }
        </div>
        <div className="text-center">
          <Link to="/" className="button button--primary">Cerrar</Link>
        </div>
      </div>
    </div>
  )
}
