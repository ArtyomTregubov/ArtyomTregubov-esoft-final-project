import React from "react";

export default function CommentsForm({comment}) {

  return (

            <div className="comments__container" key={comment.id}>
                <div className="comments__user">
                    <img src={comment.src} alt={comment.alt} className="comments__user-icon"/>
                    <div className="comments__user-description">
                        <span className="comments__user-name">{comment.name} {comment.surname}</span>
                        <span className="comments__date">{comment.date}</span>
                    </div>
                </div>
                <span className="comments__text">{comment.text}</span>
            </div>
    
  );
}