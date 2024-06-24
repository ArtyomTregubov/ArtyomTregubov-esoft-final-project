import React from "react";
import ChatForm from "./ChatForm";

export default function Chat({showChat, onShowChat}) {

    function handleCloseUserChat() {
        onShowChat(false);
      }

    return (
                <section className={ showChat ? `chat_opened` : `chat`}>
                    <button onClick={handleCloseUserChat} className="chat__close-button"></button>

                    <ChatForm/>

                    <div className="chat__messages">

                        <div className="chat__seller-message">
                            <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="chat__seller-icon"/>
                            <span className="chat__seller-text">Какие кроссы?</span>
                        </div>

                        <div className="chat__user-message">
                            <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="chat__user-icon"/>
                            <span className="chat__user-text">Где мои кроссы?</span>
                        </div>

                    </div>
                </section>
)}