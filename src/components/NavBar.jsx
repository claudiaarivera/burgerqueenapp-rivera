import logo from './../assets/images/logo.png';
const categories = ['Hamburguesas', 'Bebidas', 'Ensaladas', 'Complementos', 'Postres'];

export function NavBar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a className='nav__brand-link' href="">
            <img className="nav__logo" src={logo} alt="" />
          </a>
          <ul className="nav__list">
            {
              categories.map((category, i) =>(
                <li className="nav__item" key={i}>
                  <a href="#" className={`nav__link ${i === 1 ? 'nav__link--active' : ''}`}>{category}</a>
                </li>
              ))
            }
          </ul>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a className='button button--primary' href="">Ingresar</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
