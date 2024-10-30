import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

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

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false); // to track if the search started
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsSearching(true);
    navigate("/saved-news");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
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
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <div className="page__background">
                    <Header
                      handleLoginClick={handleLoginClick}
                      isLoggedIn={isLoggedIn}
                    />
                    <Main onSearch={handleSearch} />
                  </div>
                  <About />
                </>
              }
            />
            <Route
              path="saved-news"
              element={
                <>
                  <SavedNewsHeader />
                  <SavedNews />
                  <NewsCardList />
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
        />
      )}

      {activeModal === "register" && (
        <RegisterModal
          isOpen={true}
          closeModal={closeModal}
          navigateToLogin={navigateToLogin}
        />
      )}
    </>
  );
}

export default App;
