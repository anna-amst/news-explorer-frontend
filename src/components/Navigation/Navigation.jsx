import { useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import altIcon from "../../assets/alt-logout.svg";

function Navigation({ handleLoginClick, isLoggedIn, handleMobileMenuClick, handleHomeClick, handleSavedArticlesClick }) {
 const location = useLocation();

 console.log(isLoggedIn);
  return (
    <div className={`navigation ${location.pathname === "/saved-news" ? "navigation--saved" : ""}`}>
      <div className="navigation__buttons">
        <button
          className={`navigation__home ${
            location.pathname === "/" ? "navigation__home__active" : ""
          }`} onClick= {handleHomeClick}>Home</button>
        {isLoggedIn ? (
          <>
            <button
              className={`navigation__saved-articles ${
                location.pathname === "/saved-news" ? "navigation__saved-articles__active" : ""
              }`} onClick={handleSavedArticlesClick}>
              Saved articles
            </button>
            <button className="navigation__logout">
              Elise
              <img className="navigation__logout-icon" src={location.pathname === "/" ? logoutIcon : altIcon} />
            </button>
          </>
        ) : (
          <button className="navigation__signin" onClick={handleLoginClick}>
            Sign In
          </button>
        )}
        </div>
        <button type="button" className="navigation__mobile" onClick={handleMobileMenuClick}></button>
      </div>
  );
}

export default Navigation;
