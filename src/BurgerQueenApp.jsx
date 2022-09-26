import { Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/details/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/products/ItemListContainer';

export default function BurgerQueenApp() {
  return (
    <>
      <NavBar />
      <main className='main'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Nuestro menú"/>}></Route>
            <Route path='/hamburguesas/:id' element={<ItemDetailContainer />}></Route>
            
          </Routes>
        </div>
      </main>
    </>
  )
}
