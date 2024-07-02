import React from "react";
import AccountUserDataForm from "./AccountUserDataForm";
import CardFavourites from "./CardFavourites";
import PurchasesCard from "./PurchasesCard";
import useStore from "../stores/store";

export default function AccountUsser() {

    const sneakers = useStore((state) => state.sneakers);
    const favorites = useStore((state) => state.favorites);
    

    return (
                <section className="account">
                    <div className="account__profile">
                        <img src="./images/avatar_image_1.png" alt="аватар" className="account__profile-avatar" />

                        <AccountUserDataForm/>

                    </div>
                    <div className="account__cards">

                        <div className="account__favourites">
                            <h2 className="account__favourites-title">Избранное</h2>

                            <div className="account__grid-favourites">

                        { 
                            favorites.map((card) => {

                                return (

                                        <CardFavourites
                                            card={card}
                                        />
                                )
                            })
                        }

                            </div>
                        </div>

                        <div className="account__favourites account__purchases">
                            <h2 className="account__favourites-title account__purchases-title">Покупки</h2>

                            <div className="account__grid-favourites">

                            { 
                                sneakers.map((card) => {

                                    return (

                                            <PurchasesCard
                                                card={card}
                                            />
                                 
                                    )
                                })
                            }                             

                            </div>
                        </div>
                    </div>
                </section>
)}