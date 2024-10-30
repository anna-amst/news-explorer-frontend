import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook_icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy;2024 Supersite, Powered by News API</p>
      <div className="footer__menu">
        <div className="footer__navigation">
          <button className="footer__navigation-home">Home</button>
          <button className="footer__navigation-tripleten">TripleTen</button>
        </div>
        <div className="footer__icons">
          <img src={githubIcon} className="footer__github" />
          <img src={facebookIcon} className="footer__facebook" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
