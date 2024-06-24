import React from "react";

export default function SellerChat({showSellerChat, onShowSellerChat}) {

    function handleCloseSellerChat() {
        onShowSellerChat(false);
      }

    return (
                <section className={ showSellerChat ? `seller-chat_opened` : `seller-chat`}>
                    <button onClick={handleCloseSellerChat} className="seller-chat__close-button"></button>
                    <div className="seller-chat__users-container">

                        <button className="seller-chat__user">
                            <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__user-icon"/>
                            <span className="seller-chat__user-name">Артём Трегубов</span>
                        </button>

                        <button className="seller-chat__user">
                            <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__user-icon"/>
                                <span className="seller-chat__user-name">Том Харди</span>
                        </button>
                    </div>
                    <div className="seller-chat__container">
                     <form className="seller-chat__questions-form">
                        <textarea className="seller-chat__questions-entering" rows="4" cols="50" name="comment"> Напишите ваш ответ...</textarea>
                        <input className="seller-chat__questions-button" type="button" value="SEND"/>
                     </form>
                     <div className="seller-chat__messages">

                        <div className="seller-chat__seller-message">
                            <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__seller-icon"/>
                            <span className="seller-chat__seller-text">Какие кроссы?</span>
                        </div>

                        <div className="seller-chat__user-message">
                            <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__user-icon"/>
                            <span className="seller-chat__user-text">Где мои кроссы?</span>
                        </div>

                     </div>
                    </div>
                </section>
)}