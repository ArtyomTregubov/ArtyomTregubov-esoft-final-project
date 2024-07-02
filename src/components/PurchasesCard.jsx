import React from "react";
import { Link } from "react-router-dom";

export default function PurchasesCard({card}) {
    return (
        <article className="account__element-favourites" key={card.id}>
        <img className="account__picture-favourites" src={card.src} alt={card.alt}/>
        <div className="account__info-favourites">
            <span className="account__prise-favourites">{card.prise}&#8381;</span>
            <Link to="/info" className="account__title-favourites">{card.title}</Link>
        </div>
    </article>
)}