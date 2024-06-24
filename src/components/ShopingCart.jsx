import React from "react";
import ShopingCartCard from "./ShopingCartCard";

export default function ShoppingCart() {
    return (
                <section class="shopping-cart">
                    <div class="shopping-cart__container">
                        <span class="shopping-cart__title">Товары в корзине :</span>
                        <img src="./images/shopping_cart_icon.png" alt="иконка корзины покупателя" class="shopping-cart__icon"/>
                    </div>
                    <div class="shopping-cart__grid">

                        <ShopingCartCard/>
                        <ShopingCartCard/>
                        <ShopingCartCard/>

                    </div>
                    <span class="shopping-cart__paid">Сумма к оплате : 65997 руб</span>
                    <div class="shopping-cart__pay-button">
                        <button class="shopping-cart__pay">Оплатить</button>
                        <span class="shopping-cart__choose-method">*Выберите способ оплаты</span>
                    </div>
                    <div class="shopping-cart__payment">
                        <span class="shopping-cart__payment-text">Способы оплаты : </span>
                        <div class="shopping-cart__cells">

                            <button class="shopping-cart__cell">
                                <img src="./images/package_icon.png" alt="иконка посылки" class="shopping-cart__methods-image"/>
                                <span class="shopping-cart__payment-name">При получении</span>
                                <span class="shopping-cart__payment-description">Банковской картой или наличными</span>
                            </button>

                            <button class="shopping-cart__cell">
                                <img src="./images/sbp_icon.png" alt="иконка сбп" class="shopping-cart__methods-image"/>
                                <span class="shopping-cart__payment-name">Система Быстрых Платежей</span>
                                <span class="shopping-cart__payment-description">Мгновенная оплата без карты</span>
                            </button>

                            <button class="shopping-cart__cell">
                                <img src="./images/you_kassa_icon.png" alt="иконка юкасса" class="shopping-cart__methods-image"/>
                                <span class="shopping-cart__payment-name">Cервис ЮКасса </span>
                                <span class="shopping-cart__payment-description">Мир, Visa, Mastercard, СБП, SberPay, Юmoney</span>
                            </button>

                            <button class="shopping-cart__cell">
                                <img src="./images/dolyamy_icon.png" alt="иконка долями" class="shopping-cart__methods-image"/>
                                <span class="shopping-cart__payment-name">Оплата Долями</span>
                                <span class="shopping-cart__payment-description">25% покупки сразу, остальное частями - в течении 6 недель</span>
                            </button>

                        </div>
                    </div>
                </section>
)}