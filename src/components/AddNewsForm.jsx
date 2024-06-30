import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useNewsStore from "../stores/newsStore";


export default function AddNewsForm() {

    const [newsImgLink, setNewsImgLink] = useState("");
    const [newsLink, setNewsLink] = useState("");
    const [newsTitle, setNewsTitle] = useState("");


    const addNewsCard = useNewsStore((state) => state.addNewsCard);

    const onChangeNewsImgLink = (e) => {
        setNewsImgLink(e.target.value);
      };

      const onChangeNewsLink = (e) => {
        setNewsLink(e.target.value);
      };

      const onChangeNewsTitle = (e) => {
        setNewsTitle(e.target.value);
      };

      const addNewsCards = (e) => {
        e.preventDefault();
        addNewsCard(
            { 
                id: uuidv4(), 
                src: newsImgLink, 
                alt: newsImgLink, 
                link: newsLink, 
                title: newsTitle, 
            }
        );

        clear();
      };

      const clear = () => {
        setNewsImgLink("");
        setNewsImgLink("");
        setNewsLink("");
        setNewsTitle("");
      }

    return (
                <form action="#" name="add-form" className="seller__add_form" noValidate>

                    <fieldset className="seller__add-imglink">
                        <input 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Ссылка на изображение" 
                        required value={newsImgLink} 
                        minLength="2" 
                        maxLength="500" 
                        id="link"
                        onChange={onChangeNewsImgLink}
                        />
                        <span className="study__input-error" id="name-error"></span>
                    </fieldset>

                    <fieldset className="seller__add-newslink">
                        <input 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Ссылка на новость" 
                        required value={newsLink}
                        minLength="2" 
                        maxLength="500" 
                        id="price"
                        onChange={onChangeNewsLink}
                        />
                        <span className="seller__input-error" id="name-error"></span>
                    </fieldset>

                    <fieldset className="seller__add-description">
                        <textarea 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Описсание новости" 
                        required value={newsTitle}
                        minLength="2" 
                        maxLength="500" 
                        id="price"
                        onChange={onChangeNewsTitle}
                        ></textarea>
                        <span className="seller__input-error" id="name-error"></span>
                    </fieldset>

                    <button 
                    className="seller__add-button" 
                    type="submit" 
                    onClick={(e) => addNewsCards(e)}
                    >
                        Добавить
                    </button>
                </form>
)}