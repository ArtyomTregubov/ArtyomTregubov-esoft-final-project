import React from "react";
import AccountUserDataForm from "./AccountUserDataForm";
import GalleryCard from "./GalleryCard";
import PurchasesCard from "./PurchasesCard";

export default function AccountUsser() {
    return (
                <section className="account">
                    <div className="account__profile">
                        <img src="./images/avatar_image_1.png" alt="аватар" className="account__profile-avatar" />

                        <AccountUserDataForm/>

                    </div>
                    <div className="account__cards">

                        <div className="account__favourites">
                            <h2 className="account__favourites-title">Избранное</h2>

                            <div className="gallery__grid gallery__grid-favourites">

                            <GalleryCard/>
                            <GalleryCard/>
                            <GalleryCard/>

                            </div>
                        </div>

                        <div className="account__favourites account__purchases">
                            <h2 className="account__favourites-title account__purchases-title">Покупки</h2>

                            <div className="gallery__grid gallery__grid-favourites">

                                <PurchasesCard/>
                                <PurchasesCard/>
                                <PurchasesCard/>                                

                            </div>
                        </div>
                    </div>
                </section>
)}