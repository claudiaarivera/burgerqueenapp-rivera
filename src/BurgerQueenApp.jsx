import { Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';
import { ItemDetailContainer } from './components/details/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/products/ItemListContainer';
import CartContextProvider from './context/cartContext';
import { BrowserRouter } from "react-router-dom";
import { Checkout } from './components/Checkout';
import { SuccessPayment } from './components/SuccessPayment';

export default function BurgerQueenApp() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <main className='main'>
            <div className='container'>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Nuestro menú"/>}></Route>
                <Route path='/:category/:id' element={<ItemDetailContainer />}></Route>
                <Route path='/categoria/:category' element={<ItemListContainer />}></Route>
                <Route path='/carrito' element={<Cart />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/checkout/pago-exitoso' element={<SuccessPayment />}></Route>
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}
