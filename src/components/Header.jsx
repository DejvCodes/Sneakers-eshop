import "./Header.css"
import { nav } from "../data/data";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const shoppingBag = useSelector(store => store.shoppingBag.items)
  const notification = useSelector(store => store.shoppingBag.notification)

  // Nastavení množství v košíku
  useEffect(() => {
    const total = shoppingBag.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total)
  }, [shoppingBag])

  // Otevření menu v responzivním režimu
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      {notification &&
        <div className="notification">
          <h2>Přidáno do košíku</h2>
        </div>
      }

      <header className="header">
        <div className="container">
          <div className="logo" onClick={() => setOpenMenu(false)}>
            <Link to="/">sneakers<span>.</span></Link>
          </div>

          <nav className="navigation">
            <ul className={!openMenu ? "nav-menu show" : "nav-menu hide"}>
              {nav.map((oneLink, index) => {
                return <li className="nav-link" key={index}>
                  <Link to={oneLink.path} onClick={() => setOpenMenu(!openMenu)}>{oneLink.text}</Link>
                </li>
              })}
            </ul>
          </nav>

          <div className="search-bag-menu-btn">
            <Link to="/shopping-bag" className="bag">
              <LuShoppingBag /><span>{totalQuantity}</span>
            </Link>
            <div className="burger-menu" onClick={handleOpenMenu}>
              <div className={openMenu ? "line1" : ""}></div>
              <div className={openMenu ? "line2" : ""}></div>
              <div className={openMenu ? "line3" : ""}></div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header