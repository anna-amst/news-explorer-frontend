import { useState } from "react";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import mobileMenuIcon from "../../assets/menu.svg";

function Navigation({ handleLoginClick, isLoggedIn }) {
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
          <button className="navigation__signin" onClick={handleLoginClick}>
            Sign In
          </button>
        )}
        </div>
        <img src={mobileMenuIcon} className="navigation__mobile" />
      </div>
  );
}

export default Navigation;
