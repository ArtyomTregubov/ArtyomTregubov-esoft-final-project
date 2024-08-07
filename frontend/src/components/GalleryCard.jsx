import React from "react";
import { Link } from "react-router-dom";
import useStore from "../stores/store";

export default function GalleryCard({card}) {

    const addFavorite = useStore((state) => state.addFavorite);

    return (
        
        <article className="gallery__element" key={card.id}>
            <Link to={`/info/${card.id}`} state={{card}}>
                <img className="gallery__picture" src={card.src} alt={card.alt}/>
            </Link>
            <div className="gallery__info">
                <span className="gallery__prise">{card.prise}&#8381;</span>
                <Link to={`/info/${card.id}`} state={{card}} className="gallery__title">{card.title}</Link>
                <Link to={`/info/${card.id}`} state={{card}}>
                    <button className="gallery__buy" type="button">Купить</button>
                </Link>
                <button onClick={() => addFavorite(card)} className="gallery__favorites" type="button">Добавить в избранное</button>
            </div>
        </article>
)}