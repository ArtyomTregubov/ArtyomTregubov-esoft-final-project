import React from "react";
import CommentsForm from "./CommentsForm";
import CommentsCard from "./CommentsCard"
import useCommentsStore from "../stores/commentsStore";

export default function CommentsBlock() {

    const comments = useCommentsStore((state) => state.comments);

  return (

    <div className="comments">
        <h2 className="comments__title">Отзывы</h2>
    
        <CommentsForm/>
        
                {
                    comments.map((comment)=>{ 

                        return (

                            <CommentsCard
                                comment={comment}
                            /> 
                            
                        )
                    })
                }
          
    </div>
    
  );
}