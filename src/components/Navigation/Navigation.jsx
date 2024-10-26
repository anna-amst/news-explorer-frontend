import { useState } from "react";
import "./Navigation.css";

function Navigation({ openModal, isLoggedIn }) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    //button labels
    const buttons =['Home', 'Saved Articles'];

    // handle button click 
    const handleButtonClick = (index) => {
        setActiveIndex(index);
    }


  return (
    <div className="navigation">
        <div className="navigation__buttons">
      <button className={`navigation__home ${activeIndex === 0 ? 'active': ''}`} onClick={()=> handleButtonClick(0)}>Home</button>
      {isLoggedIn ? (
        <>
        <button className={`navigation__saved-articles ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleButtonClick(1)}>Saved articles</button>
        <button className="navigation__logout">
          Elise<img className="navigation__logout-icon" />
        </button>
        </>
      ) : (<button className="navigation__signin" onClick={openModal}>
        Sign In
      </button>)}
      </div>
      <button className="navigation__slider" type="button"></button>
    
    </div>
  );
}

export default Navigation;
