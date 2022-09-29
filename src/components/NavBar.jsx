import { Link, NavLink } from 'react-router-dom';
import logo from './../assets/images/logo.png';
import CartWidget from './CartWidget';
const categories = ['Hamburguesas', 'Bebidas', 'Ensaladas', 'Complementos', 'Postres'];

export function NavBar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link className='nav__brand-link' to="/">
            <img className="nav__logo" src={logo} alt="" />
          </Link>
          <ul className="nav__list">
            {
              categories.map((category, i) =>(
                <li className="nav__item" key={i}>
                  <NavLink to={`/categoria/${category.toLowerCase()}`} className={({ isActive }) => (`nav__link ${isActive ? 'nav__link--active': ''}`)}>{category}</NavLink>
                </li>
              ))
            }
          </ul>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a className='button button--primary button--outline' href="">Ingresar</a>
            </li>
            <li className='nav__item'>
              <CartWidget count={1}/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
