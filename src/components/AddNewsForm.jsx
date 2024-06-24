import React from "react";

export default function AddNewsForm() {
    return (
                <form action="#" name="add-form" className="seller__add_form" noValidate>

                    <fieldset className="seller__add-link">
                        <input 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Ссылка на изображение" 
                        required value='' 
                        minLength="2" 
                        maxLength="500" 
                        id="link"
                        />
                        <span className="study__input-error" id="name-error"></span>
                    </fieldset>

                    <fieldset className="seller__add-link">
                        <input 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Ссылка на новость" 
                        required value=''
                        minLength="2" 
                        maxLength="500" 
                        id="price"
                        />
                        <span className="seller__input-error" id="name-error"></span>
                    </fieldset>

                    <fieldset className="seller__add-description">
                        <textarea 
                        type="text" 
                        name="form-question" 
                        className="seller__form-input"
                        placeholder="Описсание новости" 
                        required value=''
                        minLength="2" 
                        maxLength="500" 
                        id="price"
                        ></textarea>
                        <span className="seller__input-error" id="name-error"></span>
                    </fieldset>

                    <button 
                    className="seller__add-button" 
                    type="submit" 
                    >
                        Добавить
                    </button>
                </form>
)}