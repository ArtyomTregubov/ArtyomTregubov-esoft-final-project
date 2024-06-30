import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCard({card}) {
    return (
        <article className="gallery__element" key={card.id}>
            <img className="gallery__picture" src={card.src} alt={card.alt}/>
            <div className="gallery__info">
                <span className="gallery__prise">{card.prise}&#8381;</span>
                <Link to="/info" className="gallery__title">{card.title}</Link>
                <button className="gallery__buy" type="button">Купить</button>
                <button className="gallery__favorites" type="button">Добавить в избранное</button>
            </div>
        </article>
)}