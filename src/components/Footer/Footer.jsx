import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">&copy;2024 Supersite, Powered by News API</p>
      <div className="footer__menu">
        <div className="footer__navigation">
          <p className="footer__navigation-home">Home</p>
          <p className="footer__navigation-tripleten">TripleTen</p>
        </div>
        <div className="footer__icons">
          <img className="footer__github" />
          <img className="footer__facebook" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
