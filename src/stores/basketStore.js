import { create } from "zustand";

const useBasketStore = create(set => ({
     backetCards: [
    ],

    addBasketCard: (card) =>
        set((state) => ({
            backetCards: [

         { 
            id: card.id,
            name: card.name,
            src: card.src,
            alt: card.alt,
            size: card.size,
            price: card.price,
            count: 1,
         },
          ...state.backetCards,

         ]})),

}))

export default useBasketStore;