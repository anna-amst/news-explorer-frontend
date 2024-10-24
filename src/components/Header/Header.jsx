import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({openModal}) {
  return (
    <header className="header">
      <h1 className="header__title">News Explorer</h1>
      <Navigation openModal={openModal} />
    </header>
  );
}

export default Header;