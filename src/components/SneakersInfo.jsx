import React from "react";
import SizeCard from "./SizeCard";

export default function SneakersInfo() {
    return (
                <section className="sneakers-info">
                    <div className="sneakers-info__picture"></div>
                        <div className="sneakers-info__container">
                            <h2 className="sneakers-info__title">Air Jordan 1 Mid Lakers</h2>
                            <p className="sneakers-info__description">
                                Легендарный дизайн в яркой расцветке баскетбольного клуба 
                                Los Angeles Lakers. Кроссовки Jordan 1 Mid созданы из смеси 
                                натуральной и искусственной кожи, чтобы подчеркнуть структурность 
                                и повысить износостойкость пары. Не слишком высокий силуэт 
                                позволяет стилизовать модель с любимыми аутфитами. Воздушная подушка 
                                Air-Sole обеспечивает легкость и отличную амортизацию. Акцентный колорблок
                                создает неповторимый стиль и выделяет кроссовки из всей коллекции.</p>
                            <span className="sneakers-info__price">21990 РУБ</span>
                            <div className="sneakers-info__grid">

                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>
                                <SizeCard/>

                        </div>
                        <button className="sneakers-info__purchase">Оформить покупку</button>
                    </div>
                </section>
)}