import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useCommentsStore = create(set => ({
    comments: [
        {
            id: uuidv4(),
            src: "/images/profile_image.jpg", 
            alt: "иконка пользователя",
            name: "Артём",
            surname: "Трегубов",
            date: "29.06.2024",
            text: "Хорошие кроссы"
        },

        {
            id: uuidv4(),
            src: "https://i.pinimg.com/736x/b6/96/75/b69675e00b298a81012ef56860a37b12.jpg", 
            alt: "иконка пользователя",
            name: "Том",
            surname: "Харди",
            date: "29.06.2024",
            text: "Зе бест сникерс"
        },
 
    ],

    addComment: (comment) =>
        set((state) => ({
         comments: [

         { 
            id: uuidv4(), 
            src: comment.src, 
            alt: comment.alt, 
            name: comment.name,
            surname: comment.surname,
            date: comment.date,
            text: comment.text
         },
          ...state.comments,

         ]})),

    removeComment: (id) =>
        set((state) => ({
            comments: state.comments.filter((comment) => comment.id !== id),
        })),

}))

export default useCommentsStore;