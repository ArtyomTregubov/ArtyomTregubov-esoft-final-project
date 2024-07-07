import React from "react";
import OrderDescriptionCard from "./OrderDescriptionCard";
import AddProductForm from "./AddProductForm";
import AddNewsForm from "./AddNewsForm";
import DateOptGroups from "./DateOptGroups";

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
                        

                        <DateOptGroups/>
                              
                        
                        <div className="seller__table">
                            <div className="seller__table-container">
                                <div className="seller__table-cell">Дата</div>
                                <div className="seller__cell-data">04.07.2024</div>
                            </div>
                            <div className="seller__table-container">
                                <span className="seller__table-cell">ID</span>
                                <span className="seller__cell-data">123</span>
                            </div>
                            <div className="seller__table-container">
                                <span className="seller__table-cell">Модель</span>
                                <span className="seller__cell-data">Air Jordan 1 Mid Lakers</span>
                            </div>
                            <div className="seller__table-container">
                                <span className="seller__table-cell">Размер</span>
                                <span className="seller__cell-data">41</span>
                            </div>
                            <div className="seller__table-container">
                                <span className="seller__table-cell">Стоимость</span>
                                <span className="seller__cell-data">21990</span>
                            </div>
                        </div>

                        <div className="seller__analitics-result">
                            <span className="seller__profit">Общая выручка: 100000 &#8381;</span>
                            <div className="seller__table-buttons">

                                <button className="seller__download-button"></button>
                                <button className="seller__print-button"></button>

                            </div>
                        </div>

                    </div>
                </section>
)}