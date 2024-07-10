import { create } from "zustand";

const useSizeStore = create(set => ({
sizes: [
         {
            size: 36, 
         },
         {
            size: 37, 
         },
         {
            size: 38, 
         },
         {
            size: 39, 
         },
         {
            size: 40, 
         },
         {
            size: 41, 
         },
         {
            size: 42, 
         },
         {
            size: 43, 
         },
         {
            size: 44, 
         },
         {
            size: 45, 
         },
        ]
}))

export default useSizeStore;