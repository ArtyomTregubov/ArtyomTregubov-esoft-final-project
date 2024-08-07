import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
                <div className="sign-up">
                    <h1 className="sign-up__title">Авторизация</h1>
                    <form
                        action="#"
                        name="add-form"
                        className="sign-up__main"
                    >
                        <fieldset className="sign-up__info">
                        <input
                            value=""
                            type="email"
                            name="email"
                            className="sign-up sign-up__input_form_name"
                            placeholder="Email"
                            required
                            minLength="2"
                            maxLength="30"
                            id="email"
                        />
                        <span className="sign-up__input-error" id="image-name-error"></span>
                        <input
                            value=""
                            type="password"
                            name="password"
                            className="sign-up__input sign-up__input_form_description"
                            placeholder="Пароль"
                            required
                            id="password"
                        />
                        <span className="sign-up__input-error" id="link-error"></span>
                        </fieldset>
                        <button className="sign-up__save-button" type="submit">
                        Войти
                        </button>
                    </form>
                        <Link to="/auth" className="sign-up__link">Регстрация</Link>
                        <Link to="/" className="sign-up__link_home">На главную</Link>
                </div>
)}