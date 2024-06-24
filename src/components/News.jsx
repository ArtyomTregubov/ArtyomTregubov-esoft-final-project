import React from "react";
import NewsCard from "./NewsCard";

export default function News() {
    return (
            <section className="news">
                <h2 className="news__title">Новости</h2>
                <div className="news__grid">

                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>

                </div>
            </section>
)}