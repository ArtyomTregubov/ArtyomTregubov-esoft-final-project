import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import useChatsStore from "../stores/chatsStore";

export default function Chat({showChat, onShowChat}) {

    const messages = useChatsStore((state) => state.messages);
    const addMessage = useChatsStore((state) => state.addMessage);

    function handleCloseUserChat() {
        onShowChat(false);
    }


    const [value, setValue] = useState('');
    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000')


        socket.current.onopen = () => {
            
        }
        socket.current.onmessage = (e) => {
            const message = JSON.parse(e.data)
            //addMessage(prev => [message, ...prev])
        }
        socket.current.onclose = () => {
            
        }
        socket.current.onerror = () => {
            
        }


    }, [])


    const sendMessage = async () => {
        const message = {
            user_id: uuidv4(),
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
                <section className={ showChat ? `chat_opened` : `chat`}>
                    <button onClick={handleCloseUserChat} className="chat__close-button"></button>

                    <form className="chat__questions-form">
                    <textarea 
                        className="chat__questions-entering" 
                        value={value} 
                        onChange={e => setValue(e.target.value)}
                        rows="4" 
                        cols="50" 
                        name="message"
                        type="text"
                    > Задайте ваш вопрос...</textarea>
                    <input onClick={sendMessage} className="chat__questions-button" type="button" value="SEND"/>
                </form>

                    <div className="chat__messages">

                        { 
                            messages.map((mess) => {
                                const classNameChat = "chat__user-message" ? mess.user_id : "seller-chat__seller-message";
                                return (
                                            <div className={classNameChat}>
                                                <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="chat__user-icon"/>
                                                <span className="chat__user-text">{mess.message}</span>
                                            </div>
                                )
                            })
                        }

                    </div>
                </section>
)}