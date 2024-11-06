import Navigation from "../Navigation/Navigation";
import "./Header.css";
import { useLocation } from "react-router-dom";

function Header({handleLoginClick, isLoggedIn, handleMobileMenuClick, handleHomeClick, handleSavedArticlesClick}) {

  const location = useLocation();
  return (
    <header className="header">
      <button className={`header__title ${location.pathname === "/saved-news" ? "header__title__saved-news" : ""}`} onClick={handleHomeClick}>News Explorer</button>
      <Navigation handleLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} handleMobileMenuClick={handleMobileMenuClick} handleHomeClick={handleHomeClick} handleSavedArticlesClick={handleSavedArticlesClick} />
    </header>
  );
}

export default Header;
