import { create } from "zustand";

const useDateStore = create(set => ({
days: [
         {
            day: 1, 
         },
         {
            day: 2, 
         },
         {
            day: 3, 
         },
         {
            day: 4, 
         },
         {
            day: 5, 
         },
         {
            day: 6, 
         },
         {
            day: 7, 
         },
         {
            day: 8, 
         },
         {
            day: 9, 
         },
         {
            day: 10, 
         },
         {
            day: 11, 
         },
         {
            day: 12, 
         },
         {
            day: 13, 
         },
         {
            day: 14, 
         },
         {
            day: 15, 
         },
         {
            day: 16, 
         },
         {
            day: 17, 
         },
         {
            day: 18, 
         },
         {
            day: 19, 
         },
         {
            day: 20, 
         },
         {
            day: 21, 
         },
         {
            day: 22, 
         },
         {
            day: 23, 
         },
         {
            day: 24, 
         },
         {
            day: 25, 
         },
         {
            day: 26, 
         },
         {
            day: 27, 
         },
         {
            day: 28, 
         },
         {
            day: 29, 
         },
         {
            day: 30, 
         },
         {
            day: 31, 
         },
    ],

    months: [
        {
           month: "Январь", 
        },
        {
           month: "Февраль", 
        },
        {
           month: "Март", 
        },
        {
           month: "Апрель", 
        },
        {
           month: "Май", 
        },
        {
           month: "Июнь", 
        },
        {
           month: "Июль", 
        },
        {
           month: "Август", 
        },
        {
           month: "Сентябрь", 
        },
        {
           month: "Октябрь", 
        },
        {
           month: "Ноябрь", 
        },
        {
           month: "Декабрь", 
        },   
    ],

    years: [
        {
           year: 2020, 
        },
        {
           year: 2021, 
        },
        {
           year: 2022, 
        },
        {
           year: 2023, 
        },
        {
           year: 2024, 
        },
        {
           year: 2025, 
        },
        {
           year: 2026, 
        },
        {
           year: 2027, 
        },
        {
           year: 2028, 
        },
        {
           year: 2029, 
        },
    ],

    
}))

export default useDateStore;