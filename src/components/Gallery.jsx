import React from "react";
import useStore from "../stores/store";
import GalleryCard from "./GalleryCard";

export default function Gallery() {

  const [visibleCards, setVisibleCards] = React.useState(8)

  let filteredSnikers = useStore((state) => state.filteredSnikers);

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 8);
  };

  return (
    <section className="gallery" id="galleryID">

        <div className="gallery__grid">

            

            {
                    filteredSnikers.slice(0, visibleCards).map((card)=>{ 
                        return (

                          <GalleryCard
                            card={card}
                          />
                            
                        )
                    })
                }

            
        </div>

        <button onClick={handleShowMore} className="gallary__more-button">Ещё</button>

    </section>
  )}