import { create } from "zustand";

const useChatsStore = create(set => ({
    messages: [],

    addMessage: (mess) =>
        set((state) => ({
            messages: [

         { 
            user_id: mess.user_id,
            message: mess.message,
            id: mess.id,
            event: mess.event
         },
          ...state.messages,

         ]})),

}))

export default useChatsStore;