
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/products/ItemListContainer';

export default function BurgerQueenApp() {
  return (
    <>
      <NavBar />
      <main className='main'>
        <div className='container'>
          <ItemListContainer greeting="Nuestro menú"/>
        </div>
      </main>
    </>
  )
}
