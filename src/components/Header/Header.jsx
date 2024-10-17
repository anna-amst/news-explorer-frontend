import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">News Explorer</h1>
      <div className="header__menu">
      <button className="header__button-home">Home</button>
      <button className="header__button-signin">Sign In</button>
      </div>
    </div>
  );
}

export default Header;