import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useUsersStore = create(set => ({
    users: [
        {
            id: 111,
            src: "/images/profile_image.jpg", 
            alt: "иконка пользователя",
            name: "Артём",
            surname: "Трегубов",
            date: "29.06.2024",
            text: "Хорошие кроссы"
        },

        {
            id: 222,
            src: "https://i.pinimg.com/736x/b6/96/75/b69675e00b298a81012ef56860a37b12.jpg", 
            alt: "иконка пользователя",
            name: "Том",
            surname: "Харди",
            date: "29.06.2024",
            text: "Зе бест сникерс"
        },
 
    ],

    addUser: (user) =>
        set((state) => ({
         users: [

         { 
            id: uuidv4(), 
            src: user.src, 
            alt: user.alt, 
            name: user.name,
            surname: user.surname,
            date: user.date,
            text: user.text
         },
          ...state.users,

         ]})),

}))

export default useUsersStore;