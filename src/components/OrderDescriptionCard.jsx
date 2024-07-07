import React from "react";

export default function OrderDescriptionCard() {
    return (
                <div className="seller__element">
                    <div className="seller__order-description">
                        <span className="seller__order-number">Заказ № 2708</span>
                        <span className="seller__order-date">от 14 Июня</span>
                        <span className="seller__order-status">Текущий</span>
                        <span className="seller__order-status-info">14 Июня в 13:20</span>
                    </div>
                    <div className="seller__order-info">

                        <div className="seller__order-product">
                            <span className="seller__product-params">Товары в заказе :</span>
                            <span className="seller__product-params-name">Jordan Air Jordan 1 Mid Lakers</span>
                        </div>

                        <div className="seller__order-product">
                            <span className="seller__product-params">Код товара :</span>
                            <span className="seller__product-params-name">2708</span>
                        </div>

                        <div className="seller__order-product">
                            <span className="seller__product-params">Количество :</span>
                            <span className="seller__product-params-name">1 пара</span>
                        </div>

                        <div className="seller__order-product">
                            <span className="seller__product-params">Общая стоимость :</span>
                            <span className="seller__product-params-name">21999 руб</span>
                        </div>

                        <div className="seller__order-product">
                            <span className="seller__product-params">Способ оплаты :</span>
                            <span className="seller__product-params-name">При получении</span>
                        </div>

                        <div className="seller__order-product">
                            <span className="seller__product-params">Фио заказчика :</span>
                            <span className="seller__product-params-name">Трегубов Артём Николаевич</span>
                        </div>

                        <div className="seller__order-product">
                            <span className="seller__product-params">Адрес доставки :</span>
                            <span className="seller__product-params-name">Россия, Тюмень ул. Пермякова 77 кв. 67</span>
                        </div>

                    </div>
                </div>
)}