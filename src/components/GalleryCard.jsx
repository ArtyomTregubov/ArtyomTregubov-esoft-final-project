import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCard() {
    return (
        <article className="gallery__element">
            <img className="gallery__picture" src="./images/Jordan Air Jordan 1 Mid Lakers.jpg" alt="Jordan Air Jordan 1 Mid Lakers"/>
            <div className="gallery__info">
                <span className="gallery__prise">21990&#8381;</span>
                <Link to="/info" className="gallery__title">Air Jordan 1 Mid Lakers</Link>
                <button className="gallery__buy" type="button">Купить</button>
                <button className="gallery__favorites" type="button">Добавить в избранное</button>
            </div>
        </article>
)}