import { useState } from "react";
import "./Navigation.css";

function Navigation({ openModal, isLoggedIn }) {
    
  return (
    <div className="navigation">
        <div className="navigation__buttons">
      <button className="navigation__home">Home</button>
      {isLoggedIn ? (
        <>
        <button className="navigation__saved-articles">Saved articles</button>
        <button className="navigation__logout">
          Elise<img className="navigation__logout-icon" />
        </button>
        </>
      ) : (<button className="navigation__signin" onClick={openModal}>
        Sign In
      </button>)}
      </div>

    
    </div>
  );
}

export default Navigation;
