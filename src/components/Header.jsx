import React from "react";
import { Link } from "react-router-dom";

export default function Header({isShow, onShow, showEnter, onShowEnter}) {

    function handleShowSideBarClick() {
        onShow(!isShow);
      }

      function handleShowEnterAccountClick() {
        onShowEnter(!showEnter);
      }

  return (

    <header className="header">
        <div className="header__container">
            <img src="./images/sneakers_logo.png" alt="Логотип магазина кроссовок" className="header__logo"/>
            <span className="header__text">Магазин кроссовок</span>
        </div>
        <nav className="header__navigation">
            <ul className="header__navigation-list">

                <li className="header__navigation-link">
                    <button onClick={handleShowEnterAccountClick} className="header__navigation-user-button">
                        <img src="./images/user_icon.svg" alt="Иконка пользователя" className="header__avatar-icon" />
                    </button>
                </li>

                <li className="header__navigation-link">
                    <Link to="/cart" className="header__navigation-link-icon" href="#">
                        <img src="./images/backboard_icon.svg" alt="Иконка корзины покупателя" className="header__avatar-icon" />
                        <div className="header__cart-indicator">
                            <span className="header__indicator-number">2</span>
                        </div>
                    </Link>    
                </li>

                <li className="header__navigation-link">
                    <a className="header__navigation-link-text" href="#">Каталог</a>
                </li>

                <li className="header__navigation-link">
                    <a className="header__navigation-link-text" href="#">Новинки</a>
                </li>

                <li className="header__navigation-link">
                    <a className="header__navigation-link-text" href="#">Акции</a>
                </li>

                <li className="header__navigation-link">
                    <a className="header__navigation-link-text" href="#">Оплата и доставка</a>
                </li>  

                <li className="header__navigation-link">
                <Link to="/" className="header__navigation-link-text" href="#">Главная</Link>
                </li> 

            </ul>
        </nav>

        <button onClick={handleShowSideBarClick} className="header__burger"></button>
    </header>
    
  );
}