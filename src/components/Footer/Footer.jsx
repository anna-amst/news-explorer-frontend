import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook_icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy;2024 Supersite, Powered by News API</p>
      <div className="footer__menu">
        <div className="footer__navigation">
          <button className="footer__navigation-item footer__navigation-item-home">Home</button>
          <button className="footer__navigation-item footer__navigation-item-tripleten">TripleTen</button>
        </div>
        <div className="footer__icons">
          <img src={githubIcon} className="footer__icon footer__icon-github" />
          <img src={facebookIcon} className="footer__icon footer__icon-facebook" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
