import React from "react";
import OrderDescriptionCard from "./OrderDescriptionCard";
import AddProductForm from "./AddProductForm";
import AddNewsForm from "./AddNewsForm";

export default function AccountSeller() {
    return (
                <section className="seller">
                    <h1 className="seller__account">Личный кабинет</h1>
                    <div className="seller__account-container">
                        <div className="seller__orders">
                            <span className="seller__orders-text">Заказы</span>
                            <div className="seller__buttons">
                                <button className="seller__current">Текущие</button>
                                <button className="seller__сompleted">Завершённые</button>
                            </div>
                        </div>
                    </div>

                    <div className="seller__orders-grid">

                        <OrderDescriptionCard/>
                        <OrderDescriptionCard/>

                    </div>

                    <div className="seller__cards">
                        <div className="seller__cards-container">
                            <span className="seller__cards-add">Добавить товар</span>
                            <span className="seller__cards-add">Добавить новость</span>
                        </div>
                    </div>

                    <div className="seller__forms">
                        
                        <AddProductForm/>
                        <AddNewsForm/>

                    </div>
                    <div className="seller__analitics">
                        <span className="seller__orders-text">Аналитика</span>
                    </div>
                </section>
)}