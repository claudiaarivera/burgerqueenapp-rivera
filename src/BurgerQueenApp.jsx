import ItemListContainer from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

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
