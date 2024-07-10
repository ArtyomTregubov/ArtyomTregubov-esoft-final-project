import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import useUsersStore from "../stores/usersStore";

export default function SellerChat({ showSellerChat, onShowSellerChat }) {

    const users = useUsersStore((state) => state.users);

    const [messagesDefault, setDefaultMessages] = useState([{
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

    function getChats() {
        return [...new Set(messagesDefault.map(obj => obj.chatId))]
    }
    messagesDefault.sort((mes1, mes2) => mes2.id - mes1.id)
    const chats = getChats();
    const [messages, setMessages] = useState([...messagesDefault])
    const [value, setValue] = useState('');
    const [activeChatId, setActiveChat] = useState(0);
    const [connected, setConnected] = useState(false);
    
    

    

    function handleActiveChat(userId) {
        setActiveChat(userId);
        const mess = messagesDefault.filter((mes) => mes.chatId === userId);
        setMessages([...mess]);
    }

    function handleCloseSellerChat() {
        onShowSellerChat(false);
    }

    const socket = useRef()

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:5000')


        socket.current.onopen = () => {
            setConnected(true)
        }
        socket.current.onmessage = (e) => {
            const message = JSON.parse(e.data);
            setMessages(prev => [message, ...prev]);
        }
        socket.current.onclose = () => {

        }
        socket.current.onerror = () => {

        }


    }, [])

    const sendMessage = async () => {
        const message = {
            userId: undefined,
            message: value,
            id: uuidv4(),
            event: 'message',
            chatId: activeChatId
        }
        socket.current.send(JSON.stringify(message));
        setValue('')
    }

    if (!connected) {
        return (<section className={showSellerChat ? `chat_opened` : `chat`}>
            Нет соединения с сервером
        </section>)
    }

    if (!activeChatId) {
        return (
            <section className={showSellerChat ? `seller-chat_opened` : `seller-chat`}>
            <button onClick={handleCloseSellerChat} className="seller-chat__close-button"></button>
            <div className="seller-chat__users-container">

                {
                    chats.map((chatId) => {
                        
                        if(chatId){
                            const user = users.filter((user) => user.id === chatId)[0]
    
                            const name = user.name
                            const surname = user.surname
                            
                        return (
                            <button className="seller-chat__user" onClick={()=>handleActiveChat(user.id)}>
                                <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__user-icon" />
                                <span className="seller-chat__user-name">{name} {surname}</span>
                            </button>
                        )
                        }
                        
                    })
                }

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
                    <input onClick={sendMessage} className="seller-chat__questions-button" type="button" value="SEND" />
                </form>
                <div className="seller-chat__messages">
                </div>
            </div>
        </section>
        )
    }

    return (
        <section className={showSellerChat ? `seller-chat_opened` : `seller-chat`}>
            <button onClick={handleCloseSellerChat} className="seller-chat__close-button"></button>
            <div className="seller-chat__users-container">

                {
                    chats.map((chat) => {
                        if(chat){
                            const user = users.filter((user) => user.id === chat)[0]
    
                            const name = user.name
                            const surname = user.surname

                            const classActiveChat = activeChatId === user.id ?  "green" : "";
                        
                        return (
                            <button style={{backgroundColor: classActiveChat}} className="seller-chat__user" onClick={()=>handleActiveChat(user.id)}>
                                <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__user-icon" />
                                <span className="seller-chat__user-name">{name} {surname}</span>
                            </button>
                        )
                        }
                        
                    })
                }

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
                    <input onClick={sendMessage} className="seller-chat__questions-button" type="button" value="SEND" />
                </form>
                <div className="seller-chat__messages">


                    {
                        messages.map((mess) => {
                            const classNameChat = !mess.userId ? "chat__user-message" : "seller-chat__seller-message";

                            return (
                                <div className={classNameChat}>
                                    <img src="./images/user_message_icon.svg" alt="иконка пользователя" className="seller-chat__seller-icon" />
                                    <span className="seller-chat__seller-text">{mess.message}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}