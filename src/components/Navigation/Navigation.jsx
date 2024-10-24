import "./Navigation.css";

function Navigation({openModal}) {
  return (
    <div className="navigation">
      <button className="navigation__home">Home</button>
      <button className="navigation__signin" onClick={openModal} >Sign In</button>
    </div>
  );
}

export default Navigation;
