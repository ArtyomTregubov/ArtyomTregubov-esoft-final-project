import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useNewsStore = create(set => ({
    news: [
        {
            id: uuidv4(),
            src: "/images/Air Jordan 5 «Olive».jpg", 
            alt: "Air Jordan 5 «Olive».jpg",
            title: "Air Jordan 5 «Olive» впервые вернутся весной 2024 года.",
            link:"https://sneakerhype.ru/air-jordan-5-olive/",
        },

        {
            id: uuidv4(),
            src: "/images/Lionel Messi x adidas Samba.jpeg", 
            alt: "Lionel Messi x adidas Samba.jpeg",
            title: "Лионель Месси и adidas выпустили совместные Samba.",
            link:"https://sneakerfreak.ru/lionel-messi-adidas-samba/",
        },

        {
            id: uuidv4(),
            src: "/images/New Balance «Boro Pack».jpg", 
            alt: "New Balance «Boro Pack».jpg",
            title: "New Balance выпустит «Boro Pack» в стиле японского пэчворка.",
            link:"https://sneakerhype.ru/new-balance-boro-pack/",
        },
    ],

    addNewsCard: (card) =>
        set((state) => ({
         news: [

         { 
            id: uuidv4(), 
            src: card.src, 
            alt: card.alt, 
            title: card.title,
            link: card.link
         },
          ...state.news,

         ]})),

    removeNewsCard: (id) =>
        set((state) => ({
            news: state.news.filter((card) => card.id !== id),
        })),

}))

export default useNewsStore;