import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import useChatsStore from "../stores/chatsStore";

export default function Chat({showChat, onShowChat}) {

    const [messages, setMessages] = useState([{
        userId: 1,
        message: "Юзер 1 Артем пишет",
        id: 1,
        event: "message",
        chatId: 1,
    },
    {
        userId: undefined,
        message: "Продавец отвечает",
        id: 2,
        event: "message",
        chatId: 1,
    },
    {
        userId: 2,
        message: "Юзер 2 Том Харди пишет",
        id: 3,
        event: "message",
        chatId: 2,
    },
    {
        userId: undefined,
        message: "Продавец отвечает",
        id: 4,
        event: "message",
        chatId: 2,
    },
    {
        userId: 1,
        message: "Юзер 1 Артем пишет",
        id: 5,
        event: "message",
        chatId: 1,
    },
    {
        userId: 1,
        message: "Юзер 1 Артем пишет",
        id: 6,
        event: "message",
        chatId: 1,
    }]);
     messages.sort((mes1, mes2) => mes2.id - mes1.id)
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);

    function handleCloseUserChat() {
        onShowChat(false);
    }

    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000')


        socket.current.onopen = () => {
            setConnected(true)
        }
        socket.current.onmessage = (e) => {
            const message = JSON.parse(e.data)
            setMessages(prev => [message, ...prev])
        }
        socket.current.onclose = () => {
            
        }
        socket.current.onerror = () => {
            
        }


    }, [])


    const sendMessage = async () => {
        const message = {
            userId: uuidv4(),
            message: value,
            id: uuidv4(),
            event: 'message',
        }
        message.chatId = message.userId
        socket.current.send(JSON.stringify(message));
        setValue('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    if (!connected) {
        return (<section className={ showChat ? `chat_opened` : `chat`}>
            Нет соединения с сервером
        </section>)
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
                    <input onClick={sendMessage} onKeyDown={handleKeyDown} className="chat__questions-button" type="button" value="SEND"/>
                </form>

                    <div className="chat__messages">

                        { 
                            messages.map((mess) => {
                                debugger
                                const classNameChat = mess.userId ? "chat__user-message" : "seller-chat__seller-message";
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