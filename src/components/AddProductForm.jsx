import React from "react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../stores/store";
import { useState } from "react";


export default function AddProductForm() {

    const [linkProductCard, setLinkProductCard] = useState("");
    const [nameProductCard, setNameProductCard] = useState("");
    const [priceProductCard, setPriceProductCard] = useState("");
    const [descriptionCard, setDescriptionCard] = useState("");

    const addCard = useStore((state) => state.addCard);

    const onChangeLink = (e) => {
        setLinkProductCard(e.target.value);
      };

      const onChangeName = (e) => {
        setNameProductCard(e.target.value);
      };

      const onChangePrice = (e) => {
        setPriceProductCard(e.target.value);
      };

      const onChangeDescription = (e) => {
        setDescriptionCard(e.target.value);
      };

      const addCards = (e) => {
        e.preventDefault();
        addCard(
            { 
                id: uuidv4(), 
                src: linkProductCard, 
                alt: nameProductCard, 
                prise: priceProductCard, 
                title: nameProductCard,
                description: descriptionCard 
            }
        );

        clear();
      };

      const clear = () => {
        setLinkProductCard("");
        setNameProductCard("");
        setPriceProductCard("");
        setDescriptionCard("");
      }


    return (
                <form action="#" name="add-form" className="seller__add_form" noValidate>

                    <fieldset className="seller__add-link">
                        <input 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Ссылка на изображение" 
                        required value={linkProductCard} 
                        minLength="2" 
                        maxLength="500" 
                        id="link"
                        onChange={onChangeLink}
                        />
                        <span className="study__input-error" id="name-error"></span>
                    </fieldset>

                    <fieldset className="seller__add-name">
                        <input 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Название товара" 
                        required value={nameProductCard}
                        minLength="2" 
                        maxLength="500" 
                        id="name"
                        onChange={onChangeName}
                        />
                        <span className="seller__input-error" id="name-error"></span>
                    </fieldset>

                    <fieldset className="seller__add-price">
                        <input 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Цена товара" 
                        required value={priceProductCard}
                        minLength="2" 
                        maxLength="500" 
                        id="price"
                        onChange={onChangePrice}
                        />
                        <span className="seller__input-error" id="name-error"></span>
                    </fieldset>

                    <fieldset className="seller__add-description">
                        <textarea 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Описание товара" 
                        required value={descriptionCard }
                        minLength="2" 
                        maxLength="500" 
                        id="price"
                        onChange={onChangeDescription}
                        ></textarea>
                        <span className="seller__input-error" id="name-error"></span>
                    </fieldset>

                    <button 
                    className="seller__add-button" 
                    type="submit" 
                    onClick={(e) => addCards(e)}
                    >
                        Добавить
                    </button>
                </form>
)}