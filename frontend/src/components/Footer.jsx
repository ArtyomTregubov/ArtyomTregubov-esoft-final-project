import React from "react";
import { Link } from "react-router-dom";

export default function Footer({scrollToElement}) {
    return (
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__box">
                        <Link to="/">
                            <img className="footer__logo" src="/images/sneakers_logo.png" alt="Логотип магазина кроссовок"/>
                        </Link>
                        <span className="footer__logo-text">магазин кроссовок</span>
                    </div>
                
                    <div className="footer__grid">

                        <article className="footer__element">
                            <Link className="footer__link" 
                                  to="#gallery"
                                  onClick={() => scrollToElement('galleryID')}
                                  >Каталог</Link>

                            <Link className="footer__link"
                                  to="#news"
                                  onClick={() => scrollToElement('newsID')}
                                  >Новости</Link>

                            <Link className="footer__link" 
                                  to="#comments"
                                  onClick={() => scrollToElement('commentsID')}
                                  >Отзывы</Link>
                        </article>

                        <article className="footer__element">
                            <Link className="footer__link" to="#">Оплата и доставка</Link>
                            <Link className="footer__link" to="#">Гарантия</Link>
                            <Link className="footer__link" to="#">Контакты</Link>
                         </article>

                        <article className="footer__element">
                            <Link className="footer__link" to="#">
                                <img className="footer__link-logo" src="/images/vk_logo.png" alt="Логотип Вконтакте"/>
                            </Link>
                            <Link className="footer__link" to="#">
                                <img className="footer__link-logo" src="/images/telegramm_logo.png" alt="Логотип Телеграмм"/>
                            </Link>
                         </article>

                    </div>
                </div>    
            </footer>
)}