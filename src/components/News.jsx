import React from "react";
import NewsCard from "./NewsCard";
import useNewsStore from "../stores/newsStore";

export default function News() {

    const news = useNewsStore((state) => state.news);

    return (
            <section className="news">
                <h2 className="news__title">Новости</h2>
                <div className="news__grid">

                {
                    news.map((card)=>{ 

                        return (

                            <NewsCard
                                card={card}
                            />
                            
                        )
                    })
                }


                </div>
            </section>
)}