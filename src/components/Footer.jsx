import React from "react";

export default function Footer() {
    return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__box">
                        <img className="footer__logo" src="./images/sneakers_logo.png" alt="Логотип магазина кроссовок"/>
                        <span className="footer__logo-text">магазин кроссовок</span>
                    </div>
                
                    <div className="footer__grid">

                        <article className="footer__element">
                            <a className="footer__link" href="#">Каталог</a>
                            <a className="footer__link" href="#">Новинки</a>
                            <a className="footer__link" href="#">Акции</a>
                        </article>

                        <article className="footer__element">
                            <a className="footer__link" href="#">Оплата и доставка</a>
                            <a className="footer__link" href="#">Гарантия</a>
                            <a className="footer__link" href="#">Контакты</a>
                         </article>

                        <article className="footer__element">
                            <a className="footer__link" href="#">
                                <img className="footer__link-logo" src="./images/vk_logo.png" alt="Логотип Вконтакте"/>
                            </a>
                            <a className="footer__link" href="#">
                                <img className="footer__link-logo" src="./images/telegramm_logo.png" alt="Логотип Телеграмм"/>
                            </a>
                         </article>

                    </div>
                </div>    
            </footer>
)}