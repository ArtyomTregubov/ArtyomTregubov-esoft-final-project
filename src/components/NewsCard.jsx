import React from "react";

export default function NewsCard({card}) {
    return (
                <article className="news__element" key={card.id}>
                    <img className="news__picture" src={card.src} alt={card.alt}/>
                    <span className="news__text">{card.title}</span>
                    <a className="news__link" href={card.link}>Подробнее &#155;</a>
                </article>
)}