import { useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import altIcon from "../../assets/alt-logout.svg";

function Navigation({ handleLoginClick, isLoggedIn, handleMobileMenuClick, handleHomeClick, handleSavedArticlesClick, handleLogOut }) {
 const location = useLocation();

 console.log(isLoggedIn);
  return (
    <nav className={`navigation ${location.pathname === "/saved-news" ? "navigation--saved" : ""}`}>
      <ul className="navigation__buttons">
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
            <button className="navigation__logout" onClick={handleLogOut}>
              Elise
              <img className="navigation__logout-icon" src={location.pathname === "/" ? logoutIcon : altIcon} />
            </button>
          </>
        ) : (
          <button className="navigation__signin" onClick={handleLoginClick}>
            Sign In
          </button>
        )}
        </ul>
        <button type="button" className="navigation__mobile" onClick={handleMobileMenuClick}></button>
      </nav>
  );
}

export default Navigation;
