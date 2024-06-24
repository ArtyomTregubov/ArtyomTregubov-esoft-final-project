import React from "react";

export default function Question({showChat, onShowChat}) {

    function handleShowUserChat() {
        onShowChat(!showChat);
      }

    return (

            <button onClick={handleShowUserChat} className="question"></button>

)}