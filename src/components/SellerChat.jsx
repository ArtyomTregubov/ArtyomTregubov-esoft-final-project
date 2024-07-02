import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import useChatsStore from "../stores/chatsStore";

export default function SellerChat({showSellerChat, onShowSellerChat}) {

    const messages = useChatsStore((state) => state.messages);
    const addMessage = useChatsStore((state) => state.addMessage);

    function handleCloseSellerChat() {
        onShowSellerChat(false);
    }


    const [value, setValue] = useState('');
    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000')


        socket.current.onopen = () => {
            
        }
        socket.current.onmessage = (e) => {
            const message = JSON.parse(e.data)
        }
        socket.current.onclose = () => {
            
        }
        socket.current.onerror = () => {
            
        }


    }, [])


    const sendMessage = async () => {
        const message = {
            user_id: undefined,
            message: value,
            id: uuidv4(),
            event: 'message'
        }
        addMessage({
            user_id: undefined,
            message: value,
            id: uuidv4(),
            event: 'message'
        })
        socket.current.send(JSON.stringify(message));
        setValue('')
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
                        <textarea 
                            className="seller-chat__questions-entering" 
                            rows="4" 
                            cols="50" 
                            name="comment"
                            value={value} 
                            onChange={e => setValue(e.target.value)}
                            >Напишите ваш ответ...</textarea>
                        <input onClick={sendMessage} className="seller-chat__questions-button" type="button" value="SEND"/>
                     </form>
                     <div className="seller-chat__messages">

                        
                        { 
                            messages.map((mess) => {
                                const classNameChat = "chat__user-message" ? !mess.user_id : "seller-chat__seller-message";
                                
                                return (
                                    <div className={classNameChat}>
                                        <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__seller-icon"/>
                                        <span className="seller-chat__seller-text">{mess.message}</span>
                                    </div>
                                )
                            })
                        }

                     </div>
                    </div>
                </section>
)}