import React from "react";

export default function SellerQuestionButton({showSellerChat, onShowSellerChat}) {

    function handleShowSellerChat() {
        onShowSellerChat(!showSellerChat);
      }

    return (

            <button onClick={handleShowSellerChat} className="question"></button>

)}