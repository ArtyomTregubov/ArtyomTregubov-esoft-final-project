import { create } from "zustand";

const useChatsStore = create(set => ({
     messages: [
        { 
        user_id: 1,
        message: "Юзер 1 Артем пишет",
        id: 1,
        event: "message"
     },
     { 
        user_id: undefined,
        message: "Продавец отвечает",
        id: 2,
        event: "message"
     },
     { 
        user_id: 2,
        message: "Юзер 2 Том Харди пишет",
        id: 3,
        event: "message"
     }
    ,
    { 
        user_id: undefined,
        message: "Продавец отвечает",
        id: 4,
        event: "message"
     },
     { 
        user_id: 1,
        message: "Юзер 1 Артем пишет",
        id: 5,
        event: "message"
     },
     { 
        user_id: 1,
        message: "Юзер 1 Артем пишет",
        id: 6,
        event: "message"
     },
    ],

    addMessage: (mess) =>
        set((state) => ({
            messages: [

         { 
            user_id: mess.user_id,
            message: mess.message,
            id: mess.id,
            event: "message"
         },
          ...state.messages,

         ]})),

}))

export default useChatsStore;