import React from "react";
import GalleryCard from "./GalleryCard";

export default function Gallery() {
  return (
    <section className="gallery">

        <div className="gallery__grid">

            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            <GalleryCard/>
            
        </div>

        <button className="gallary__more-button">Ещё</button>

    </section>
  )}