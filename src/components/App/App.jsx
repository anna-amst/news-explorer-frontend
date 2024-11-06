import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { fetchNewsArticles } from "../../utils/news-api";
import { useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import SuccessModal from "../SuccessModal/SuccessModal";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onSearch = (keyword) => {
    console.log("onSearch called with:", keyword);
    setIsLoading(true);
    setError("");
    setIsSearchPerformed(true);

    fetchNewsArticles(keyword)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleSavedArticlesClick = () => {
    navigate("/saved-news");
  };

  const handleSignUp = () => {
    setActiveModal("success-modal");
  };

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    closeModal();
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleMobileMenuClick = () => {
    console.log("Mobile menu clicked");
    setActiveModal("mobile-menu");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const navigateToLogin = () => {
    setActiveModal("login");
  };

  const navigateToSignUp = () => {
    setActiveModal("register");
  };
 

  return (
    <>
      <div className="page">
        <div className="page__content">
        <div className={`page__background ${location.pathname === "/saved-news" ? "page__no-bg" : ""}`}>
          <Header
            handleLoginClick={handleLoginClick}
            handleMobileMenuClick={handleMobileMenuClick}
            isLoggedIn={isLoggedIn}
            handleHomeClick={handleHomeClick}
            handleSavedArticlesClick={handleSavedArticlesClick}
          />
          </div>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <div className="page__background">
                    <Main onSearch={onSearch} />
                  </div>
                  {isSearchPerformed && (
                    <NewsCardList
                      articles={articles}
                      isLoading={isLoading}
                      error={error}
                    />
                  )}
                  <About />
                </>
              }
            />
            <Route
              path="saved-news"
              element={
                <>
                  <SavedNews />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
      {activeModal === "login" && (
        <LoginModal
          isOpen={true}
          closeModal={closeModal}
          navigateToSignUp={navigateToSignUp}
          handleLoginSubmit={handleLoginSubmit}
        />
      )}

      {activeModal === "register" && (
        <RegisterModal
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
          handleSignUp={handleSignUp}
        />
      )}

      {activeModal === "mobile-menu" && (
        <MobileNavBar
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
          handleLoginClick={handleLoginClick}
        />
      )}

      {activeModal === "success-modal" && (
        <SuccessModal
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
        />
      )}
    </>
  );
}

export default App;
