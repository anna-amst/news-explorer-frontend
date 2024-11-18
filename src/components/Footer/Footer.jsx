import "./Footer.css";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook_icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy;2024 Supersite, Powered by News API
      </p>
      <div className="footer__menu">
        <div className="footer__navigation">
          <a
            href="/"
            target="_blank"
            className="footer__navigation-item footer__navigation-item-home"
          >
            Home
          </a>
          <a
            href="https://www.tripleten.com"
            target="_blank"
            className="footer__navigation-item footer__navigation-item-tripleten"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icons">
          <a
            href="https://github.com/anna-amst"
            target="_blank"
            className="footer__icon-link"
          >
            <img
              src={githubIcon}
              className="footer__icon footer__icon-github"
            />{" "}
          </a>
          <a
            href="https://www.facebook.com/login.php/"
            target="_blank"
            className="footer__icon-link"
          >
            <img
              src={facebookIcon}
              className="footer__icon footer__icon-facebook"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
