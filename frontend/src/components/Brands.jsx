import React from "react";
import useStore from "../stores/store";

export default function Brands() {

    const filterCardByBrand = useStore((state) => state.filterCardByBrand);
    const resetBrands = useStore((state) => state.resetFilterBrand);

  return (
    <section className="brands">
        <ul className="brands__grid">

            <li className="brands__grid-cell">
                <button onClick={() => resetBrands()} className="brands__grid-button">
                    <span className="brands__all">ВСЕ</span>
                    <span className="brands__all-brands">бренды</span>
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("adidas")} className="brands__grid-button">
                    <img src="./images/adidas_logo.png" alt="Логотип бренда адидас" className="brands__logo" />
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("nike")} className="brands__grid-button">
                    <img src="./images/nike_logo.png" alt="Логотип бренда найк" className="brands__logo" />
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("puma")} className="brands__grid-button">
                    <img src="./images/puma_logo.png" alt="Логотип бренда пума" className="brands__logo" />
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("converse")} className="brands__grid-button">
                    <img src="./images/converse_logo.png" alt="Логотип бренда конверс" className="brands__logo" />
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("reebok")} className="brands__grid-button">
                    <img src="./images/reebok_logo.png" alt="Логотип бренда рибок" className="brands__logo" />
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("vans")} className="brands__grid-button">
                    <img src="./images/vans_logo.png" alt="Логотип бренда ванс" className="brands__logo" />
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("jordan")} className="brands__grid-button">
                    <img src="./images/jordan_logo.png" alt="Логотип бренда джордан" className="brands__logo" />
                </button>
            </li>

            <li className="brands__grid-cell">
                <button onClick={() => filterCardByBrand("new balance")} className="brands__grid-button">
                    <img src="./images/new_balance_logo.png" alt="Логотип бренда ньюбэланс" className="brands__logo" />
                </button>
            </li>

        </ul>
</section>
  )}