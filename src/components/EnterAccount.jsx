import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function EnterAccount({showEnter, onShowEnter}) {

    function closeEnterOnClick() {
        onShowEnter(false);
      }

    const overlayRef = useRef();

    const handleClickOverlay = (e) => {
      if (e.target === overlayRef.current) {
        closeEnterOnClick();
      }
    }

    return (
                <section className={showEnter ? `enter_opened` : `enter`} onClick={handleClickOverlay} ref={overlayRef}>
                    <div className="enter__container">
                        <Link to="/login" className="enter__link">Войти</Link>
                        <span className="enter__text">или</span>
                        <Link to="/auth" className="enter__link" >Зарегистрироваться?</Link>
                    </div>
                </section>
)}