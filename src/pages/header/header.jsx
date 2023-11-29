import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen)
  }

  const handleLogoClick = () => {
  if (window.innerWidth <= 1200) {
  handleMenuToggle()
  }
  }

  return (
    <div className="headerHeader">
      <div className={`header__menu ${isMenuOpen ? 'open' : ''}`}>
        <div>
          <Link to="/" onClick={handleMenuToggle} className='menu_nazv'>Новинки</Link>
        </div>
        <div>
          <Link to="/menu" onClick={handleMenuToggle} className='menu_nazv'>Меню</Link>
        </div>
        <div>
          <Link to="/kontakty" onClick={handleMenuToggle} className='menu_nazv'>Контакты</Link>
        </div>
        <div>
          <Link to="/oNas" onClick={handleMenuToggle} className='menu_nazv'>О нас</Link>
        </div>
      </div>
      <div className="header__icons">
        <div className={`header__burger-menu ${isMenuOpen ? 'visible' : ''}`}
          onClick={handleMenuToggle}>
          <div> 
            <img src="images/burgermenu.png" alt="burger" className='burger'/>
          </div>
        </div>
      
      </div>
      <div>
          <h1 class = "name_header">TeaSea</h1>
      </div>
      <div>
          <h1 class = "name_header"></h1>
      </div>
    </div>
)
}
export default PageHeader