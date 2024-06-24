import React from "react";

export default function AccountUserDataForm() {
    return (
            <form action="#" name="account-form" className="account__form" novalidate>

                <fieldset className="account__info">

                    <input type="text" name="form-name" className="account__form-input"
                        placeholder="Имя" required value minlength="2" maxlength="15" id="name"/>
                    <span className="account__input-error" id="name-error"></span>

                    <input type="text" name="form-surname" className="account__form-input"
                        placeholder="Фамилия" required value minlength="2" maxlength="15" id="surname"/>
                    <span className="account__input-error" id="surname-error"></span>
                    
                    <input type="text" name="form-phone" className="account__form-input"
                        placeholder="Телефон" required value minlength="2" maxlength="15" id="phone"/>
                    <span className="account__input-error" id="phone-error"></span>

                    <input type="text" name="form-email" className="account__form-input"
                        placeholder="Страна" required value minlength="2" maxlength="30" id="email"/>
                    <span className="account__input-error" id="mail-error"></span>

                    <input type="text" name="form-country" className="account__form-input"
                        placeholder="Город" required value minlength="2" maxlength="30" id="country"/>
                    <span className="account__input-error" id="country-error"></span>

                    <input type="text" name="form-city" className="account__form-input"
                        placeholder="Улица" required value minlength="2" maxlength="30" id="city"/>
                    <span className="account__input-error" id="city-error"></span>

                    <input type="text" name="form-street" className="account__form-input"
                        placeholder="Дом" required value minlength="2" maxlength="30" id="street"/>
                    <span className="account__input-error" id="street-error"></span>

                    <input type="text" name="form-house-number" className="account__form-input"
                        placeholder="Квартира" required value minlength="2" maxlength="30" id="house-number"/>
                    <span className="account__input-error" id="form-house-number"></span>

            </fieldset>

            <button className="account__edit-button" type="submit">Редактировать</button>
        </form>
)}