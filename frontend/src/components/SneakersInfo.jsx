import React from "react";
import useSizeStore from "../stores/sizesStore";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useBasketStore from "../stores/basketStore";

export default function SneakersInfo() {

    const [isSelectedSize, setIsSelectedSize] = useState(false);
    const [selectedSize, setSelectedSize] = useState(43)

    function handleSelectSize(size) {
        setIsSelectedSize(!isSelectedSize);
        setSelectedSize(size)
    }

    const sizes  = useSizeStore((state) => state.sizes);
    const addBasketCard = useBasketStore((state) => state.addBasketCard);
    const {state} = useLocation();

    const handleAddBasketCard = () => {
        addBasketCard({
            id: state.card.id,
            name: state.card.title,
            src: state.card.src,
            alt: state.card.alt,
            size: selectedSize,
            price: state.card.price,

        })
    }


    return (
                <section className="sneakers-info">
                    <img src={state.card.src} alt={state.card.alt} className="sneakers-info__picture"/>
                        <div className="sneakers-info__container">
                            <h2 className="sneakers-info__title">{state.card.title}</h2>
                            <p className="sneakers-info__description">{state.card.description}</p>
                            <span className="sneakers-info__price">{state.card.price}</span>
                            <div className="sneakers-info__grid">

                                {
                                sizes.map((size, i)=>{ 

                                    return (

                                        <article className="sneakers-info__element" key={i} >
                                            <button className={ isSelectedSize ? `sneakers-info__size_selected` : `sneakers-info__size`}
                                            onClick={()=>handleSelectSize(size.size)}
                                            >{size.size}</button>
                                        </article>
                                        
                                    )
                                })
                            }

                        </div>
                        <button 
                        className="sneakers-info__purchase"
                        onClick={handleAddBasketCard}
                        >Оформить покупку</button>
                    </div>
                </section>
)}