import React from "react";

export default function ChatForm() {

    return (
                <form className="chat__questions-form">
                    <textarea 
                        className="chat__questions-entering" 
                        value="" 
                        rows="4" 
                        cols="50" 
                        name="comment"
                    > Задайте ваш вопрос...</textarea>
                    <input className="chat__questions-button" type="button" value="SEND"/>
                </form>
)}