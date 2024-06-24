import React from "react";

export default function ShopingCartCard() {
    return (
                <article class="shopping-cart__element">
                    <img src="./images/Jordan Air Jordan 1 Mid Lakers.jpg" alt="Jordan Air Jordan 1 Mid Lakers" class="shopping-cart__image"/>
                    <div class="shopping-cart__box">
                        <span class="shopping-cart__name">Jordan Air Jordan 1 Mid Lakers</span>
                        <span class="shopping-cart__price">21999 руб</span>
                        <div class="shopping-cart__counter">
                            <button class="shopping-cart__plus"> + </button>
                            <span class="shopping-cart__number"> 1 </span>
                            <button class="shopping-cart__minus"> - </button>
                        </div>
                    </div>
                    <button class="shopping-cart__close-button">
                        <img src="./images/product_card_close_button.png" alt="иконка крестик" class="shopping-cart__close-icon"/>
                    </button>
                </article>
)}