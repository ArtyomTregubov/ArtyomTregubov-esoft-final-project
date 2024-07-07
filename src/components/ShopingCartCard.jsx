import React from "react";

export default function ShopingCartCard() {
    return (
                <article className="shopping-cart__element">
                    <img src="./images/Jordan Air Jordan 1 Mid Lakers.jpg" alt="Jordan Air Jordan 1 Mid Lakers" className="shopping-cart__image"/>
                    <div className="shopping-cart__box">
                        <span className="shopping-cart__name">Jordan Air Jordan 1 Mid Lakers</span>
                        <span className="shopping-cart__size">Размер : 41</span>
                        <span className="shopping-cart__price">21999 руб</span>
                        <div className="shopping-cart__counter">
                            <button className="shopping-cart__plus"> + </button>
                            <span className="shopping-cart__number"> 1 </span>
                            <button className="shopping-cart__minus"> - </button>
                        </div>
                    </div>
                    <button className="shopping-cart__close-button">
                        <img src="./images/product_card_close_button.png" alt="иконка крестик" className="shopping-cart__close-icon"/>
                    </button>
                </article>
)}