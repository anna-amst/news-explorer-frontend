import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({handleLoginClick, isLoggedIn, handleMobileMenuClick}) {
  return (
    <header className="header">
      <h1 className="header__title">News Explorer</h1>
      <Navigation handleLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} handleMobileMenuClick={handleMobileMenuClick} />
    </header>
  );
}

export default Header;