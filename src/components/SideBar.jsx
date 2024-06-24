import React from "react";
import { Link } from "react-router-dom";

export default function SideBar({isShow, onShow, showEnterAuth, onShowEnterAuth}) {

      function handleCloseSideBarClick() {
        onShow(false);
      }

      function handleShowEnterAccountClick() {
        onShowEnterAuth(!showEnterAuth);
      }

    return (
                <section className={ isShow ? `sidebar_opened` : `sidebar`}>
                    <button onClick={handleCloseSideBarClick} className="sidebar__close-button"></button>
                    <nav className="sidebar__navigation">
                        <div className="sidebar__navigation-container">

                            <button onClick={handleShowEnterAccountClick} className="sidebar__navigation-user-button">
                                <img src="./images/user_icon.svg" alt="Иконка юзера" className="header__avatar-icon" />
                            </button>

                            <Link to="./cart" className="sidebar__navigation-link-icon">
                                <img src="./images/backboard_icon.svg" alt="Иконка корзины покупателя" className="header__avatar-icon" />
                            </Link>   

                        </div>

                        <div className={showEnterAuth ? `sidebar__navigation-enter_opened` : `sidebar__navigation-enter`}>
                            <Link to="/login" className="enter__link">Войти</Link>
                            <span className="enter__text">или</span>
                            <Link to="/auth" className="enter__link">Зарегистрироваться?</Link>
                        </div>

                        <ul className="sidebar__navigation-list">
        
                            <li className="sidebar__navigation-link">
                                <a className="sidebar__navigation-link-text" href="#">Каталог</a>
                            </li>
        
                            <li className="sidebar__navigation-link">
                                <a className="sidebar__navigation-link-text" href="#">Новинки</a>
                            </li>
        
                            <li className="sidebar__navigation-link">
                                <a className="sidebar__navigation-link-text" href="#">Акции</a>
                            </li>
        
                            <li className="sidebar__navigation-link">
                                <a className="sidebar__navigation-link-text" href="#">Оплата и доставка</a>
                            </li>  
        
                            <li className="sidebar__navigation-link">
                                <a className="sidebar__navigation-link-text" href="#">Гарантия</a>
                            </li> 
        
                        </ul>
                    </nav>
                </section>
)}