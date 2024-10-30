import { useState } from "react";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";

function Navigation({ openModal, isLoggedIn }) {
  return (
    <div className="navigation">
      <div className="navigation__buttons">
        <button className="navigation__home">Home</button>
        {isLoggedIn ? (
          <>
            <button className="navigation__saved-articles">
              Saved articles
            </button>
            <button className="navigation__logout">
              Elise
              <img className="navigation__logout-icon" src={logoutIcon} />
            </button>
          </>
        ) : (
          <button className="navigation__signin" onClick={openModal}>
            Sign In
          </button>
        )}
        </div>
        <div className="navigation__mobile">
          <span className="navigation__mobile-span"></span>
          <span className="navigation__mobile-span"></span>
      </div>
    </div>
  );
}

export default Navigation;
