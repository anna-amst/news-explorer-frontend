import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({openModal, isLoggedIn}) {
  return (
    <header className="header">
      <h1 className="header__title">News Explorer</h1>
      <Navigation openModal={openModal} isLoggedIn={isLoggedIn} />
      {/* <button className="header__button" type="button"></button> */}
    </header>
  );
}

export default Header;