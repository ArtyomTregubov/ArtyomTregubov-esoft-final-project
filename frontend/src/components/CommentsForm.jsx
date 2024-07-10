import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useCommentsStore from "../stores/commentsStore";

export default function CommentsForm() {

  const addComment = useCommentsStore((state) => state.addComment);

  const [newComments, setNewComments] = useState("");

  const onChangeComment = (e) => {
    setNewComments(e.target.value);
  };

  const addComments = (e) => {
    e.preventDefault();
    addComment(
        { 
            id: uuidv4(), 
            src: "/images/user_message_icon.svg", 
            alt: "Иконка профиля", 
            name: "Неизвестный",
            surname: "пользователь",
            date: "29.06.2024",
            text:  newComments
        }
    );

    clear();
  };

  const clear = () => {
    setNewComments("");
  }

  return (

    <form className="comments__form">
        <textarea className="comments__entering"
                  onChange={onChangeComment}
                  type="text" 
                  rows="4" 
                  cols="50" 
                  name="comment" 
                  required value={newComments}
                  placeholder="Оставьте ваш отзыв...">
        </textarea>

        <input className="comments__button" 
                type="button" 
                defaultValue="Отправить"
                onClick={addComments}
                />
    </form>
    
  );
}